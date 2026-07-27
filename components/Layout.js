import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ t, title, description, children }) {
  const router = useRouter();
  const canonical = `https://www.yapbosretail.com${router.locale === 'en' ? '/en' : ''}${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Head>
        <title>{title || t.meta.title}</title>
        <meta name="description" content={description || t.meta.description} />
        <link rel="canonical" href={canonical} />
      </Head>
      <Header t={t} />
      {children}
      <Footer t={t} />
    </div>
  );
}
