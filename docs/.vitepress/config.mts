import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ES6Learning',
  description: '从 ES2015 到 ES2025 的 JavaScript / ECMAScript 学习站点',
  lang: 'zh-CN',
  base: '/ES6Learning/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '高频速查', link: '/guide/cheatsheet' },
      { text: 'ES2015', link: '/years/es2015' },
      { text: 'ES2025', link: '/years/es2025' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '首页', link: '/' },
          { text: '高频速查', link: '/guide/cheatsheet' }
        ]
      },
      {
        text: '年度特性',
        items: [
          { text: 'ES2015', link: '/years/es2015' },
          { text: 'ES2016', link: '/years/es2016' },
          { text: 'ES2017', link: '/years/es2017' },
          { text: 'ES2018', link: '/years/es2018' },
          { text: 'ES2019', link: '/years/es2019' },
          { text: 'ES2020', link: '/years/es2020' },
          { text: 'ES2021', link: '/years/es2021' },
          { text: 'ES2022', link: '/years/es2022' },
          { text: 'ES2023', link: '/years/es2023' },
          { text: 'ES2024', link: '/years/es2024' },
          { text: 'ES2025', link: '/years/es2025' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/julius19910613/ES6Learning' }
    ],
    outline: {
      level: [2, 3],
      label: '本页导航'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新'
    },
    search: {
      provider: 'local'
    }
  }
})
