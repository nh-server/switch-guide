/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import container from 'markdown-it-container'

import * as i18n from './i18n'

export default defineConfig({
  title: "NH Switch Guide",
  description: "Switch CFW Guide.",
  sitemap: {
    hostname: 'https://switch.hacks.guide'
  },
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]],
  themeConfig: {
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/C29hYvh' },
      { icon: 'github', link: 'https://github.com/nh-server/switch-guide' }
    ]
  },
  locales: {
    root: i18n.en_US
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocOutlineItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPDocOutlineItem.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(container, "cards", {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<div class="cards">\n`;
          } else {
            return `</div>\n`;
          }
        }
      });
      md.use(container, 'card', {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<div class="card">\n`;
          } else {
            return `</div>\n`;
          }
        }
      });
      md.use(container, "tabs", {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            return `<Tabs ${token.info}>\n`;
          } else {
            return `</Tabs>\n`;
          }
        }
      });
      md.use(container, 'tab', {
        render: (tokens, idx) => {
          const token = tokens[idx];
          if (token.nesting === 1) {
            let tokenData = token.info.match(/^ ?tab\s(default\s)?(.*)$/);
            let isDefault = typeof tokenData[1] !== 'undefined';
            let name = tokenData[2];
            return `<Tab name="${name}" ${isDefault ? "default=true" : ""}>`;
          } else {
            return `</Tab>\n`;
          }
        }
      });
    }
  }
})
