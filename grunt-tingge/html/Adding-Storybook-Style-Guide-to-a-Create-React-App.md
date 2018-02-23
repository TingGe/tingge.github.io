# Create React App 应用中添加 Storybook 指南

更新于  2018年2月23日

整理自 YouTube 视频《[Adding Storybook Style Guide to a Create React App](https://www.youtube.com/watch?v=va-JzrmaiUM)》，感谢 Manorisms。

## 环境

1. 从 create-react-app 创建示例项目 playground

   ```bash
   npx create-react-app playground
   ```

2. playground 中创建 storybook

   ```bash
   cd playground
   npx storybook
   ```

3. 启用 storybook 开发模式

   ```bash
   npm run #查看 playground 项目中可执行的 scripts
   npm run storybook #进入 storybook 开发模式
   ```

4. 启动后，在浏览器中 `http://localhost:9009/` 即可查看默认的 Storybook。

## 整合 StoryBook 和 playground 项目

1. 用编辑器打开文件 `playground/src/stories/index.js` ，添加以下代码：

   ```javascript
   ...
   import App from "../App"; // 引入 playground 的 App
   ...

   storiesOf("App", module)
     .add("default", () => <App />) // 创建默认 App 节点和页面
     .add("with title", () => <App title="My World" />); // 创建带标题属性的 App 节点和页面
   ```

2. 用编辑器打开文件 `playground/src/App.js`， 为 App 组件增加 title 属性：

   ```javascript
   import React, { Component } from 'react';
   import logo from './logo.svg';
   import './App.css';

   class App extends Component {
     render() {
       const { title } = this.props; // 增加 props 的 title 
       return (
         <div className="App">
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Welcome to {title}</h1> // 页面中显示 title 值
           </header>
           <p className="App-intro">
             To get started, edit <code>src/App.js</code> and save to reload.
           </p>
         </div>
       );
     }
   }

   /* 设置 title 默认值 */
   App.defaultProps = {
     title: "React"
   };

   export default App;
   ```

3. 在浏览器中切换回  `http://localhost:9009/`  即可查看刚新增的 default 和 with title 节点。点击可在右侧预览对应的 App 页面。

4. 在命令行中 Ctrl + C 退出 storybook 开发模式， 构建 `storybook-static`。

   ```bash
   npm run build-storybook
   ```

5. 启动 `storybook-static` 服务。

   ```bash
   npx serve storybook-static
   ```

6. 在浏览器中打开 http://localhost:5000  查看即可。