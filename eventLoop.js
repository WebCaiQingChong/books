// setTimeout(() => {
//   console.log(3)
// }, 0)

// process.nextTick(function () {
//   console.log(1)
//   process.nextTick(function () {
//     console.log(2)
//   })
// })

// setImmediate(function () {
//   console.log(4)
// })

// 
// console.log(1)
// setTimeout(() => {
//   console.log(2)
// })
// Promise.resolve().then(() => {
//   console.log(3)
// }).then(() => {
//   console.log(4)
// })

// console.log(5)

console.log(1)
// 1, 7, 8, 2, 4, 5, 9 ,11, 12   browser
// 1, 7 ,8, 2, 4, 9, 11, 5, 12   node
// 两者之间的event loop 应该存在差异
setTimeout(() => {
  console.log(2)
  new Promise(resolve => {
    console.log(4)
    resolve()
  }).then(() => {
    console.log(5)
  })
})

new Promise(resolve => {
  console.log(7)
  resolve()
}).then(() => {
  console.log(8)
})

setTimeout(() => {
  console.log(9)
  new Promise(resolve => {
    console.log(11)
    resolve()
  }).then(() => {
    console.log(12)
  })
})
