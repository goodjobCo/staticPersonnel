# React-Static - Basic Template

To use this template, run `react-static create` and use the `basic` template.

### react-static靜態網站建設
```
https://github.com/react-static/react-static#readme
https://maxiee.github.io/post/ReactStatic3md/

    yarn start - Start the development server
    yarn build - Build for production
    yarn serve - Test a production build locally


├── README.md
├── artifacts           // react-static 自动生成的项目描述
│   ├── react-static-browser-plugins.js
│   └── react-static-templates.js
├── node_modules
├── package.json        // 工程描述文件
├── public              // 公共资源目录
│   └── robots.txt
├── src                 // 代码目录
│   ├── App.tsx         // 网站整体结构定义
│   ├── app.css         // 网站全局 css
│   ├── components      // React 组件
│   ├── containers      // 容器：Post.tsx 帖子页
│   ├── index.tsx       // 网站入口，react-static 初始化相关，导入 App
│   ├── pages           // 页面：404.tsx、about.tsx、blog.tsx、index.tsx
│   └── types.ts        // 数据类型定义
├── static.config.js    // react-static 配置文件 數據提供
├── tmp
│   └── dev-server
├── tsconfig.json       // TypeScript 配置脚本
└── yarn.lock

```