import './scss/build.scss'

import * as components from './components'

import config, { setOptions } from './utils/config'
import { use } from './utils/plugins'

const BulmaFluent = {
  install(Vue, options = {}) {
    // Options
    setOptions(Object.assign(config, options))
    // Components
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
  },
}

use(BulmaFluent)

export default BulmaFluent
