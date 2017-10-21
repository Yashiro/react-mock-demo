# React项目中的mock伪后台实践
[Mock.js官方API文档](https://github.com/nuysoft/Mock/wiki/Mock.mock())
[Getting Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)
## 使用
克隆程序，然后执行:
```
yarn
npm run dev
打开http://localhost:8080/即可查看
# 项目打包
npm run build
```
## 源码解析  
### ajax
使用jquery的ajax发送请求
```javascript
const dataA = $.ajax({
  url: '/index',
  dataType: 'json'
})
console.log("dataA" ,dataA)
```
mock收到的Options与ajax得到的返回值:  
![ajax请求options和返回值](https://github.com/vonxq/react-mock-demo/blob/master/img/ajaxOptionsAndResponse.png?raw=true)
得到的返回值如下:  
![ajax请求返回值](https://github.com/vonxq/react-mock-demo/blob/master/img/ajaxResponse.png?raw=true)

### fetch
fetch用法 [fetch API详解 mozila](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)  
fetch存在各浏览器兼容性问题，使用时需要添加相应polyfill  
#### 问题处理
fetch得到404
  [mockjs github issues不支持fetch](https://github.com/nuysoft/Mock/issues?utf8=%E2%9C%93&q=fetch)  
  说是mockjs不支持fetch，只支持ajax...

### axios
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
![mock得到的options和axios收到的response](https://github.com/vonxq/react-mock-demo/blob/master/img/axiosAndMockjs.png?raw=true)
