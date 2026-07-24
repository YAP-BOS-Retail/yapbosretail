import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/logo-512.png" />
        <meta name="theme-color" content="#050505" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
