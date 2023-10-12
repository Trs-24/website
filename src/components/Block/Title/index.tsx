import { BackgroundColor, HorizontalAlign, VerticalSpacing } from "../utils"

import { StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor: BackgroundColor
  horizontalAlign: HorizontalAlign
  children: React.ReactNode
  verticalSpacing?: VerticalSpacing
}

const Title = ({ backgroundColor, horizontalAlign, verticalSpacing, children }: TitleProps): JSX.Element => {
  return (
    <StyledTitle
      $backgroundColor={backgroundColor}
      $horizontalAlign={horizontalAlign}
      $verticalSpacing={verticalSpacing}
    >
      {children}
    </StyledTitle>
  )
}

export default Title
