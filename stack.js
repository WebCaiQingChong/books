const stack = {
  data: [],
  top: 0,
  push: function (item) {
    this.data[this.top ++] = item
  },
  pop: function () {
    return this.data[--this.top]
  },
  peek: function () {
    return this.data[this.top -1]
  }
}

stack.push('app')
console.log(stack.data)
// const pop = stack.pop()
// console.log(pop)
const peek = stack.peek()
console.log(peek)