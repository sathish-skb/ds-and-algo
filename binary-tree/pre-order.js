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

const preOrder = (root) => {
   if ( root === null) return
   console.log(root.data)
   preOrder(root.left)
   preOrder(root.right)
}

const nodes = constructNodes()
preOrder(nodes)
