import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyles'
import Layout from '../src/components/common/Layout'
import { useThemeEffect } from '../src/hooks/useThemeEffect'
import '@code-hike/mdx/dist/index.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loading from './loading'

export default function App({ Component, pageProps }: AppProps) {
  useThemeEffect()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      setIsLoading(true)
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
        <Loading isLoading={isLoading}/>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
