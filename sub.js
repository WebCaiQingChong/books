var shareObj = {
  list: [],
  listen: function (fn) {
    this.list.push(fn)
  },
  trigger: function () {
    this.list.forEach(fn => {
      fn.apply(this, arguments)
    })
  }
}

shareObj.listen((color, size) => {
  console.log(`color is ${color}`)
  console.log(`size is ${size}`)
})

shareObj.listen((color, size) => {
  console.log(`again color is ${color}`)
  console.log(`again size is ${size}`)
})

shareObj.trigger('黑色', 42)
shareObj.trigger('白色', 38)
