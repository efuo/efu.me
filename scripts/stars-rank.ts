export function getStarsRankingUrl() {
  const users = [
    'efuo',
  ]
  const repos = [
    'lokalise/i18n-ally',
    'nuxt/nuxt',
    'nuxt/modules',
    'nuxt/devtools',
    'unjs/unplugin',
    'unjs/unimport',
    'unjs/uqr',
    'vitejs/awesome-vite',
    'vitejs/vite',
    'vuejs/composition-api',
    'wenyan-lang/ide',
    'wenyan-lang/wenyan',
    'wenyan-lang/wyg',
    'windicss/vite-plugin-windicss',
  ]

  const query = [
    ...users.map(i => `user:${i}`),
    ...repos.map(i => `repo:${i}`),
  ].join(' ')

  const url = `https://github.com/search?l=&o=desc&s=stars&type=Repositories&q=${encodeURIComponent(query)}`
  return url
}
