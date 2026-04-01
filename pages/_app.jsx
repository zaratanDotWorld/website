import Head from 'next/head';

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

export  default function ({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle
    ? `${pageProps.pageTitle} | Zaratan Coliving`
    : "Zaratan Coliving";
  const pageDescription = pageProps.pageDescription || defaultDescription;
  const pageImage = pageProps.pageImage || defaultImage;

  return (
    <div>
      <Analytics analyticsId={analyticsTag} />
      <link href={fontsUrl} rel="stylesheet" />

      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zaratan Coliving" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
