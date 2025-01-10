import Head from 'next/head';

import Analytics from '../components/analytics';
import Layout from '../components/layout';

import { fontsUrl, analyticsTag } from '../utils/constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/mailchimp.css';
import '../styles/video.css';

export  default function ({ Component, pageProps }) {
  const pageTitle = pageProps.pageTitle || "Zaratan Coliving";

  return (
    <div>
      <Analytics analyticsId={analyticsTag} />
      <link href={fontsUrl} rel="stylesheet" />

      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
