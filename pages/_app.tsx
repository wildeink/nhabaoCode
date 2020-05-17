import React from 'react'
import 'src/styles/global.css'
import 'src/styles/inter.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
