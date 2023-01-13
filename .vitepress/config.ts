import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidbar'
import { handleCode } from './markdown'
import { cards } from './cards'

let head = [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
]

if(process.env.NODE_ENV){
    // @ts-ignore
    head.push(['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?bd7e7a2890e38bc050dd06016eecb134";
      var s = document.getElementsByTagName("script")[0]; 
          var s = document.getElementsByTagName("script")[0]; 
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `])
}


export default defineConfig({
    title: '塔容万物',
    lang: 'zh-CN',
    srcDir: './src',
    outDir: './dist',
    // @ts-ignore
    head: head,
    cleanUrls: 'with-subfolders',
    lastUpdated: true,
    themeConfig: {
        // @ts-ignore
        nav,
        // @ts-ignore
        sidebar,
        outline: 'deep',
        outlineTitle: '目录',
        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/dwpeng/docs/'
        }
        ],
        editLink: {
            pattern: 'https://github.com/dwpeng/docs/edit/master/src/:path',
            text: '编辑此页'
        },
        cards
    },
    markdown: {
        lineNumbers: false,
        config: (md) => {
            md.use(handleCode)
        }
    },
    vite: {
        build: {
            assetsInlineLimit: 0,
        }
    }
})
