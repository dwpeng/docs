interface SidebarItem {
    text: string,
    link?: string,
    items?: SidebarItem[]
}

interface Siderbar {
    [path: string]: SidebarItem[]
}

export const sidebar: Siderbar = {
    '/python/': [
        {
            text: '基础',
            items: [
                {
                    text: '前言',
                    link: '/python/'
                },
                {
                    text: '安装',
                    link: '/python/basic/install'
                },
                {
                    text: '第一个Python程序',
                    link: '/python/basic/first-python'
                },
                {
                    text: '变量',
                    link: '/python/basic/var',
                },
                {
                    text: '运算符',
                    link: '/python/basic/operation',
                },
                {
                    text: '控制流',
                    link: '/python/basic/control-flow'
                },
            ]
        },

        {
            text: '数据结构',
            link: '/python/basic/data-struct/',
            items: [
                {
                    text: '列表',
                    link: '/python/basic/data-struct/list'
                },
                {
                    text: '字典',
                    link: '/python/basic/data-struct/dict'
                },
                {
                    text: '元组',
                    link: '/python/basic/data-struct/tuple'
                },
                {
                    text: '集合',
                    link: '/python/basic/data-struct/set'
                }
            ]
        },

        {
            text: '函数',
            link: '/python/basic/function/',
            items: [
                {
                    text: '函数',
                    link: '/python/basic/function/',
                },
                {
                    text: '参数',
                    link: '/python/basic/function/args',
                },
                {
                    text: '装饰器',
                    link: '/python/basic/function/decorator',
                },
            ]
        },
        {
            text: '面向对象',
            link: '/python/advanced/class/',
            items: [
                {
                    text: '属性',
                    link: '/python/advanced/class/property'
                },
                {
                    text: '方法',
                    link: '/python/advanced/class/method'
                },
                {
                    text: '魔术方法',
                    link: '/python/advanced/class/magic-method'
                }
            ]
        },
        {
            text: '异步编程',
            items: [
                {
                    text: '线程',
                    link: '/python/advanced/thread'
                },
                {
                    text: '进程',
                    link: '/python/advanced/process'
                },
                {
                    text: '异步',
                    link: '/python/advanced/async'
                },
            ]
        },
        {
            text: '标准库',
            link: '/python/std/',
            items: [

            ]
        },
        {
            text: '代码风格',
            link: '/python/style/',
            items: [
                
            ]
        }
    ],
}
