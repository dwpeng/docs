import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import './style/index.css'
// @ts-ignore
import WeChat from './components/WeChat.vue'
// @ts-ignore
import Index from './components/Index/Index.vue'
// @ts-ignore
import Giscus from './components/Giscus.vue'

// @ts-ignore
import GoogleAd from './components/GoogleAd.vue';


export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'aside-outline-after': () => h(GoogleAd),
            'doc-footer-before': () => h(WeChat),
            'doc-after': () => h(Giscus)
        })
    },
    enhanceApp(ctx) {
        // extend default theme custom behaviour.
        DefaultTheme.enhanceApp(ctx)

        // register your custom global components
        ctx.app.component('Index', Index)
    }
}
