const Promise = require('./promise')

const promise = new Promise((resolve, reject) => {
  throw new Error('error')
})

promise.then(data => {
  console.log(data)
}, err => {
  console.log(err)
})
