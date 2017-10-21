// Mock.mock(rurl, function(options))
import Mock from 'mockjs'
const ajaxurl = 'ajax'
const fetchurl = 'fetch'
const axiosurl = 'axios'
const data = Mock.mock({
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
Mock.mock(`/${ajaxurl}`, function(options) {
  // body为ajax的data部分
  console.log("options", options)
  return `mockjs返回数据:\n 我是${Mock.Random.name()}，你的请求是${options.body}`
})
Mock.mock(`/${fetchurl}`, function(options) {
  console.log('fetch')
  return `I am ${Mock.Random.name()}`
})
Mock.mock(`/${axiosurl}`, function(options) {
  console.log('mock收到的axios options:', options)
  return `I am ${Mock.Random.name()}`
})