import Head from "next/head";

export default function DefaultHead({ title }) {
  return (
    <Head>
      <meta charset="utf-8" />
      <title>PLANET BABEL | {title}</title>
      <meta name="description" content="PLANET BABEL" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
      />
      <meta name="keywords" content="PLANET BABEL, Disko Babel" />

      <meta name="geo.placename" content="" />
      <meta name="geo.position" content="" />
      <meta name="geo.region" content="" />
      <meta name="ICBM" content="" />

      <link rel="author" href="diskoBabel e.V." />
      <link rel="publisher" href="diskoBabel e.V." />

      <meta itemprop="name" content="" />
      <meta itemprop="description" content="" />
      <meta itemprop="image" content="" />

      <meta name="twitter:card" content="" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:domain" content="" />
      <meta name="twitter:image:src" content="" />

      <meta property="og:title" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="/social__facebook.jpg" />
      <meta property="og:description" content="" />
      <meta property="og:site_name" content="" />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/apple-touch-icon-144x144-precomposed.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/apple-touch-icon-114x114-precomposed.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/apple-touch-icon-72x72-precomposed.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/apple-touch-icon-57x57-precomposed.png"
      />

      <link rel="shortcut icon" sizes="32x32" href="/favicon-32.png" />
      <link rel="shortcut icon" sizes="64x64" href="/favicon-64.png" />
    </Head>
  );
}
