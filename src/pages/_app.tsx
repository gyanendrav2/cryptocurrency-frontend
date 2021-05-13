import React, { ReactElement } from "react"
import { AppProps } from "next/app"
import { IntlProvider } from "react-intl"
import { ThemeProvider } from "@react-cssx/core"
import { useRouter } from "next/dist/client/router"
import { ApolloProvider } from "@apollo/client"
import Head from "next/head"
import { appWithTranslation } from "next-i18next"
import theme from "../config/coinmetro.theme"
import { prismicClient } from "../lib/prismicClient"

import "./legal.scss"
import "./mail.scss"
import "./glossary.scss"
import "../styles/xcm.scss"
import "../styles/accordion.scss"
import { languages } from "../locale"

function App({ Component, pageProps }: AppProps): ReactElement {
  const { locale } = useRouter()
  console.log("locale", locale)
  return (
    <>
      <Head>
        <title>CoinMetro – The Best Crypto Exchange for Beginners and Pros</title>

        {/* <!-- TrustBox script */}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
        {/* End TrustBox script */}
      </Head>
      <IntlProvider locale={locale} messages={languages[locale]}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={prismicClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </IntlProvider>
    </>
  )
}

export default appWithTranslation(App)
