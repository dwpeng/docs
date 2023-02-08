interface SidebarItem {
    text: string,
    link?: string,
    collapsible?: boolean,
    items?: SidebarItem[]
}

interface Siderbar {
    [path: string]: SidebarItem[]
}

export const sidebar: Siderbar = {
    '/python/': [
        {
            text: '基础',
            collapsible: true,
            items: [
                {
                    text: '介绍',
                    link: '/python/'
                },
                {
                    text: '安装',
                    link: '/python/install'
                },
                {
                    text: '第一个Python程序',
                    link: '/python/first-python'
                },
                {
                    text: '变量',
                    link: '/python/var/',
                },
                {
                    text: '注释',
                    link: '/python/comment/'
                },
                {
                    text: '格式化',
                    link: '/python/format/'
                },
                {
                    text: '数据结构',
                    link: '/python/data-struct/'
                },
                {
                    text: '运算符',
                    link: '/python/operation/',
                },
                {
                    text: '控制流',
                    link: '/python/control-flow/'
                },
                {
                    text: '文件读写',
                    link: '/python/io/'
                },
            ]
        },

        {
            text: '进阶',
            collapsible: true,
            items: [
                {
                    text: '函数',
                    link: '/python/function/',
                },
                {
                    text: '面向对象',
                    link: '/python/class/',
                },
                {
                    text: '异常处理',
                    link: '/python/exception/',
                },
                {
                    text: '上下文管理',
                    link: '/python/context/',
                },
                {
                    text: '迭代器',
                    link: '/python/iter/',
                },
            ]
        },
        {
            text: '异步编程',
            collapsible: true,
            items: [
                {
                    text: '线程',
                    link: '/python/threading/'
                },
                {
                    text: '进程',
                    link: '/python/process/'
                },
                {
                    text: '协程',
                    link: '/python/coroutine/'
                },
            ]
        },
        {
            text: '包与模块',
            collapsible: true,
            items: [
                {
                    text: '模块系统',
                    link: '/python/package/module'
                },
                {
                    text: '包',
                    link: '/python/package/package'
                },
                {
                    text: 'pip',
                    link: '/python/package/pip'
                },
            ]
        },
        {
            text: '测试',
            collapsible: true,
            items: [
                {
                    text: '单元测试',
                    link: '/python/test/unittest'
                },
                {
                    text: '文档测试',
                    link: '/python/test/doctest'
                },
            ]
        },
        {
            text: '标准库',
            collapsible: true,
            items: [
                {
                    text: 'os',
                    link: '/python/std/os'
                },
                {
                    text: 'sys',
                    link: '/python/std/sys'
                },
                {
                    text: 'json',
                    link: '/python/std/json'
                },
                {
                    text: 'time',
                    link: '/python/std/time'
                },
                {
                    text: 'datetime',
                    link: '/python/std/datetime'
                },
                {
                    text: 'argparse',
                    link: '/python/std/argparse'
                },
                {
                    text: 'typing',
                    link: '/python/std/typing'
                },
                {
                    text: 'dataclasses',
                    link: '/python/std/dataclasses'
                },
                {
                    text: 'enum',
                    link: '/python/std/enum'
                },
                {
                    text: 'collection',
                    link: '/python/std/collection'
                },
                {
                    text: 'functools',
                    link: '/python/std/functools'
                },
                {
                    text: 'itertools',
                    link: '/python/std/itertools'
                },
            ]
        },

        {
            text: '工具',
            collapsible: true,
            items: [
                {
                    text: '编辑器',
                    link: '/python/tool/vscode'
                },
                {
                    text: '虚拟环境',
                    link: '/python/tool/env'
                },
                {
                    text: '代码风格',
                    link: '/python/tool/style'
                },
            ]
        }
    ],
}
