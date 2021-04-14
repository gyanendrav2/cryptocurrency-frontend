import React from "react"
import Document, {
  Html, Head, Main, NextScript,
} from "next/document"

const isProduction = process.env.NODE_ENV === "production"

export default class MyDocument extends Document {
  render() {
    const protocol = isProduction ? "https:" : "http:"
    const nonce = Math.floor(Math.random() * 16 ** 8).toString(16)
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="The best crypto exchange for both beginners and pros. Buy, sell and trade crypto with ease. Keep your profits - we have the lowest fees in the industry." />

          <link rel="shortcut icon" href="/favicon.png" type="image/ico" />
          <link rel="canonical" href="https://coinmetro.com/" />

          <link rel="preload" as="image" href="hero/img_hero_mobile.jpg?123" />

          <meta property="og:url" content="https://coinmetro.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="The Best Crypto Exchange for Beginners and Pros" />
          <meta property="og:description" content="The best crypto exchange for both beginners and pros. Buy, sell and trade crypto with ease. Keep your profits - we have the lowest fees in the industry." />
          <meta property="og:image" content="https://coinmetro.com/meta/52042630-0-sm-banner-homepage.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="coinmetro.com" />
          <meta property="twitter:url" content="https://coinmetro.com" />
          <meta name="twitter:title" content="The Best Crypto Exchange for Beginners and Pros" />
          <meta name="twitter:description" content="The best crypto exchange for both beginners and pros. Buy, sell and trade crypto with ease. Keep your profits - we have the lowest fees in the industry." />
          <meta name="twitter:image" content="https://coinmetro.com/meta/52042630-0-sm-banner-homepage.png" />

          {isProduction && (
            <meta
              httpEquiv="Content-Security-Policy"
              content={`
              default-src         'none';
              connect-src         'self' https://coinmetro.com https://*.coinmetro.com https://*.intercom.io wss://*.intercom.io
                                  https://uploads.intercomcdn.com https://www.google-analytics.com https://stats.g.doubleclick.net
                                  https://*.hotjar.com wss://*.hotjar.com https://*.hotjar.io;
              script-src          'self' https://coinmetro.com https://*.coinmetro.com https://ajax.googleapis.com https://www.googletagmanager.com
                                  https://widget.intercom.io https://js.intercomcdn.com https://cdnjs.cloudflare.com  https://www.google.com https://*.hotjar.com
                                  https://www.gstatic.com https://www.google-analytics.com https://connect.facebook.net https://widget.trustpilot.com
                                  https://static.cloudflareinsights.com 'sha256-po+rc5CdC3k9aL7WkH5SQ+U7vg3EebdOO6GEj6oMZF4=' 'nonce-${nonce}';
              font-src            'self' https: data: blob:;
              style-src           'self' https://coinmetro.com https://*.coinmetro.com ${protocol}//fonts.googleapis.com
                                  https://pro.fontawesome.com https://stackpath.bootstrapcdn.com https://cdnjs.cloudflare.com 'unsafe-inline' blob:;
              frame-src           'self' https://coinmetro.com https://*.coinmetro.com https://www.googletagmanager.com https://www.google.com
                                  https://widget.trustpilot.com https://widget.intercom.io https://www.youtube.com https://m.facebook.com https://vars.hotjar.com;
              media-src           'self' https: data: blob:;
              child-src           'self' https://coinmetro.com https://*.coinmetro.com;
              manifest-src        'self' https://coinmetro.com https://*.coinmetro.com;
              img-src             'self' https: data: blob: https://v.fastcdn.co;
              form-action         'self' https://coinmetro.com https://*.coinmetro.com
              `}
            />
          )}

          <script defer nonce={nonce} type="text/javascript" async src="/js/loadRef.js?v=1.3.0" />
          <script defer nonce={nonce} type="text/javascript" async src="/js/snippets.js?v=1.0.12" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
