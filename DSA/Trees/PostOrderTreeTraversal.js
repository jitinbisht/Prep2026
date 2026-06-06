class TreeNode {
    constructor(val){
        this.val = val,
        this.left = null,
        this.right = null
    }
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

function PostOrder(root){
    if (root === null) return
    PostOrder(root.left)
    PostOrder(root.right)
    console.log(root.val)
}
PostOrder(root)