// 浅拷贝
// 当把一个数组赋值给另外一个数组时，只是为被赋值的数组增加了一个新的引用，
// 当修改原数组时，另一个数组也会随之变化。
const a = [1, 2, 3]
const b = a
a[0] = 3
console.log(b)    // [3, 2, 3]

// 有时候我们可能需要一个深拷贝
// 深拷贝

const c = [1, 2, 3]
const copyDeep = (localArr) => {
  let targetArr = []
  const len = localArr.length
  for (let i = 0; i < len; i++) {
    targetArr[i] = localArr[i]
  }
  return targetArr
}
const d = copyDeep(c)
console.log(d)      // [1, 2, 3]
c[0] = 3
console.log(d)      // [1, 2, 3]

// 如果使用es6的扩展运算符呢？

const e = [1, 2, 3]
const f = [...e]
console.log(f)    // [1, 2, 3]
e[0] = 3
console.log(f)    // [1, 2, 3]      good!
