import React from "react"
import Vacancies from "../components/career/vacancies"
import { Navbar } from "../components/Navbar"
import { InitialData } from "../interfaces/initial"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import RightJob from "../components/positions/rightjob"
import { Footer } from "../components/sections/Footer"
import WeCare from "../components/positions/wecare"

export interface PositionsProps {
  data: InitialData
}

function Positions({ data }: PositionsProps): React.ReactElement {
  return (
    <div>
      <Navbar
        data={data}
        bgColor="#1D2544"
        defaultBgColor="#1D2544"
        defaultTextColor="white"
        telTextColor="white"
        defaultPading={20}
        careerPage
      />
      <Vacancies heading="Available positions" hidePosBtn postionHeading showBtnCurve bg="#F2F3F8" />
      <RightJob />
      <WeCare />
      <Footer data={data} hideTopCurve />
    </div>
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

export default Positions
