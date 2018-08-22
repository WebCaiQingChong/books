function Node(element) {
  this.element = element
  this.next = null
}
function LList () {
  this.head = new Node('head')   // 添加链表首部
  this.find = find               // 链表查询方法
  this.insert = insert           // 链表插入方法
  this.remove = remove           // 链表删除方法
  this.display = display         // 链表遍历方法
  this.getPrev = getPrev         // 链表取前方法
}
function getPrev(item) {
  let currNode = this.head
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next
  }
  return currNode
}
function find (item) {
  let currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

function insert (newElement, item) {
  const newNode = new Node(newElement)
  const index = this.find(item)
  newNode.next = index.next
  index.next = newNode
}

function remove (item) {
  const prev = this.getPrev(item)
  if (prev.next !== null) {
    prev.next = prev.next.next
  }
}

function display () {
  let currNode = this.head
  while (!(currNode.next === null)) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}


const CCList = new LList()
CCList.insert('one', 'head')
CCList.insert('two', 'one')
CCList.insert('three', 'two')
CCList.display()
console.log('---------')
CCList.remove('one')
CCList.display()