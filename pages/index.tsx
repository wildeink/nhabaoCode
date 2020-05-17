import React from 'react'
import Layout from 'src/components/Layout'
import commonGetStaticProps, {
  CommonBaseProps,
} from 'src/lib/commonGetStaticProps'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import Emoji from 'src/components/Emoji'

export const getStaticProps = commonGetStaticProps(Page)

export default function Page({ emojiToSvg }: CommonBaseProps) {
  return (
    <Layout type="home" emojiToSvg={emojiToSvg}>
      <Head>
        <title key="title">{SITE_TITLE}</title>
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:url" content={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
      </Head>
      <img
        src="/images/chibicode.jpg"
        alt="Shu Uesugi"
        className="rounded-full w-32 h-32 sblock mx-auto shadow-soft mb-4"
      />
      <h1 className="text-xl leading-tight tracking-tighter font-bold text-center">
        <a
          href="https://twitter.com/chibicode"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-border-styles hv:hover:border-yellow-400 inline-block"
        >
          @chibicode
        </a>
      </h1>
      <div className="md:flex pb-8">
        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://chibicode.com"
          rel="noopener"
          target="_blank"
          className="flex w-full md:mr-8 shadow-soft hv:hover:shadow-large transition-shadow duration-300 p-8 flex-col items-center my-16"
        >
          <h2 className="text-2xl leading-tight tracking-tighter font-bold text-center mb-6">
            English Page
          </h2>
          <span className="text-4xl mb-4">
            <Emoji className="mx-2" label="Shoe">
              👞
            </Emoji>
            <Emoji className="mx-2" label="USA">
              🇺🇸
            </Emoji>
            <Emoji className="mx-2" label="Whiskey">
              🥃
            </Emoji>
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight text-center">
            Shu Uesugi
          </h3>
        </a>
        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://jp.chibicode.com"
          rel="noopener"
          target="_blank"
          className="flex w-full md:ml-8 shadow-soft hv:hover:shadow-large transition-shadow duration-300 p-8 flex-col items-center my-16"
        >
          <h2 className="text-2xl leading-tight tracking-tighter font-bold text-center mb-6">
            日本語ページへ
          </h2>
          <span className="text-4xl mb-4">
            <Emoji className="mx-2" label="Ear of Rice">
              🌾
            </Emoji>
            <Emoji className="mx-2" label="Japan">
              🇯🇵
            </Emoji>
            <Emoji className="mx-2" label="Apology">
              🙇🏻
            </Emoji>
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight text-center">
            上杉周作
          </h3>
        </a>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/chibicode/hello"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-border-styles hv:hover:border-yellow-400 inline-flex text-xl py-1"
        >
          <Emoji className="mx-1">🐙</Emoji>
          <Emoji className="mx-1">🐱</Emoji>
        </a>
      </div>
    </Layout>
  )
}
