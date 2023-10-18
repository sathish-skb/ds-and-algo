class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


const constructNodes = () => {
    //         A
    //       /   \
    //     B      C
    //    / \
    //  D    E

    const root = new Node("A")
    root.left = new Node("B")
    root.right = new Node("C")
    root.left.left = new Node("D")
    root.left.right = new Node("E")

    return root
} 

const postOrder = (root) => {
   if ( root === null) return
   postOrder(root.left)
   postOrder(root.right)
   console.log(root.data)
}

const nodes = constructNodes()
postOrder(nodes)
