import React from 'react'
import { render } from 'react-dom'
import './mock'
// 一个ajax请求
// const dataA = $.ajax({
//   url: '/ajax',
//   dataType: 'json', 
//   data: 'ajax请求',
//   type:"POST",
//   success: function(data) {
//       console.log('ajax success，返回值:\n', data)
//   }
// })
// console.log("$.ajax()返回值:" ,dataA)

// 一个fetch请求
// fetch('/fetch').then(function(response){
//   console.log('fetch response', response)
//   return response.blob();
// }).then(function(myblob){
//   console.log('fetch blob', myblob)
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src =objectURL;
// });

// axios请求
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

const Ha = () => (
  <div>
    hello world哈哈
    </div>
)
render(<Ha />, document.getElementById("app"))
