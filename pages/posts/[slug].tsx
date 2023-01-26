import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import path from 'path'
import fs from 'fs'
import styled from 'styled-components'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { remarkCodeHike } from '@code-hike/mdx'
import theme from 'shiki/themes/dracula.json'
import { postFilePaths, POST_PATH } from '../../src/lib/mdxUtils'
import Responsive from '../../src/components/common/Responsive'
import PostHeader from '../../src/components/post/PostHeader'
import { FrontMatterTypes } from '../../src/types/type'
import PostContents from '../../src/components/post/PostContents'
import SEO from '../../src/components/base/SEO'

interface PostPageProps {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: FrontMatterTypes
}

const PostPageBlock = styled(Responsive)`
  background: none;
  font-size: 1.2rem;
  .ch-codegroup {
    margin: 1rem 2.5rem 1rem 2.5rem;
  }
`

export default function PostPage({ frontMatter, mdxSource }: PostPageProps) {
  return (
    <>
      <SEO title={frontMatter.title} tags={frontMatter.tags}/>
      <article>
        <PostPageBlock>
          <PostHeader {...frontMatter} />
          {/* 본문 내용 */}
          <PostContents mdxSource={mdxSource} />
        </PostPageBlock>
      </article>
    </>
  )
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const postFilePath = path.join(POST_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { theme, autoImport: false }]],
      useDynamicImport: true,
    },
    scope: data,
  })

  return {
    props: {
      mdxSource: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}
