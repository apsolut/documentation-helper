import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { SpeedInsights } from "@vercel/speed-insights/next"

const config: DocsThemeConfig = {
  logo: <span>Helpers - Today I learned</span>,
  project: {
    link: 'https://github.com/apsolut/documentation-helper',
  },
  docsRepositoryBase: 'https://github.com/apsolut/documentation-helper',
  footer: {
    text: 'Helpers',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
