import * as React from 'react'
import Helmet from 'react-helmet'

import AppleTouchIcon from '../../../images/favicons/apple-touch-icon.png'
import SafariPinnedTab from '../../../images/favicons/safari-pinned-tab.svg'
import Favicon32 from '../../../images/favicons/favicon-32x32.png'
import Favicon16 from '../../../images/favicons/favicon-16x16.png'
import { useSeoData } from './graphql'
import { LocaleCode } from "../../../utils/locales"

interface SEOProps {
  localeCode: LocaleCode
  title?: string
  description?: string
}

const SEO = ({ localeCode, title, description }: SEOProps): JSX.Element => {
  const siteMetadata = useSeoData().site.siteMetadata

  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        localeCode
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: ``
        },
        {
          name: `author`,
          content: siteMetadata.author
        },
        {
          name: `copyright`,
          content: `(c)`
        }
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
      <link rel="mask-icon" href={SafariPinnedTab} color="#5bbad5" />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon16} />
    </Helmet>
  )
}

export default SEO
