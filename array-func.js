// indexOf
// 查找数组中是否含有某个元素，如果没有返回 -1，如果有返回该元素的索引
// 如果数组中包含多个该元素，则只返回正序的第一个该元素的索引

const arr1 = ['apple', 'box', 'cap', 'dog', 'apple']
const appleIndex = arr1.indexOf('apple')
console.log(appleIndex)

// lastIndexOf
// 与indexOf相同类似，从字面意思可知，返回的是最后一个元素的索引
const appleLast = arr1.lastIndexOf('apple')
console.log(appleLast)

// join
// 将数组拆分为字符串，入参为分隔符
const arrStr = arr1.join(',')
console.log(arrStr)
const arrStr1 = arr1.join('|')
console.log(arrStr1)

// toString
// 实际上可认为是join(',')
const arrStr2 = arr1.toString()
console.log(arrStr2)

//
