// Type definitions for next-translate
// Definitions by: Yuriy Glebov https://github.com/BadRed

import { ReactNode, FC } from 'react'
import App from 'next/app'

declare function useTranslation(): I18nContext
declare function I18nProvider(props: {
  lang: string
  namespaces?: I18nNamespace
  children: ReactNode
  internals?: object
}): ReactNode
//TODO: Fix
declare function withTranslation<TProps>(
  component: React.ComponentType<TProps>
): React.ComponentType<TProps & TranslationProps>
declare const Trans: FC<TransProps>
declare function appWithI18n(app: App, Configuration): ReactNode //TODO: Check the actual return type

/*~ You can declare types that are available via importing the module */
export interface Configuration {
  //TODO: clarify
  defaultLanguage?: string | (() => string)
  allLanguages?: string[]
  ignoreRoutes?: string[]
  defaultLangRedirect?: string
  currentPagesDir?: string
  finalPagesDir?: string
  localesPath?: string
  loadLocaleFrom?: (lang: string, namespace: string) => string
  //TODO: clarify
  pages?: Pages
  logBuild?: boolean
}

export interface TransProps {
  i18nKey: string
  components?: ReactNode[]
  values?: I18nQuery
}

export interface I18nContext {
  t: translationFunc
  lang: string
}

export interface TranslationProps {
  i18n: I18nContext
}

interface Pages {
  [name: string]: string[] | ((req: object, query) => string[])
}

type translationFunc = (key: string, query?: I18nQuery) => string

interface I18nQuery {
  [name: string]: string | number | boolean
}

interface I18nNamespace {
  [key: string]: string
}

export { useTranslation, I18nProvider, withTranslation, Trans, appWithI18n }
