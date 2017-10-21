
# roadhog前端mock功能实践demo
偷了个懒，直接用dva-cli创建的工程  
主要是想确认下roadhog的mock功能和mockjs有没有关系  
事实证明mockjs并不是必须的，项目里的mockjs只起到了造数据的作用，拦截ajax请求是roadhog自身提供的(内部或许有使用到类似技术)  
## 参考文档
[roadhog-github](https://github.com/sorrycc/roadhog)  
## 使用
就是一个dva-cli创建的，只改了三个文件
.roadhogrc.mock.js
\src\routes\IndexPage.js
\src\routes\IndexPage.js
输出的东西都在控制台
```
git clone
yarn
npm start
```
看这个readme文档就够了
## mock实现步骤    
.roadhogrc.mock.js中export 一个mock对象即可，官方示例如下。
```javascript
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1,2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },

  // Forward 到另一个服务器
  'GET /assets/*': 'https://assets.online/',

  // Forward 到另一个服务器，并指定子路径
  // 请求 /someDir/0.0.50/index.css 会被代理到 https://g.alicdn.com/tb-page/taobao-home, 实际返回 https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
};
```
注意自定义函数应用相当广，可以返回特定状态码等信息，简单示例如下:
```javascript
  [`POST ${url}`]: (req, res) => {
    const { query } = req
    console.log('query', query)
    res.status(300).json({
      data: data[query],
      total: data.length,
    })
  }
```
