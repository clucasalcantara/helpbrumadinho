/* eslint-disable-next-line */
import { css } from 'docz-plugin-css'
import './src/assets/css/global.scss'

export default {
  title: 'Work With Coffee Playground',
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: false
    })
  ]
}
