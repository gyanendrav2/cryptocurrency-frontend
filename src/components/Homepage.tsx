import React, { ReactElement } from "react"
import { Hero } from "./sections/Hero"
import { Why } from "./sections/Why"
import { Features } from "./sections/Features"
import { Regulations } from "./sections/Regulations"
import { Support } from "./sections/Support"
import { Cta } from "./sections/CTA"
import { Footer } from "./sections/Footer"
import { Markets } from "./sections/Markets"
import { Navbar } from "./Navbar"
import { BondCta } from "./BondCta"

export interface IHomepageProps {
  data: any
}

export function Homepage({ data }: IHomepageProps): ReactElement {
  return (
    <>
      <Navbar data={data} />
      <Hero data={data} />
      <Markets data={data} />
      <Why data={data} />
      <Cta data={data} />
      <Features data={data} />
      <Regulations data={data} />
      <Support data={data} />
      <Footer data={data} />

      <BondCta data={data}/>
    </>
  )
}
