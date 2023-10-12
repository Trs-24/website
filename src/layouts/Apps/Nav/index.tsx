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

import {
  ItemDesktop,
  ItemMobile,
  ListDesktop,
  ListMobile,
  StyledNav,
  StyledLinkDesktop,
  StyledLinkMobile,
} from "./Styles"

interface NavProps {
  language: Language
  categories: AppsYaml["content"]["categories"]
  allAppsLabel: string
}

interface LinkItemProps {
  path: string
  isActive: boolean
  label: string
  withChevronIcon?: boolean
}

interface CategoriesProps {
  withDuplicateCategoryCheck?: boolean
}

const Nav = ({ language, categories, allAppsLabel }: NavProps): JSX.Element => {
  const currentPath = usePathname()
  const allAppsPath = appsPath(language)

  const isMobile = !useMedia(`(min-width: ${breakpoints.large})`, false)

  const $navRef = React.useRef<HTMLDivElement>(null)
  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($navRef, headerHeightInPixels)

  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleItemClick = React.useCallback(() => setIsExpanded(!isExpanded), [isExpanded])

  const ChevronIcon = React.useCallback(
    () => <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} $shouldIgnoreMediaQuery />,
    [isExpanded],
  )

  const LinkItem = React.useCallback(
    ({ isActive, path, label, withChevronIcon }: LinkItemProps) => {
      const ResponsiveStyledLink = isMobile ? StyledLinkMobile : StyledLinkDesktop
      const ResponsiveItem = isMobile ? ItemMobile : ItemDesktop

      return (
        <ResponsiveItem onClick={handleItemClick} $isSticky={isSticky} $isActive={isActive}>
          <ResponsiveStyledLink href={path + "#nav"} $isActive={isActive} $isSticky={isSticky}>
            {label}
          </ResponsiveStyledLink>

          {withChevronIcon && <ChevronIcon />}
        </ResponsiveItem>
      )
    },
    [ChevronIcon, handleItemClick, isMobile, isSticky],
  )

  const Categories = React.useCallback(
    ({ withDuplicateCategoryCheck }: CategoriesProps) =>
      categories.map(({ title }) => {
        const path = appsCategoryPath(language, title)

        if (withDuplicateCategoryCheck && path === currentPath) return null

        return <LinkItem key={title} path={path} isActive={path === currentPath} label={title} />
      }),
    [LinkItem, categories, currentPath, language],
  )

  const CategoriesContentList = React.useCallback(
    () => (
      <>
        {allAppsPath !== currentPath && isMobile ? (
          <LinkItem path={allAppsPath} isActive={false} label={allAppsLabel} />
        ) : (
          <LinkItem path={allAppsPath} isActive={allAppsPath === currentPath} label={allAppsLabel} />
        )}

        <Categories withDuplicateCategoryCheck={isMobile} />
      </>
    ),
    [Categories, LinkItem, allAppsLabel, allAppsPath, currentPath, isMobile],
  )

  const ActiveLink = React.useCallback(() => {
    // element is used only on mobile, no need to do calculations
    if (!isMobile) return

    if (allAppsPath === currentPath) {
      return <LinkItem isActive path={allAppsPath} label={allAppsLabel} withChevronIcon />
    }

    const relevantCategory = categories.find(({ title }) => appsCategoryPath(language, title) === currentPath)

    if (!relevantCategory) {
      return <></>
    }

    const { title } = relevantCategory
    const relativeCategoryPath = appsCategoryPath(language, title)

    return <LinkItem isActive path={relativeCategoryPath} label={title} withChevronIcon />
  }, [isMobile, allAppsPath, currentPath, categories, language, LinkItem, allAppsLabel])

  return (
    <>
      {/* Static div for anchor linking; required because anchors don't work on sticky elements. */}
      <div id="nav" />

      <StyledNav ref={$navRef} $isSticky={isSticky} $isMobile={isMobile}>
        {isMobile ? (
          <>
            <ActiveLink />

            {isExpanded && (
              <ListMobile>
                <CategoriesContentList />
              </ListMobile>
            )}
          </>
        ) : (
          <ListDesktop>
            <CategoriesContentList />
          </ListDesktop>
        )}
      </StyledNav>
    </>
  )
}

export default Nav
