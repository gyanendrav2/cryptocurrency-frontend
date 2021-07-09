import React, { ReactElement } from "react"
import { Box } from "@react-cssx/core"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import { InitialData } from "../interfaces/initial"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/sections/Footer"
import CareerHeader from "../components/career/header"
import CareerAbout from "../components/career/about"
import Vacancies from "../components/career/vacancies"
import CareerKnow from "../components/career/know"
// import CareerJoin from "../components/career/join"
import CareerTrust from "../components/career/trust"
import RightJob from "../components/positions/rightjob"

export interface Careerprops {
  data: InitialData
}

export default function Career({ data }: Careerprops): ReactElement {
  return (
    <Box>
      <Navbar
        data={data}
        bgColor="#1D2544"
        defaultBgColor="#1D2544"
        defaultTextColor="white"
        telTextColor="white"
        defaultPading={20}
        careerPage
      />
      <CareerHeader />
      <CareerAbout />
      <Vacancies
        heading="Current vacancies"
        bg="grey.light4"
        buttonText="View all positions"
        link="/available-positions"
      />
      <CareerKnow />
      {/* <CareerJoin /> */}
      <RightJob
        jobInfoPage
        title="Are you ready to join"
        img="/career/light.png"
        btnText="view all positions"
        imgCssx={{
          pos: "absolute",
          display: "none",
          "@mq": {
            tablet: {
              display: "block",
              top: "-10%",
              left: "-19%",
            },
            desktop: {
              display: "block",
              top: "10%",
              left: 0,
            },
          },
        }}
      />
      <CareerTrust />
      <Footer data={data} hideTopCurve />
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
