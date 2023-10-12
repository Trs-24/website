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

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 2.5rem;
`

export const StyledSearchInput = styled.input`
  max-width: 25rem;
  width: 95%;
  height: 2rem;
  padding: 1rem;
  border: 2px solid ${colors.textMedium};
  border-radius: 100rem;

  &:focus {
    outline: none;
  }
`

export const List = styled.ul`
  ${mixin.container};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Item = styled.li<{ $isSticky: boolean; $isMobile: boolean; $isActive?: boolean }>`
  ${({ $isSticky, $isMobile }) => !$isMobile && mixin.dotSeparatedList("0.5rem", $isSticky ? colors.white : undefined)}
  line-height: ${({ $isActive }) => ($isActive ? 4 : 2)}rem;

  ${(props) =>
    props.$isMobile &&
    css`
      display: flex;
      align-items: center;
      padding: 0 2rem;
      justify-content: space-between;
      justify-content: space-between;
      width: 100%;
    `}

  ${(props) => {
    if (!props.$isMobile) return

    if (props.$isSticky && props.$isActive) {
      return `
        background-color: ${colors.white};
        border-bottom: 3px solid ${colors.textMedium};
        box-shadow: ${colors.borderMedium} 0rem 1rem 1rem -0.5rem;
      `
    } else if (props.$isSticky && !props.$isActive) {
      return `
        background-color: ${colors.backgroundDark};
      `
    }
  }}
`

export const StyledLink = styled(Link)<{ $isActive: boolean; $isSticky: boolean; $isMobile: boolean }>`
  color: ${({ $isActive, $isSticky }) => ($isSticky ? colors.white : $isActive ? colors.primary : colors.textDark)};

  ${(props) => {
    if (!props.$isMobile) return

    if (props.$isSticky && props.$isActive) {
      return `color: ${colors.textDark};`
    } else if (props.$isSticky && !props.$isActive) {
      return `color: ${colors.white};`
    }
  }}

  ${(props) =>
    props.$isMobile
      ? `font-weight: ${props.$isActive ? "bold" : "regular"}`
      : `text-decoration: ${props.$isActive ? "underline" : "none"};`}
`

export const ChevronIconWrapper = styled.div<{
  $isFlipped: boolean
}>`
  transform: ${({ $isFlipped }) => ($isFlipped ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  display: grid;
  place-items: center;
`
