import { usePathname } from "next/navigation"
import * as React from "react"
import { useMedia } from "react-use"

import { ArrowIcon } from "@components/Blog/Sidebar/Styles"
import useSticky from "@hooks/client/useSticky"
import { AppsYaml } from "@layouts/Apps/types"
import { remIntoPixels } from "@utils/dom"
import { Language } from "@utils/locales"
import { appsCategoryPath, appsPath } from "@utils/paths"
import { breakpoints, sizes } from "@utils/styles"

import { Item, List, VerticalList, StyledNav, StyledLink } from "./Styles"

interface NavProps {
  language: Language
  categories: AppsYaml["content"]["categories"]
  allAppsLabel: string
}

interface CategoriesProps {
  withCurrentPathLink?: boolean
}

interface LinkProps {
  path: string
  isActive: boolean
  label: string
}

const Nav = ({ language, categories, allAppsLabel }: NavProps): JSX.Element => {
  const currentPath = usePathname()
  const allAppsPath = appsPath(language)

  const isMobile = !useMedia(`(min-width: ${breakpoints.large})`, false)

  const $navRef = React.useRef<HTMLDivElement>(null)
  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($navRef, headerHeightInPixels)

  const [isExpanded, setIsExpanded] = React.useState(false)

  const Link = React.useCallback(
    ({ path, isActive, label }: LinkProps) => (
      <StyledLink href={path + "#nav"} $isActive={isActive} $isSticky={isSticky} $isMobile={isMobile}>
        {label}
      </StyledLink>
    ),
    [isSticky, isMobile],
  )

  const ChevronIcon = React.useCallback(
    () => <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />,
    [isExpanded],
  )

  const ActiveLink = React.useCallback(() => {
    return (
      <>
        {allAppsPath === currentPath && (
          <Item
            onClick={() => isSticky && setIsExpanded(!isExpanded)}
            $isSticky={isSticky}
            $isMobile={isMobile}
            $isActive
          >
            <Link path={allAppsPath} isActive label={allAppsLabel} />

            {isSticky && <ChevronIcon />}
          </Item>
        )}

        {categories.map(({ title }, idx) => {
          const path = appsCategoryPath(language, title)

          return (
            path === currentPath && (
              <Item
                key={idx}
                onClick={() => isSticky && setIsExpanded(!isExpanded)}
                $isSticky={isSticky}
                $isMobile={isMobile}
                $isActive
              >
                <Link path={path} isActive label={title} />

                {isSticky && <ChevronIcon />}
              </Item>
            )
          )
        })}
      </>
    )
  }, [allAppsPath, currentPath, isSticky, isMobile, Link, allAppsLabel, ChevronIcon, categories, isExpanded, language])

  const Categories = React.useCallback(
    ({ withCurrentPathLink = true }: CategoriesProps) => {
      return categories.map(({ title }, idx) => {
        const path = appsCategoryPath(language, title)

        const shouldRenderLink = withCurrentPathLink || path !== currentPath

        return (
          shouldRenderLink && (
            <Item key={idx} $isSticky={isSticky} $isMobile={isMobile}>
              <Link path={path} isActive={path === currentPath} label={title} />
            </Item>
          )
        )
      })
    },
    [categories, currentPath, isMobile, isSticky, language, Link],
  )

  return (
    <>
      {/* Static div for anchor linking; required because anchors don't work on sticky elements. */}
      <div id="nav" />

      <StyledNav ref={$navRef} $isSticky={isSticky} $isMobile={isMobile}>
        {isMobile ? (
          <>
            <ActiveLink />

            {isExpanded && (
              <VerticalList>
                {allAppsPath !== currentPath && (
                  <Item $isSticky={isSticky} $isMobile={isMobile}>
                    <Link path={allAppsPath} isActive={false} label={allAppsLabel} />
                  </Item>
                )}

                <Categories withCurrentPathLink={false} />
              </VerticalList>
            )}
          </>
        ) : (
          <List>
            <Item $isSticky={isSticky} $isMobile={isMobile}>
              <Link path={allAppsPath} isActive={allAppsPath === currentPath} label={allAppsLabel} />
            </Item>

            <Categories />
          </List>
        )}
      </StyledNav>
    </>
  )
}

export default Nav
