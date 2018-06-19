class Promise {
  constructor (executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = []
    this.onRejectedCallbacks = []
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'resolved'
        this.value = value
        this.onResolveCallbacks.forEach(fn => fn())
      }
    }
    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    // 需要判断一下executor 是否是一个function
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  then (onFufilled, onRejected) {
    let promise2
    promise2 = new Promise((resolve, reject) => {
      if (this.status === 'resolved') {
        onFufilled(this.value)
      }
      if (this.status === 'rejected') {
        onRejected(this.reason)
      }
      if (this.status === 'pending') {
        this.onResolveCallbacks.push(() => {
          onFufilled(this.value)
        })
        this.onResolveCallbacks.push(() => {
          onRejected(this.reason)
        })
      }
    })
    return promise2
  }
}

module.exports = Promise
