import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `const cookie = document.cookie.split('=')[1];
            document.body.dataset.theme = cookie;`,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
