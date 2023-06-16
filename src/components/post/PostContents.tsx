import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import {CustomH2, CustomFigure, CustomImage} from '../mdx/index'
import {CH} from '@code-hike/mdx/components'

interface PostContentsProps {
  mdxSource: MDXRemoteSerializeResult
}

const PostContentsBlock = styled.section`

  h2 {
    font-weight: 800;
    font-size: 1.5rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    word-break: keep-all;
    font-weight: 400;
    line-height: 1.75;
  }

  strong {
    background: ${themedPalette.element};
    color: ${themedPalette.strong_font_color};
    padding: 1px 5px;
    border-radius: 5px;
    font-weight: 500;
  }

  img {
    width: 100%;
  }

  li {
    font-size: 1rem;
    margin-bottom: 7px;
  }

  li:last-child { 
    margin-bottom: 0;
  }

  a {
    color: ${themedPalette.hyperlink_color};
    :hover {
      color: #00bfff;
    }
  }

  blockquote {
    background: ${themedPalette.bg_page2};
    margin: 0;
    padding : 16px 32px;
    border-radius: 8px;
    margin: 1rem 2.5rem;
    @media (max-width: 425px) {
      margin: 1rem 0rem;
      padding: 8px 16px;
    }
  }

  figure {
    margin: 0;
  }

  figcaption {
    text-align: center;
    font-size: 0.75rem;
    font-style: italic;
  }

  /** 코드 블럭 부모 div */
  .ch-codegroup {
    @media (max-width: 425px) {
      margin: 1rem 0rem;
    }
  }

  /** 코드 블럭 내부 div - scroll에 영향 */
  .ch-code-scroll-parent {
    @media (max-width: 425px) {
      width: 100%;
    }
  }
`

export default function PostContents({ mdxSource }: PostContentsProps) {
  return (
    <PostContentsBlock>
      <MDXRemote {...mdxSource} components={{ img: CustomImage, h2: CustomH2, CH: CH, figure: CustomFigure }} />
    </PostContentsBlock>
  )
}
