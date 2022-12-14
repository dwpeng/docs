import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import './style/index.css'
// @ts-ignore
import WeChat from './components/WeChat.vue'
// @ts-ignore
import Index from './components/Index/Index.vue'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            // 'aside-outline-before': () => h(WeChat),
            'doc-footer-before': () => h(WeChat)
        })
    },
    enhanceApp(ctx) {
        // extend default theme custom behaviour.
        DefaultTheme.enhanceApp(ctx)

        // register your custom global components
        ctx.app.component('Index', Index)
    }
}
