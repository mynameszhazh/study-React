# react note

## 基本知识

### 装饰器

- 安装

  - `npm install -D @babel/plugin-proposal-decorators`
  - 下载 react 装饰器的插件

- 配置选项

  - 根目录的 config-overrides 里面有配置

- 使用

```js
@foo
function bar(any) {}
```

- [参考文档](https://blog.csdn.net/lfy_wybss/article/details/122079178)

### 手写 类似 antd from 表单

- [here](../src/view/antd/components/Xfrom.js)
  - 表单数据的响应式,和数据的获取等等
  - 表单的校验需要更改

### 弹窗类组件的编写
- 思路
  - 利用 react 的portal 来进行实现

### reducer
- 接受一个 就得 state 和 action 返回一个新的 state