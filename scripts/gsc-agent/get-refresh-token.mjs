// One-time OAuth flow to mint a refresh token for the GSC agent.
//
// Usage:
//   GSC_CLIENT_ID=... GSC_CLIENT_SECRET=... node scripts/gsc-agent/get-refresh-token.mjs
//
// Opens a local server on :53682, prints an auth URL to paste into a browser,
// captures the redirect, and prints the refresh token to stdout. Store the
// printed token as the GSC_REFRESH_TOKEN GitHub secret.

import http from 'node:http';
import { URL } from 'node:url';
import { google } from 'googleapis';

const CLIENT_ID = process.env.GSC_CLIENT_ID;
const CLIENT_SECRET = process.env.GSC_CLIENT_SECRET;
const PORT = 53682;
const REDIRECT = `http://localhost:${PORT}/oauth2callback`;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GSC_CLIENT_ID or GSC_CLIENT_SECRET');
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT);

const authUrl = oauth2.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

const server = http.createServer(async (req, res) => {
  try {
    const code = new URL(req.url, REDIRECT).searchParams.get('code');
    if (!code) {
      res.statusCode = 400;
      res.end('No code in callback');
      return;
    }
    const { tokens } = await oauth2.getToken(code);
    res.end('Done. You can close this tab.');
    if (!tokens.refresh_token) {
      console.error('\nNo refresh_token returned. Revoke the app at https://myaccount.google.com/permissions and re-run.');
      process.exit(1);
    }
    console.log('\nREFRESH TOKEN:\n');
    console.log(tokens.refresh_token);
    console.log('\nStore this as the GSC_REFRESH_TOKEN GitHub secret.');
    server.close();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Error — check terminal');
    server.close();
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  console.log('\nOpen this URL in a browser:\n');
  console.log(authUrl);
});
