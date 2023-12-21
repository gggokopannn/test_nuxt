import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme = {
    dark: false,
    colors: {
      primary: '#00AEEF',
      'primary-dark': '#0089BD',
      'primary-facebook': '#007DAD',
      'primary-5': '#18B5F0',
      'primary-4': '#48C2F0',
      'primary-3': '#78CFF0',
      'primary-2': '#A8DCF0',
      'primary-1': '#E4ECF0',
      secondary: '#1BB967',
      'secondary-line': '#00C200',
      'secondary-6': '#078745',
      'secondary-5': '#18A15A',
      'secondary-4': '#41BA7B',
      'secondary-3': '#66BA8F',
      'secondary-2': '#9FD4B8',
      'secondary-1': '#CAEDDB',
      'grey-5': '#4F4F4F',
      'grey-4': '#858585',
      'grey-3': '#B1B1B1',
      'grey-2': '#E2E2E2',
      'grey-1': '#F0F0F0',
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF0000',
      orange: '#F56600',
      yellow: '#FDDC69',
      blue: '#D0E2FF',
      pink: '#FF5C62',
      error: '#FF5252'
    },
  }
  const vuetify = createVuetify({
    ssr: false,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})