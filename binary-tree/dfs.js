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

const depthFirstSearch = (root) => {
    const stack = [ root ]
    while ( stack.length > 0 ) {
        const currentNode = stack.pop()
        if(currentNode.right) stack.push(currentNode.right)
        if(currentNode.left) stack.push(currentNode.left)
        console.log(currentNode.data)
    }
}

const nodes = constructNodes()
depthFirstSearch(nodes)
