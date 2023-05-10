import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyles'
import Layout from '../src/components/common/Layout'
import { useThemeEffect } from '../src/hooks/useThemeEffect'
import '@code-hike/mdx/dist/index.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from './loading'
import Head from 'next/head'
import Script from 'next/script'
import * as gtag from '../src/lib/gtag'

export default function App({ Component, pageProps }: AppProps) {
  useThemeEffect()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      setIsLoading(true)
      gtag.pageView(url)
    }

    const handleStop = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleStop)
      router.events.on('routeChangeError', handleStop)
    }
  }, [router])
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Loading isLoading={isLoading} />
        <Component {...pageProps} />
      </Layout>
      <Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
    </>
  )
}
