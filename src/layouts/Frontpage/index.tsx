"use client"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import { FrontpageYaml } from "@layouts/Frontpage/types"

import Api from "./Api"
import Apps from "./Apps"
import Developers from "./Developers"
import Documentation from "./Documentation"
import Hero from "./Hero"
import Join from "./Join"
import Pricing from "./Pricing"

interface FrontpageProps {
  yaml: FrontpageYaml
  heroDescriptionMdx: MDXRemoteSerializeResult
  appsDescriptionMdx: MDXRemoteSerializeResult
  apiDescriptionMdx: MDXRemoteSerializeResult
  documentationDescriptionMdx: MDXRemoteSerializeResult
  pricingDescriptionMdx: MDXRemoteSerializeResult
  developersDescriptionMdx: MDXRemoteSerializeResult
}

const Frontpage = ({
  yaml,
  heroDescriptionMdx,
  appsDescriptionMdx,
  apiDescriptionMdx,
  documentationDescriptionMdx,
  pricingDescriptionMdx,
  developersDescriptionMdx,
}: FrontpageProps): JSX.Element => {
  const { hero, content } = yaml

  return (
    <>
      <Hero {...hero} descriptionMdx={heroDescriptionMdx} />
      <Apps {...content.apps} descriptionMdx={appsDescriptionMdx} />
      <Api {...content.api} descriptionMdx={apiDescriptionMdx} />
      <Documentation {...content.documentation} descriptionMdx={documentationDescriptionMdx} />
      <Pricing {...content.pricing} descriptionMdx={pricingDescriptionMdx} />
      <Developers {...content.developers} descriptionMdx={developersDescriptionMdx} />
      <Join {...content.join} />
    </>
  )
}

export default Frontpage
