import '!style-loader!css-loader!sass-loader!./preview.scss'

import { setCompodocJson } from '@storybook/addon-docs/angular'
import docJson from './../dist/documentation.json'

setCompodocJson(docJson)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
