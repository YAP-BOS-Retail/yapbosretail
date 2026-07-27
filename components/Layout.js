import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ t, title, description, children }) {
  const router = useRouter();
  const canonical = `https://www.yapbosretail.com${router.locale === 'en' ? '/en' : ''}${router.asPath === '/' ? '' : router.asPath}`;
  const pageTitle = title || t.meta.title;
  const pageDescription = description || t.meta.description;
  const ogImage = 'https://www.yapbosretail.com/og-image.png';

  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={router.locale === 'en' ? 'en_US' : 'tr_TR'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Header t={t} />
      {children}
      <Footer t={t} />
    </div>
  );
}
