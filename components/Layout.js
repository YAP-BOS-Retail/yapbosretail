import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ t, title, description, children }) {
  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Head>
        <title>{title || t.meta.title}</title>
        <meta name="description" content={description || t.meta.description} />
      </Head>
      <Header t={t} />
      {children}
      <Footer t={t} />
    </div>
  );
}
