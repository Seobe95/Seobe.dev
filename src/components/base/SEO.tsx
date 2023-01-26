import Head from "next/head";

interface SEOProps {
  title?: string
  description?: string
  tags?: string[]
  url?: string
  image?: string
}

function tagsToString (tags: string[] | undefined): string {
  if (Array.isArray(tags)) {
    const string = tags.join(',')
    return string
  }
  return "seobe,developer,blog,이명섭"
}

export default function SEO ({description, image, title, url, tags}: SEOProps) {
  const keywordsContent = tagsToString(tags)
    return (
      <Head>
        <title>{title ? `${title} | Seobe.dev` : 'Seobe.dev'}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description ? description : '프론트엔드 개발자 Seobe의 블로그'} />
        <meta name="keywords" content={keywordsContent} />
      </Head>
    )
}