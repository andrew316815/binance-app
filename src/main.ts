import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify( {
  components,
  directives,
} )

// router
import router from './router'

// pinia 
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp( App ).use( vuetify ).use( router ).use( pinia ).mount( '#app' )
