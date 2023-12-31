"use client"

import * as React from "react"

import { Anchor, StyledHeader } from "./Styles"
import { HeaderLevel } from "./types"

const Header = ({ level, text, id }: { level: HeaderLevel; text: string; id: string }) => {
  const Header = StyledHeader[level]

  // id is generated by remarkHeadingsPlugin
  return (
    <Header id={id}>
      {text}
      <Anchor href={`#${id}`} aria-label={`${text} permalink`} />
    </Header>
  )
}

export default Header
