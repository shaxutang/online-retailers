// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    uno: true,
    attributify: true,
    shortcuts: [
      ['flex-ji-center', 'flex justify-center items-center'],
      [
        'single-line-ellipsis',
        'text-ellipsis overflow-hidden whitespace-nowrap'
      ],
      ['ellipsis-line-2', 'text-ellipsis overflow-hidden line-clamp-2'],
      ['ellipsis-line-3', 'text-ellipsis overflow-hidden line-clamp-3']
    ],
    theme: {
      colors: {
        themeBlack: {
          100: '#1C1C1C',
          200: '#585757',
          300: '#969696',
          400: '#E4E4E4',
          500: '#F7F7F7'
        },
        themeBlue: {
          100: '#007BFF',
          200: '#3898FF',
          300: '#85C0FF',
          400: '#CCE5FF',
          500: '#F1F8FF'
        },
        themeGreen: {
          100: '#00B517',
          200: '#33C445',
          300: '#66D374',
          400: '#B2E8B9',
          500: '#E5F7E7'
        }
      },
      breakpoints: {
        sm: '280px',
        md: '560px',
        lg: '1120px'
      }
    }
  }
})
