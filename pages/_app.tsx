import '../styles/globals.css'
// import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: JSX.Element) => JSX.Element
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

function MyApp({ Component, pageProps }: AppProps) {

  // const getLayout = Component.getLayout || ((page) => page)

  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
