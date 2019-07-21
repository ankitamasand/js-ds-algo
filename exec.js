import LinkedList from './linked-list'

let ll = new LinkedList()
ll.insertFirst(100)
ll.insertLast(200)
ll.insertAtIndex(300, 1)
ll.insertAtIndex(400, 2)
ll.getAtIndex(1)
ll.removeAt(0)
ll.getIndexOfNode(300)
let output = ll.printListData()

export default output
