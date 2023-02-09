import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidbar'
import { handleCode } from './markdown'
import { cards } from './cards'

let head = [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['meta', {name : 'keywords', content: 'Python,Python教程,零基础学Python,python,python3,Python3,编程'}],
    ['meta', {name: 'description', content: '零基础学Python，由浅及深，循序渐进。' }]
]

if(!process.env.NODE_ENV){
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
    // @ts-ignore
    head.push(['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-GM7DD3G5HL'}])
    // @ts-ignore
    head.push(['script', {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-GM7DD3G5HL');
    `])
    // @ts-ignore
    head.push(['script', {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5247553446852481', crossorigin:'anonymous'}])
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
