import {
  AssetFloatingIsland,
  AssetGlobe,
  AssetGlobeMobile,
  CtaContent,
  CtaImage,
  CtaTitle,
  FooterCompany,
  FooterLearn,
  FooterMisc,
  FooterProduct,
  FooterSocialMedum,
  FooterSupport,
  MarketContent,
  MarketCurrency,
  SupportImageMobile,
  Dimensions12,
  SupportImageTablet,
} from "./initialSubInterfaces"

export interface DataInterface {
  data: InitialData
}

export interface InitialData {
  hero_title: HeroTitle[]
  hero_content: HeroContent[]
  string_get_started: string
  string_log_in: string
  string_sign_up: string
  menu: Menu[]
  why_title: WhyTitle[]
  why_content: WhyContent[]
  why_bullets: WhyBullet[]
  offers_title: OffersTitle[]
  offers: Offer[]
  regulations_title: RegulationsTitle[]
  regulations_content: RegulationsContent[]
  regulations_trust: RegulationsTrust[]
  licences: Licence[]
  support_title: SupportTitle[]
  string_start_a_chat: string
  support_image_desktop: SupportImageDesktop
  support_image_tablet: SupportImageTablet
  support_image_mobile: SupportImageMobile
  cta_title: CtaTitle[]
  cta_content: CtaContent[]
  cta_image: CtaImage
  string_products: string
  string_learn: string
  string_company: string
  string_support: string
  string_price: string
  string_price_chart: string
  string_view_all_assets: string
  string_invest_now: string
  string_coinmetro_bond: string
  string_buy_now: string
  footer_products: FooterProduct[]
  footer_learn: FooterLearn[]
  footer_company: FooterCompany[]
  footer_support: FooterSupport[]
  footer_misc: FooterMisc[]
  footer_social_media: FooterSocialMedum[]
  asset_globe: AssetGlobe
  asset_globe_mobile: AssetGlobeMobile
  asset_floating_island: AssetFloatingIsland
  market_title: string
  market_content: MarketContent[]
  market_use_custom_currencies: boolean
  market_currencies: MarketCurrency[]
  __typename: string
}

export interface HeroTitle {
  type: string
  text: string
  spans: any[]
}

export interface HeroContent {
  type: string
  text: string
  spans: any[]
}

export interface Menu {
  title: string
  link: Link
  __typename: string
}

export interface Link {
  target: any
  url: string
  __typename: string
}

export interface WhyTitle {
  type: string
  text: string
  spans: any[]
}

export interface WhyContent {
  type: string
  text: string
  spans: any[]
}

export interface WhyBullet {
  image: Image
  title: Title[]
  content: Content[]
  __typename: string
}

export interface Image {
  dimensions: Dimensions
  alt: string
  copyright: any
  url: string
  md: Md
  sm: Sm
}

export interface Dimensions {
  width: number
  height: number
}

export interface Md {
  dimensions: Dimensions2
  alt: string
  copyright: any
  url: string
}

export interface Dimensions2 {
  width: number
  height: number
}

export interface Sm {
  dimensions: Dimensions3
  alt: string
  copyright: any
  url: string
}

export interface Dimensions3 {
  width: number
  height: number
}

export interface Title {
  type: string
  text: string
  spans: any[]
}

export interface Content {
  type: string
  text: string
  spans: any[]
}

export interface OffersTitle {
  type: string
  text: string
  spans: any[]
}

export interface Offer {
  image: Image2
  title: Title2[]
  content: Content2[]
  bullets: Bullet[]
  __typename: string
}

export interface Image2 {
  dimensions: Dimensions4
  alt: string
  copyright: any
  url: string
  md: Md2
  sm: Sm2
}

export interface Dimensions4 {
  width: number
  height: number
}

export interface Md2 {
  dimensions: Dimensions5
  alt: string
  copyright: any
  url: string
}

export interface Dimensions5 {
  width: number
  height: number
}

export interface Sm2 {
  dimensions: Dimensions6
  alt: string
  copyright: any
  url: string
}

export interface Dimensions6 {
  width: number
  height: number
}

export interface Title2 {
  type: string
  text: string
  spans: any[]
}

export interface Content2 {
  type: string
  text: string
  spans: any[]
}

export interface Bullet {
  type: string
  text: string
  spans: any[]
}

export interface RegulationsTitle {
  type: string
  text: string
  spans: any[]
}

export interface RegulationsContent {
  type: string
  text: string
  spans: any[]
}

export interface RegulationsTrust {
  type: string
  text: string
  spans: any[]
}

export interface Licence {
  flag: Flag
  url: string
  logo: Logo
  alt_text: string
  __typename: string
}

export interface Flag {
  dimensions: Dimensions7
  alt: string
  copyright: any
  url: string
  md: Md3
  sm: Sm3
}

export interface Dimensions7 {
  width: number
  height: number
}

export interface Md3 {
  dimensions: Dimensions8
  alt: string
  copyright: any
  url: string
}

export interface Dimensions8 {
  width: number
  height: number
}

export interface Sm3 {
  dimensions: Dimensions9
  alt: string
  copyright: any
  url: string
}

export interface Dimensions9 {
  width: number
  height: number
}

export interface Logo {
  dimensions: Dimensions10
  alt?: string
  copyright: any
  url: string
}

export interface Dimensions10 {
  width: number
  height: number
}

export interface SupportTitle {
  type: string
  text: string
  spans: any[]
}

export interface SupportImageDesktop {
  dimensions: Dimensions11
  alt: string
  copyright: any
  url: string
  md: Md4
}

export interface Dimensions11 {
  width: number
  height: number
}

export interface Md4 {
  dimensions: Dimensions12
  alt: string
  copyright: any
  url: string
}
