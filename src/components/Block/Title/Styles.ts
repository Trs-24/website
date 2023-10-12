import styled, { css } from "styled-components"

import { BackgroundColor, titleColorMap, HorizontalAlign, linkColorMap, VerticalSpacing } from "@components/Block/utils"
import { breakpoints, fontSizes, lineHeights, sizes } from "@utils/styles"

export const StyledTitle = styled.h3<{
  $backgroundColor: BackgroundColor
  $horizontalAlign: HorizontalAlign
  $verticalSpacing?: VerticalSpacing
}>`
  margin-bottom: 2.5rem;
  position: relative;

  color: ${({ $backgroundColor }) => titleColorMap[$backgroundColor]};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: ${fontSizes._42};
  line-height: ${lineHeights.compact};
  text-align: ${({ $horizontalAlign }) => ($horizontalAlign === "left" ? "left" : "center")};
  ${({ $verticalSpacing }) =>
    $verticalSpacing && `margin: ${$verticalSpacing === "small" ? "2.5rem" : sizes.blockVerticalPadding} 0`};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: ${({ $horizontalAlign }) => ($horizontalAlign === "left" ? "auto" : "0")};
    top: 100%;
    margin: 10px auto;
    width: 15%;
    height: 3px;
    background-color: ${({ $backgroundColor }) => linkColorMap[$backgroundColor]};
  }

  ${({ $horizontalAlign }) => css`
    @media (min-width: ${breakpoints.large}) {
      text-align: ${$horizontalAlign === "center" ? "center" : "left"};
      &::after {
        right: ${$horizontalAlign === "center" ? "0" : "auto"};
      }
    }
  `}
`
