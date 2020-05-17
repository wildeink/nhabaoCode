import React from 'react'
import Head from 'next/head'
import { SITE_TITLE } from 'src/lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chibicode" />
      <meta name="twitter:creator" content="@chibicode" />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="fb:admins" content="1227210274" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#f6e05e"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#f6e05e" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      {/* Preload */}
      <link
        rel="preload"
        href="https://chibicode.com/inter/Inter-Bold.woff2?3.13"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Prefetch */}
      <link
        rel="prefetch"
        href="https://chibicode.com/inter/Inter-Italic.woff2?3.13"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="prefetch"
        href="https://chibicode.com/inter/Inter-Regular.woff2?3.13"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="prefetch"
        href="https://chibicode.com/iosevka/woff2/iosevka-slab-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="prefetch"
        href="https://chibicode.com/iosevka/woff2/iosevka-slab-bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
  )
}
