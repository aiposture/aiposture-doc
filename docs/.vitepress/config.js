export default {
    title: '欢迎光临 AiPosture文档',
    description: 'Just playing around.',
    head:[
        ['link', { rel: 'icon', href: '/ai.webp' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: "AiPosture",  //左上角的
        logo: "/ai.webp",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
          {
            text: "产品列表",             //导航标签的名字
            items: [                  //这种格式是有下拉菜单的版本
              { text: "mov2mov", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
              { text: "openpose", link: "/articles/vue/index" },
              { text: "Ukiyo", link: "/articles/vue/index" },
            ],
          },
          { text: "B站教程", link: "https://space.bilibili.com/3493090841069966/?spm_id_from=333.999.0.0" },   //这种是没有下拉菜单的版本
        ],
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/aiposture" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
        sidebar: {
            "/mov2mov/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 mov2mov", link: "/mov2mov/getting-started" },
                    ],
                },
                {
                    text: "安装",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "本地部署", link: "/mov2mov/install" },
                    ],
                },
                {
                    text: "使用",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "文字生成图片", link: "/mov2mov/txt2img" },
                        { text: "lora模型使用", link: "/mov2mov/lora" },
                    ],
                },
                {
                    text: "扩展",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "ControlNet", link: "/mov2mov/controlnet" },
                    ],
                },
            ],
            "/openpose/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 openpose", link: "/openpose/getting-started" },
                    ],
                },
                {
                    text: "安装",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "拉取项目", link: "/openpose/install" },
                    ],
                },
            ],
            "/Ukiyo/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 Ukiyo", link: "/Ukiyo/getting-started" },
                    ],
                },
                {
                    text: "安装",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "拉取项目", link: "/Ukiyo/install" },
                    ],
                },
            ],
            "/about-ai/": [
                {
                    text: "关于AiPosture",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "企鹅群", link: "/about-ai/about-ai.md" },
                    ],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023 By <a href="https://github.com/aiposture">AiPosture Team</a>'
        },
        editLink: {
            pattern: 'https://github.com/orgs/aiposture/discussions',
            text: '欢迎论坛交流'
        },
    },
}
