import Head from 'next/head'
import { metaDefaultKeywords } from '../../constants/metaKeywords'

interface SEOProps {
  title?: string
  description?: string
  tags?: string[]
  url?: string
  image?: string
}

function metaKeyowrdsHandler(tags: string[] | undefined) {
  if (Array.isArray(tags)) {
    return [...tags, ...metaDefaultKeywords].join(',')
  }
  return metaDefaultKeywords.join(',')
}

export default function SEO({ description, image, title, url, tags }: SEOProps) {
  const keywordsContent = metaKeyowrdsHandler(tags)
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL || 'http'
  const host = process.env.NEXT_PUBLIC_HOST || 'localhost'
  const port = process.env.NEXT_PUBLIC_PORT || '3000'
  const baseUrl = `${protocol}://${host}:${port}`

  return (
    <Head>
      <title>{title ? `${title} | Seobe.dev` : 'Seobe.dev'}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description || '프론트엔드 개발자 Seobe의 블로그'} />
      <meta name="keywords" content={keywordsContent} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || 'Seobe.dev'} />
      <meta property="og:description" content={description || '프론트엔드 개발자 Seobe의 블로그'} />
      <meta property="og:url" content={url ? `${baseUrl}${url}` : baseUrl} />
      <meta property="og:image" content={image ? `${baseUrl}${image}` : `${baseUrl}/image.png`} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
    </Head>
  )
}
