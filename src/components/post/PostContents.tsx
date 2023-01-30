import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styled from "styled-components";
import { themedPalette } from "../../../styles/theme";
import CustomH2 from "../mdx/CustomH2";
import CustomImage from "../mdx/CustomImage";

interface PostContentsProps {
    mdxSource: MDXRemoteSerializeResult
}

const PostContentsBlock = styled.section`
  h2 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    word-break: keep-all;
    font-weight: 300;
  }

  strong {
    background: ${themedPalette.element};
    color: ${themedPalette.strong_font_color};
    padding : 1px 5px;
    border-radius: 5px;
    font-weight: 300;
  }

  img {
    width : 100%;
  }
`

export default function PostContents({mdxSource}: PostContentsProps) {
  return (
    <PostContentsBlock>
      <MDXRemote {...mdxSource} components={{img: CustomImage, h2: CustomH2}}/>
    </PostContentsBlock>
  )
}