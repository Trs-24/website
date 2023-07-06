import { LocaleCode, localeCodes } from "../../../utils/locales"
import { LanguagePaths } from "../../../utils/context"

/**
 * Extract the locale and the file name from a path in the content folder.
 * @example parseRelativePath("/apps/deliveroo/en/map-ref-codes.md") => { localeCode: "en", name: "map-ref-codes" }
 * @param relativePath
 */
export function parseRelativePath(relativePath: string): { localeCode: LocaleCode; name: string } {
  const [, localeCode, name] = relativePath.match(/([^\/]*)\/([^\/]+)\.[^\/]+$/)!
  if (!(localeCodes as Array<string>).includes(localeCode))
    throw `Could not parse relativePath ${relativePath}. The resulting locale code is not valid: ${localeCode}.`

  return {
    localeCode: localeCode as LocaleCode,
    name,
  }
}

export function generateLanguagePaths(localeCode: LocaleCode, getPath: (code) => string): LanguagePaths {
  const languagePaths: LanguagePaths = {}
  for (const otherLocaleCode of localeCodes) {
    if (otherLocaleCode === localeCode) continue
    languagePaths[otherLocaleCode] = getPath(otherLocaleCode)
  }
  return languagePaths
}
