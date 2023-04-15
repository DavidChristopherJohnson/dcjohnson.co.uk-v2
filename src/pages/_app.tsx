import DefaultLayout from '@/components/layout/default-layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <DefaultLayout>
      <Component {...pageProps} />
  </DefaultLayout>
}
