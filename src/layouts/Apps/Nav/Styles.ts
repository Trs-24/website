import Link from "next/link"
import styled, { css } from "styled-components"

import { colors, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean; $isMobile: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  background-color: ${colors.white};

  ${(props) =>
    !props.$isMobile &&
    css`
      padding: 0.5rem 0;
    `}

  ${(props) =>
    props.$isSticky &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}
`

export const ListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ListDesktop = styled.ul`
  ${mixin.container};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const ItemMobile = styled.li<{ $isSticky: boolean; $isActive?: boolean }>`
  line-height: ${({ $isActive }) => ($isActive ? 4 : 2)}rem;
  transition: all 0.3s linear;

  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  width: 100%;

  ${(props) => {
    if (props.$isSticky && props.$isActive) {
      return `
        background-color: ${colors.white};
        border-bottom: 3px solid ${colors.textMedium};
        box-shadow: ${colors.borderMedium} 0rem 1rem 1rem -0.5rem;
      `
    } else if (props.$isSticky && !props.$isActive) {
      return `
        background-color: ${colors.primary};
      `
    }
  }}
`

export const ItemDesktop = styled.li<{ $isSticky: boolean; $isActive?: boolean }>`
  ${({ $isSticky }) => mixin.dotSeparatedList("0.5rem", $isSticky ? colors.white : undefined)}
  line-height: 2rem;
`

export const StyledLinkMobile = styled(Link)<{ $isActive: boolean; $isSticky: boolean }>`
  color: ${({ $isActive, $isSticky }) => ($isSticky ? colors.white : $isActive ? colors.primary : colors.textDark)};

  ${(props) => {
    if (props.$isSticky && props.$isActive) {
      return `color: ${colors.textDark};`
    } else if (props.$isSticky && !props.$isActive) {
      return `color: ${colors.white};`
    }
  }}

  ${(props) => `font-weight: ${props.$isActive ? "bold" : "regular"}`}
`

export const StyledLinkDesktop = styled(Link)<{ $isActive: boolean; $isSticky: boolean }>`
  color: ${({ $isActive, $isSticky }) => ($isSticky ? colors.white : $isActive ? colors.primary : colors.textDark)};

  ${(props) => `text-decoration: ${props.$isActive ? "underline" : "none"};`}
`
