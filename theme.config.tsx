import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
    defaultMenuCollapseLevel: 1, // here
  },
}

export default config
