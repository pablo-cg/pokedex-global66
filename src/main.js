import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Button from '@/components/layout/Button.vue'
import Loader from '@/components/layout/Loader.vue'
import SearchInput from '@/components/layout/SearchInput.vue'
import NoData from '@/components/layout/NoData.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Button', Button)
app.component('Loader', Loader)
app.component('SearchInput', SearchInput)
app.component('NoData', NoData)

app.mount('#app')
