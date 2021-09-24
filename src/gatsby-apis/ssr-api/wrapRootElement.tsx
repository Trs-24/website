import * as React from "react"
import { WrapRootElementNodeArgs } from "gatsby"

import RootWrapper from "../shared/RootWrapper"

const wrapRootElement = ({ element }: WrapRootElementNodeArgs): any => <RootWrapper>{element}</RootWrapper>

export default wrapRootElement
