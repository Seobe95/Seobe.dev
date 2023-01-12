import Head from "next/head";

interface SEOProps {
  title: string
  description: string
  url: string
  image: string
}

export default function SEO ({description, image, title, url}: SEOProps) {
    return (
      <Head>
        <title>{title}</title>
      </Head>
    )
}