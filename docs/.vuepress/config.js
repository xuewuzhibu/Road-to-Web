const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');

module.exports = {
    theme: 'vdoing', // 使用依赖包主题
    // theme: require.resolve('../../vdoing'), // 使用本地主题

    title: 'Road to Web',
    description: '本站标题意味着Web之路，是自学Web以来所有资料和文档、视频的聚合，教程文档来自于全网较好的视频或文档整理出来的，目的是为了在学习或开发中便于查漏补缺。',
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
    head: [
        // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        ['meta', { name: 'keywords', content: 'html,css,javascript,Web文档,教程,学无止步,Young' }],
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
        ['link', { rel: 'stylesheet', href: '/js-demo/js-demo.css' }], // js-demo
        ['script', { src: '/js-demo/js-demo.js' }], // js-demo
        ['link', { rel: 'stylesheet', href: 'https://cdn.xuewuzhibu.cn/XueWuZhiBu/KaTeX/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.xuewuzhibu.cn/XueWuZhiBu/KaTeX/github-markdown.min.css' }],
        [
            // ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }], // 代码演示模块
            // ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }], // 代码演示模块
            ('script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }),
        ], // 代码演示模块
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }], // 代码演示模块
        // ['meta', { name: 'wwads-cn-verify', content: '' }], // 广告相关，你可以去掉
        // ['script', { src: '', type: 'text/javascript' }], // 广告相关，你可以去掉
    ],

    // 主题配置
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '基础入门',
                link: '/pages/d4d149/',
                items: [
                    {
                        text: '前端基础',
                        items: [
                            { text: 'HTML文档', link: '/pages/d4d149/' },
                            { text: 'CSS文档', link: '/pages/14fbd7/' },
                            { text: 'JavaScript文档', link: '/pages/d6e96a/' },
                        ],
                    },
                    {
                        text: 'Git安装及使用',
                        items: [{ text: 'Git文档', link: '/pages/35a411/' }],
                    },
                ],
            },
            {
                text: '高级进阶',
                link: '/pages/e9f91a/',
                items: [
                    {
                        text: 'CSS预处理语言',
                        items: [
                            { text: 'Sass/Scss文档', link: '/pages/e9f91a/' },
                            { text: 'Less文档', link: '/pages/0c5469/' },
                        ],
                    },
                    {
                        text: 'JavaScript语法糖',
                        items: [
                            { text: 'TypeScript文档', link: '/pages/07ea96/' },
                            { text: 'ECMAScript6文档', link: '/pages/0352b9/' },
                        ],
                    },
                    {
                        text: '包管理工具',
                        items: [
                            { text: 'npm文档', link: '/pages/c29631/' },
                            { text: 'Yarn文档', link: '/pages/cb419f/' },
                        ],
                    },
                    {
                        text: '构建工具',
                        items: [
                            { text: 'NPM Script文档', link: '/pages/de9b88/' },
                            { text: 'Webpack文档', link: '/pages/b6fc67/' },
                        ],
                    },
                ],
            },
            {
                text: '前端框架',
                link: '/pages/b12887/',
                items: [
                    {
                        text: 'JavaScript框架',
                        items: [
                            { text: 'Vue.js文档', link: '/pages/b12887/' },
                            { text: 'React.js文档', link: '/pages/c98e1d/' },
                        ],
                    },
                    {
                        text: 'CSS相关框架(官方文档)',
                        items: [
                            { text: '(由于官方文档较为全面，CSS框架容易上手)', link: '/#' },
                            { text: 'Bootstrap官方文档', link: 'https://v3.bootcss.com/getting-started/' },
                            { text: 'Material UI', link: 'https://v4.mui.com/zh/getting-started/installation/' },
                        ],
                    },
                ],
            },
            {
                text: '其他前端文档',
                link: '/pages/dd0e5b/',
                items: [
                    {
                        text: '服务器渲染',
                        items: [
                            { text: 'Next.js文档', link: '/pages/dd0e5b/' },
                            { text: 'Nuxt.js文档', link: '/pages/07afaa/' },
                        ],
                    },
                    {
                        text: '图形化编程',
                        items: [{ text: 'Thress.js文档', link: '/pages/148a96/' }],
                    },
                    {
                        text: '静态站点生成器',
                        items: [
                            { text: 'Next.js文档', link: '/pages/429ed5/' },
                            { text: 'Nuxt.js文档', link: '/pages/6b7dd4/' },
                            { text: 'VuePress文档', link: '/pages/3a5715/' },
                        ],
                    },
                    {
                        text: '移动App开发',
                        items: [
                            { text: 'React Native文档', link: '/pages/3ca260/' },
                            { text: 'UniApp文档', link: '/pages/76823e/' },
                        ],
                    },
                    {
                        text: '桌面应用开发',
                        items: [{ text: 'Electron文档', link: '/pages/f1a465/' }],
                    },
                ],
            },
            { text: '问答', link: '/pages/ebc669/' },
            { text: '💖支持', link: '/pages/f3652b/' },
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: 'https://images.xuewuzhibu.cn/dc02639e68054090f843827f6425b87d.png', // 导航栏logo
        repo: 'xuewuzhibu/Road-to-Web', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

        // docsDir: 'docs', // 编辑的文件夹
        // editLinks: true, // 编辑链接
        // editLinkText: '编辑',

        // 以下配置是Vdoing主题改动的和新增的配置
        sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

        // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
        updateBar: {
            // 最近更新栏
            showToArticle: false, // 显示到文章页底部，默认true
            // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        },
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // bodyBgImg: ['https://images.xuewuzhibu.cn/4e18affa472161768bda4ec49c65ac4d.jpg', 'https://images.xuewuzhibu.cn/d3b3e7e57d23a96195fcfef532172d5f.jpg', 'https://images.xuewuzhibu.cn/70d29688254c6564785966b6f67a4a36.jpg'], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。

        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // contentBgStyle: 1,

        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        //archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

        author: {
            // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
            name: 'Young', // 必需
            href: 'https://github.com/xuewuzhibu', // 可选的
        },
        social: {
            // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:750837279@qq.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/xuewuzhibu',
                },
                {
                    iconClass: 'icon-erji',
                    title: '听音乐',
                    link: 'https://music.163.com/#/playlist?id=6663416920',
                },
            ],
        },
        footer: {
            // 页脚信息
            createYear: 2021, // 博客创建年份
            copyrightInfo: '<a href="//xuewuzhibu.cn">学无止步</a>', // 博客版权信息，支持a标签
        },
        htmlModules,
    },
    markdown: {
        extendMarkdown: (md) => {
            md.use(require('markdown-it-katex')); // 启动 markdown-it-katex 插件
        },
    },
    // 插件
    plugins: [
        // [require('./plugins/love-me'), { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // }],

        ['fulltext-search'], // 全文搜索

        // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        //   thirdparty: [ // 可选，默认 []
        //     {
        //       title: '在GitHub中搜索',
        //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
        //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        //     },
        //     {
        //       title: '在npm中搜索',
        //       frontUrl: 'https://www.npmjs.com/search?q=',
        //     },
        //     {
        //       title: '在Bing中搜索',
        //       frontUrl: 'https://cn.bing.com/search?q='
        //     }
        //   ]
        // }],

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode || '01293bffa6c3962016c08ba685c79d78',
            },
        ],

        [
            'one-click-copy',
            {
                // 代码块复制按钮
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        [
            'demo-block',
            {
                // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)',
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs'); // https://day.js.org/
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
                },
            },
        ],
    ],
};
