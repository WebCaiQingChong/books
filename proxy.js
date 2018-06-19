const obj = new Proxy({}, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log(value)
    return Reflect.set(target, key, value, receiver)
  }
})

obj.count = 1
++obj.count
