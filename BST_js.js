class Node{
    constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
    };
 };
 class BinarySearchTree{
    constructor(){
       this.root = null;
    }
    insert(data){
       var newNode = new Node(data);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       };
    };
    insertNode(node, newNode){
       if(newNode.data < node.data){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          };
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          };
       };
    };

    search(node, data)
    {
       
        if(node === null)
            return null;
     
        else if(data < node.data)
            return this.search(node.left, data);
     
        else if(data > node.data)
            return this.search(node.right, data);
     
       
        else
            return true;
    }

    getRootNode()
    {
        return this.root;
    }
    preorder(node)
    {
        if(node !== null)
        {
         console.log(node.data);
         this.preorder(node.left);
         this.preorder(node.right);
        }
    }
 };
 const BST = new BinarySearchTree();
 BST.insert(1);
 BST.insert(3);
 BST.insert(2);

 const val=BST.search(BST,3);
 console.log(val);
 var root = BST.getRootNode();
 BST.preorder(root);