import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Rosario } from 'next/font/google';
import './utils/globals.css';
import { useRouter } from 'next/router';

import { Layout } from '@src/components/templates/layout';

const urbanist = Rosario({ subsets: ['latin'], variable: '--font-rosario' });

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={locale || 'en-US'}
    >
      <>
        <main className={`${urbanist.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <div id="portal" className={`${urbanist.variable} font-sans`} />
      </>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
