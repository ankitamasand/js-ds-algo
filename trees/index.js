import Node from './node'

class BST {

    constructor () {
        this.root = null
        this.count = 0
    }

    size () {
        return this.size
    }

    insert (data) {
        let newNode = new Node(data)
        this.count += 1

        if (!this.root) {
            this.root = newNode
        }

        /* searchTree is a recursive function */
        const searchTree = node => {
            if (data < node.data) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            } else if (data > node.data) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }
    /* min will be the left most node in the tree */
    findMin () {
        let current = this.root
        while (current.left) {
            current = current.left
        }

        console.log('Min node is', current.data)
        return current
    }

    /* max will be the right most node in the tree */
    findMax () {
        let current = this.root
        while(current.right) {
            current = current.right
        }

        console.log('Max node is', current.data)
        return current
    }

    contains (value) {
        let current = this.root

        while (current) {
            if (value === current.data) {
                return true
            }

            if (value > current.data) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return false
    }

    /* Depth-first search */

    /* In-order traversal - left, root, right */
    dfsInorder () {
        let result = []
        let current = this.root

        const traverse = (node) => {
            if (node.left) {
                traverse(node.left)
            }

            result.push(node.data)

            if (node.right) {
                traverse(node.right)
            }
        }

        traverse(this.root)
        console.log('Inorder traversal', result)
    }

    /* Preorder traversal - root, left, right */
    dfsPreorder () {
        let result = []
        let current = this.root

        const traverse = (node) => {
            result.push(node.data)
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }

        traverse(this.root)
        console.log('Preorder traversal', result)
    }

    /* Postorder traversal - left, right, root */
    dfsPostorder () {
        let result = []
        let current = this.root

        const traverse = (node) => {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            result.push(node.data)
        }

        traverse(this.root)
        console.log('Postorder traversal', result)
    }

    /* branch by branch traversal */
    bfs () {
        let result = []
        let queue = []

        queue.push(this.root)

        while (queue.length) {
            let currentNode = queue.shift()

            result.push(currentNode.data)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        console.log('Breadth first traversal', result)
    }
}

export default BST
