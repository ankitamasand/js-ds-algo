const isSameTree = (p, q) => {

    let isSame = true

    const preorder = (p, q) => {

        if (!p || !q || !isSame) return isSame

        if (p.data !== q.data) {
            isSame = false
            return isSame
        }

        p.left !== null && preorder(p.left, q.left)
        p.right !== null && preorder(p.right, q.right)
    }


    return preorder(p, q) && isSame
}

export default isSameTree
