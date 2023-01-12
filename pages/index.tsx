import Head from 'next/head'
import styled from 'styled-components'
import Responsive from '../src/components/common/Responsive'
import { postFilePaths, POST_PATH } from '../src/lib/mdxUtils'
import { themedPalette } from '../styles/theme'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostList from '../src/components/posts/PostList'

interface Props {
  posts: {
    content: string
    data: {
      title: string
      description: string
    }
    filePath: string
  }[]
}

const Block = styled(Responsive)`
  color: ${themedPalette.text};
  background: ${themedPalette.bg_page1};
`

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Seobe.dev</title>
      </Head>
      <Block>
        <PostList posts={posts} />
      </Block>
    </>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POST_PATH, filePath))
    const { data } = matter(source)
    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
