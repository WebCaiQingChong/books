// 冒泡排序
// 比较两个元素，较小的数放前面，大数放后面，循环走
// 执行次数 N*(N-1)/2

// 从代码是来看，第一次执行n-1次，然后依次递减，知道最后一个不执行
// 即8+7+6+5+4+3+2+1

// 从排序原来上来分析，从第一个开始，没每两个比较换一次位置，第一次循环需要换8次，
// 然后逐层递减，得出8+7+6+5+4+3+2+1

function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

var a = [3, 8, 4, 6, 1, 7, 9, 2, 5]
// console.log(bubbleSort(a))

// 选择排序
//  依次找到数组中的最大(小)数，放置于数组的开始或结束
// 执行次数 N*(N-1)/2

// 与冒泡类似
function selectionSort(arr) {
  let len = arr.length
  let min
  for (let i = 0; i < len; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      console.count()
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

// console.log(selectionSort(a))

// 快速排序
// 选取基数，然后左右分别放跟基数相比小和大的数列，然后递归的遍历另外两个数列，直到长度为1
// 快排执行次数不确定，基数的选取以及原有数组的排列影响次数
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let midIndex = Math.floor(arr.length / 2)
  let mid = arr.splice(midIndex, 1)[0]
  let len = arr.length
  let left = []
  let right = []
  for (let i = 0; i < len; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([mid], quickSort(right))
}
console.log(quickSort(a))
