import { PrismicLink } from "apollo-link-prismic"
import {
  ApolloClient, gql, InMemoryCache, NormalizedCacheObject,
} from "@apollo/client"

export const prismicClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: PrismicLink({
    uri: "https://coinmetro.prismic.io/graphql",
    accessToken: "MC5YekpzN0JJQUFDUUE3ZW9p.77-977-9M2N-77-9Pe-_ve-_ve-_vWHvv71l77-9Z--_vTknV--_vTLvv73vv70377-977-9DO-_vUsKMu-_vQ",
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
})

export const HOMEPAGE_QUERY = gql`
    query($lang: String!) {
      allHomepages(first: 1, lang: $lang) {
        edges {
          node {
            
            hero_title
            hero_content
            string_get_started
            
           
            string_log_in
            string_sign_up
            menu {
              title
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            
            why_title
            why_content
            why_bullets {
              image
              title
              content
            }
            
            offers_title
            offers {
              image
              title
              content
              bullets
            }
            
            regulations_title
            regulations_content
            regulations_trust
            licences {
              flag
              url
              logo
              alt_text
            }
            
            support_title
            string_start_a_chat
            support_image_desktop
            support_image_tablet
            support_image_mobile
            
            cta_title
            cta_content
            cta_image
            
            string_products
            string_learn
            string_company
            string_support
            string_price
            string_price_chart
            string_view_all_assets
            string_invest_now
            string_coinmetro_bond
            string_buy_now
            
            footer_products {
              name
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            footer_learn {
              name
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            footer_company {
              name
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            footer_support {
              name
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            footer_misc {
              name
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            footer_social_media {
              icon
              link {
                ... on _ExternalLink {
                  target
                  url
                }
              }
            }
            
            asset_globe
            asset_globe_mobile
            asset_floating_island
            
            market_title
            market_content
            market_use_custom_currencies
            market_currencies {
              name
              url
            }
            
          }
        }
      }
    }
  `
