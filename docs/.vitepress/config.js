export default {
  base: "/",
  // 网站标题
  title: "YC文档",
  // 网站描述
  description: "一个简洁美观的文档网站",

  // 主题配置
  themeConfig: {
    // 网站左上角导航
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      { text: "GitHub", link: "https://github.com" },
    ],

    // 侧边栏
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "配置", link: "/guide/configuration" },
            { text: "控制台", link: "/guide/console" },
          ],
        },
        {
          text: "详细指南",
          // 可以折叠的组
          collapsed: false, // true表示默认折叠
          items: [
            {
              text: "设置",
              link: "/guide/detailed/setting",
            },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com" }],
  },
};
