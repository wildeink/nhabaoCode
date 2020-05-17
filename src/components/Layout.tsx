import React from 'react'
import { EmojiToSvg } from 'src/hooks/useEmojiToSvg'
import { EmojiToSvgContext } from 'src/hooks/useEmojiToSvg'
import Meta from 'src/components/Meta'

export type Props = {
  children: React.ReactNode
  type: 'home' | 'post' | 'archive' | 'about'
  emojiToSvg: EmojiToSvg
}

export default function Layout({ children, emojiToSvg }: Props) {
  return (
    <EmojiToSvgContext.Provider value={emojiToSvg}>
      <div className="max-w-3xl mx-auto px-8 py-16 text-gray-900">
        <Meta />
        {children}
      </div>
    </EmojiToSvgContext.Provider>
  )
}
