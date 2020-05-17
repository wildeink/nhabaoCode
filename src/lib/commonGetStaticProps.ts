import getEmojiToSvg from 'src/lib/getEmojiToSvg'
import { GetStaticProps } from 'next'
import { EmojiToSvg } from 'src/hooks/useEmojiToSvg'

export type CommonBaseProps = {
  emojiToSvg: EmojiToSvg
}

const commonGetStaticProps = (
  Page: React.ComponentType<{ emojiToSvg: EmojiToSvg }>
): GetStaticProps<CommonBaseProps> => {
  return async () => {
    const emojiToSvg = await getEmojiToSvg(Page, { emojiToSvg: {} })
    return {
      props: {
        emojiToSvg,
      },
    }
  }
}

export default commonGetStaticProps
