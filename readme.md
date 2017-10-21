# 前端mock数据实现伪后台
两种实现方式mockjs和roadhog，注roadhog也可以利用mockjs造数据，知识这时的mockjs不承担拦截ajax请求的任务  

## mockjs实现
这种方式只支持ajax和axios，不支持fetch  
[Mock.js官方API文档](https://github.com/nuysoft/Mock/wiki/Mock.mock())  
[Getting Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)  
### 数据获取方式  
#### ajax  
使用jquery的ajax发送请求  
```javascript
const dataA = $.ajax({
  url: '/index',
  dataType: 'json'
})
console.log("dataA" ,dataA)
```
得到的返回值如下:  

#### fetch  
fetch用法 [fetch API详解 mozila](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)  
fetch存在各浏览器兼容性问题，使用时需要添加相应polyfill  
##### 问题处理  
fetch得到404  
  [mockjs github issues不支持fetch](https://github.com/nuysoft/Mock/issues?utf8=%E2%9C%93&q=fetch)   
  说是mockjs不支持fetch，只支持ajax...  

#### axios  
[axios中文文档附API](https://www.kancloud.cn/yunye/axios/234845)  
axios亲测可用，这也是现在项目中用到的获取方式  

```javascript
axios.post('/axios', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log("axios收到的response", response);
})
.catch(function (error) {
  console.log("axios error", error);
});
```  
mock得到的options和axios收到的response如图所示:  


## roadhog前端mock功能实践demo
偷了个懒，直接用dva-cli创建的工程  
主要是想确认下roadhog的mock功能和mockjs有没有关系  
事实证明mockjs并不是必须的，项目里的mockjs只起到了造数据的作用，拦截ajax请求是roadhog自身提供的(内部或许有使用到类似技术)  
### 参考文档  
[roadhog-github](https://github.com/sorrycc/roadhog)   
### roadhog mock实现步骤    
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
