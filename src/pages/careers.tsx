import React, { ReactElement } from "react"
import { Box } from "@react-cssx/core"
import { Header } from "../components/xcm/header"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import { InitialData } from "../interfaces/initial"
// import { Footer } from "../components/sections/Footer"
// import { EcoSystem } from "../components/xcm/ecoSystem"
// import { PriceStatistics } from "../components/xcm/priceStatistics"
// import { HowXcm } from "../components/xcm/howXcm"
// import { WhyXcm } from "../components/xcm/whyXcm"
// import { TrustXcm } from "../components/xcm/trustXcm"
// import StartEarning from "../components/xcm/startEarning"
// import { WhatXcmCard } from "../components/xcm/cards/whatXcm"

export interface Careerprops {
  data: InitialData
}

export default function Careers({ data }: Careerprops): ReactElement {
  return (
    <Box>
      <Header data={data} />
      {/* <WhatXcmCard />
      <EcoSystem />
      <PriceStatistics />
      <HowXcm />
      <WhyXcm />
      <TrustXcm />
      <StartEarning />
      <Footer data={data} hideTopCurve /> */}
    </Box>
  )
}

export const getStaticProps = async () => {
  // export const getServerSideProps = async () => {
  const prismic = await prismicClient.query({
    query: HOMEPAGE_QUERY,
    variables: { lang: "en-gb" },
  })

  return {
    props: { data: prismic.data.allHomepages.edges[0].node },
    revalidate: 10, // Revalidate at most once every 10 secs
  }
}
