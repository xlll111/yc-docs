export default {
  base: "/",
  lang: "zh-CN",
  title: "YC文档",
  // 网站描述
  description: "YC文档",

  // 主题配置
  themeConfig: {
    // 设置界面语言
    outlineTitle: "本页目录", // 右侧"On this page"的标题
    lastUpdatedText: "最后更新", // 最后更新时间文本
    // editLinkText: "在GitHub上编辑此页", // 编辑链接文本
    returnToTopLabel: "返回顶部", // 返回顶部按钮
    sidebarMenuLabel: "菜单", // 侧边栏菜单
    darkModeSwitchLabel: "主题", // 深色模式切换
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",

    // 网站左上角导航
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      // { text: "GitHub", link: "https://github.com" },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到相关结果",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
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
    // socialLinks: [{ icon: "github", link: "https://github.com" }],
  },
};
