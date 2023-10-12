import Block from "@components/Block"
import useTranslation from "@hooks/client/useTranslation"
import { AppsYaml } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"

import {
  Group,
  AppBoxLink,
  AppLogo,
  AppDocumentation,
  AppDescription,
  AppAdditionalInfo,
  AppBoxStatic,
  EmailLink,
  AppLogoImage,
} from "./Styles"

interface AppSectionProps {
  title: string
  showTitle: boolean
  apps: AppsYaml["content"]["categories"][0]["apps"]
  logoImages: { [logo: string]: ContentImage }
  additionalSections: AppsYaml["content"]["additional_sections"]
  hasSuggestApp: boolean
}

const App = ({
  title,
  showTitle,
  apps,
  logoImages,
  additionalSections,
  hasSuggestApp,
}: AppSectionProps): JSX.Element => {
  const { t } = useTranslation()

  if (!apps.length) return <></>

  return (
    <Block backgroundColor="none" title={showTitle ? title : undefined}>
      <Group>
        {apps.map((app, idx) => (
          <AppBoxLink key={idx} href={app.documentation || app.website}>
            {logoImages[app.logo] && (
              <AppLogo>
                <AppLogoImage {...logoImages[app.logo]} alt={app.title} />
              </AppLogo>
            )}

            <AppDocumentation>
              {app.documentation ? t("apps.view_documentation") : t("apps.visit_website")}
            </AppDocumentation>

            <AppDescription>{app.description}</AppDescription>

            {app.additional_info && <AppAdditionalInfo>{app.additional_info}</AppAdditionalInfo>}
          </AppBoxLink>
        ))}

        {hasSuggestApp && (
          <AppBoxStatic>
            {additionalSections.suggest_app.description}
            <EmailLink href="mailto:contact@hubrise.com">contact@hubrise.com</EmailLink>
          </AppBoxStatic>
        )}
      </Group>
    </Block>
  )
}

export default App
