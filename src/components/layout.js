import React from "react"
import PropTypes from "prop-types"

import Header from "./header_desktop"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
