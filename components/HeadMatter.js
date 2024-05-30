import Head from "next/head";

export const HeadMatter = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Luna Ranjit</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1"
      />
      <meta name="description" content="This is meta description" />
      <meta name="author" content="Luna Ranjit" />
      <link
        rel="shortcut icon"
        href="/images/fav-icon.svg"
        type="image/x-icon"
      />
      <link rel="icon" href="/images/fav-icon.svg" type="image/x-icon" />
      <meta property="og:title" content="Luna Ranjit" />
      <meta property="og:description" content="This is meta description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
    </Head>
  );
};
