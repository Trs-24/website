"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"

import Title from "@components/Block/Title"
import { AppsYaml } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"

import AppGroup from "./AppGroup"
import Developer from "./Developer"
import Hero from "./Hero"
import Nav from "./Nav"
import { SearchInputWrapper, StyledSearchInput } from "./Styles"

interface AppsProps {
  language: Language
  yaml: AppsYaml
  logoImages: { [logo: string]: ContentImage }
  categoryTitle?: string
}

const Apps = ({ language, yaml, logoImages, categoryTitle }: AppsProps): JSX.Element => {
  const {
    content: { categories, hero, all_apps, additional_sections, developers },
  } = yaml

  const { t } = useTranslation()

  const [searchText, setSearchText] = React.useState("")

  const deferredSearchText = React.useDeferredValue(searchText)

  const filteredCategories = React.useMemo(
    () =>
      categories.reduce<typeof categories>((filteredCategories, currentCategory) => {
        const filteredApps = currentCategory.apps.filter((app) =>
          app.description.toLowerCase().includes(deferredSearchText.toLowerCase()),
        )

        if (filteredApps.length > 0) {
          filteredCategories.push({
            ...currentCategory,
            apps: filteredApps,
          })
        }

        return filteredCategories
      }, []),
    [deferredSearchText, categories],
  )

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value.trimStart())
  }

  return (
    <>
      <Hero hero={hero} />

      <Nav language={language} categories={categories} allAppsLabel={all_apps} />

      <SearchInputWrapper>
        <StyledSearchInput
          placeholder={t("apps.search_input_placeholder")}
          type="text"
          value={searchText}
          onChange={handleInputChange}
        />
      </SearchInputWrapper>

      {filteredCategories.length === 0 ? (
        <Title backgroundColor="none" horizontalAlign="center" verticalSpacing="large">
          {t("apps.no_results")}
        </Title>
      ) : (
        filteredCategories.map(({ title, apps, has_suggest_app }, idx) => {
          if (!categoryTitle || categoryTitle === title) {
            return (
              <AppGroup
                key={idx}
                title={title}
                showTitle={!categoryTitle}
                apps={apps}
                logoImages={logoImages}
                additionalSections={additional_sections}
                hasSuggestApp={has_suggest_app}
              />
            )
          }
        })
      )}
      <Developer developers={developers} />
    </>
  )
}

export default Apps
