// 冒泡排序
// 比较两个元素，较小的数放前面，大数放后面，循环走

function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

var a = [2, 6, 5, 8, 1, 9, 7, 3, 4]
// console.log(bubbleSort(a))

// 选择排序
//  依次找到数组中的最大(小)数，放置于数组的开始或结束

function selectionSort (arr) {
  let len = arr.length
  let min
  for (let i = 0; i < len; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [[min], arr[i]]
  }
  return arr
}

// console.log(selectionSort(a))

// 快速排序
// 选取基数，然后左右分别放跟基数相比小和大的数列，然后递归的遍历另外两个数列，直到长度为1

function quickSort (arr) {
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
