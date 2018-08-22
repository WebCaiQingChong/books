function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = function () {
    return this.data
  }
}

function BST() {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
}

function insert(data) {
  const n = new Node(data, null, null)
  if (this.root === null) {
    this.root = n
  } else {
    let current = this.root
    let parent
    while (true) {
      parent = current
      // 左节点
      if (data < current.data) {
        current = current.left
        if (current === null) {
          parent.left = current
          break
        }
      } else {
        // 右节点
        current = current.right
        if (current === null) {
          parent.right = current
          break
        }
      }
    }
  }
}

function inOrder() {

}