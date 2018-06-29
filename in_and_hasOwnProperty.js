// in 和 hasOwnProperty 的区别演示 for in
const a = {
  x: 1,
  y: 2,
  z: 3
}

function ExtendsA () {
  this.color = 'red'
}

ExtendsA.prototype = a

const b = new ExtendsA()
console.log(b)   // ->  {color: 'red'}

for (let index in b) {
  console.log(index)
  // color
  // x
  // y
  // z
  if (b.hasOwnProperty(index)) {
    console.log(index)
    // color
  }
}

console.log('toString' in b)  // -> true

// in 操作符 相当于来检测某个属性是否在该对象上，并且会检查其原型上的对象，一直查询到原型链的顶端，如果存在则返回
// 所以 toString in b 返回true,因为该属性继承自Object。

// for in 循环遍历其所有可枚举属性，包括上游原型对象，b 继承于 a，并且a的x,y,z属性是定义在a的原型上且这些属性都是可枚举的
// 所以通过for in 循环可打印出a的属性

// hasOwnProperty 则检查属性是否在自身，即原型链上的对象的属性不属于其本身，也不包括其从父类上继承的属性
// 所以 通过b.hasOwnProperty(index)的判断的只有color属性
