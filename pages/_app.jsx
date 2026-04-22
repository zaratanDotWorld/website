import Head from 'next/head';
import { useRouter } from 'next/router';

import Analytics from '../components/analytics';
import Layout from '../components/layout';

import { fontsUrl, analyticsTag } from '../utils/constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/mailchimp.css';
import '../styles/video.css';

const siteUrl = "https://zaratan.world";
const defaultDescription =
  "Zaratan Coliving builds naturally-affordable shared housing and open-source tools for communities in Los Angeles.";
const defaultImage = `${siteUrl}/images/zaratan-art.png`;
const defaultImageAlt = "Zaratan Coliving";

export  default function ({ Component, pageProps }) {
  const router = useRouter();
  const pageTitle = pageProps.pageTitle
    ? `${pageProps.pageTitle} | Zaratan Coliving`
    : "Zaratan Coliving";
  const pageDescription = pageProps.pageDescription || defaultDescription;
  const pageImage = pageProps.pageImage || defaultImage;
  const pageImageAlt = pageProps.pageImageAlt || defaultImageAlt;
  // Strip query string and trailing slash (except root) for a stable canonical URL.
  const path = (router.asPath || '/').split('?')[0].split('#')[0];
  const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  const pageUrl = `${siteUrl}${normalizedPath === '/' ? '' : normalizedPath}`;

  return (
    <div>
      <Analytics analyticsId={analyticsTag} />
      <link href={fontsUrl} rel="stylesheet" />

      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:alt" content={pageImageAlt} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zaratan Coliving" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:alt" content={pageImageAlt} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
