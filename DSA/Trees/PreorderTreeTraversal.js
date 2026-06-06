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

function Preorder(root){
    if(root === null) return
    console.log(root.val)
    Preorder(root.left)
    Preorder(root.right)
}
Preorder(root)