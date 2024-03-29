import styled from 'styled-components'
import Responsive from '../src/components/common/Responsive'
import { postFilePaths, POST_PATH } from '../src/lib/mdxUtils'
import { themedPalette } from '../styles/theme'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostList from '../src/components/posts/PostList'
import { FrontMatterTypes } from '../src/types/type'
import SEO from '../src/components/base/SEO'
import { getPlaiceholder } from 'plaiceholder'
import { serialize } from 'next-mdx-remote/serialize'

export interface HomePageProps {
  posts: {
    data: FrontMatterTypes
    filePath: string
    imageProps?: {
      img: {
        src: string
        type: string
        height: number
        width: number
      }
      blurDataURL: string
    }
  }[]
}

const Block = styled(Responsive)`
  color: ${themedPalette.text};
  background: ${themedPalette.bg_page1};
`

export default function Home({ posts }: HomePageProps) {
  return (
    <>
      <SEO />
      <Block>
        <PostList posts={posts} />
      </Block>
    </>
  )
}

export async function getStaticProps() {
  const posts = await Promise.all(
    postFilePaths.map(async (filePath) => {
      const source = fs.readFileSync(path.join(POST_PATH, filePath))
      const mdxSource = await serialize(source, { parseFrontmatter: true })
      if (mdxSource.frontmatter?.thumbnail) {
        const { base64, img } = await getPlaiceholder(mdxSource.frontmatter.thumbnail)
        return {
          data: mdxSource.frontmatter,
          filePath,
          imageProps: {
            blurDataURL: base64,
            img,
          },
        }
      }
      return {
        data: mdxSource.frontmatter,
        filePath,
      }
    }),
  )

  return { props: { posts } }
}
