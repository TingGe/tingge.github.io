# developing scalable front-end code

—— 形成一套编写 redux 最佳实践的案例。

### 目标：

为管理系统状态熵、提升开发体验、能满足复杂产品或项目中前端代码的可测试，稳定和可扩展。希望我们的代码是出现在某某最佳实践中，而不是我们看到一段反例代码时感觉很亲切。

## 现状

当下，我们的前端技术栈是围绕 Idiomatic Redux 架构的 React 系技术栈。前端技术进化，是个持续的工程。

Redux 特征：一个全局的分级状态树 ……

### 工作：

汇总当下前端开发过程中的痛点，形成团队协作的一套可复用的标准化解决方案。

## 痛点：

1. Reducer 复用 ？
2. Reducer 中 state 的更新？
3. Reducer 和 action 样板代码的优化？[dva、kea...]
4. 通过组件 props 和 actions 传递值，触发 re-renders。[...]
5. 联合查询？

#### 针对 Reducer 复用问题：Higher Order Reducers

- 我们现状：AsyncTuple 等方式
- 替代方案：暂无需优化
  - [Higher Order Reducers conception](http://1ven.me/higher-order-reducers.html)
  - [Higher-Order Reducers and Async State](http://engineering.blogfoster.com/managing-complexity-in-redux-higher-order-reducers-and-async-state/)
  - [how-to-abstract-multiple-reducers-with-similar-actions？](https://stackoverflow.com/questions/46944672/)

#### 针对 Reducer 中 state 的更新：Immutable Update Patterns

- 我们现状： … 浅拷贝  + _.get()

- 替代方案：

  | Immutable Update Utility Libraries       | 点评   |
  | ---------------------------------------- | ---- |
  | [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable) |      |
  | [immutability-helper](https://github.com/kolodny/immutability-helper) |      |
  | [更多 redux-ecosystem-links](https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities) |      |

#### 针对联合查询：

- 我们现状：通过 actions 中 类 redux-thunk 方案、async await 的方式。
- 替代方案：暂无


## HOW

> 怎么做？如何提高效率？如何实施？方法是什么？

1. 定义组件角色：**Presentational** 和 **Container**
2. 决定什么样的 state 需要放到 Store：**globally** 和 **container component** 的 **local state**
3. 考虑分享 css 组件的命名空间

## 参考

- [3 simple steps to improve your React Redux code](https://cheesecakelabs.com/blog/3-simple-steps-to-improve-react-redux-code/)
- [redux 有什么缺点？](https://www.zhihu.com/question/263928256)