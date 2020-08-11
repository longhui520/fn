class Node{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show(){
        console.log(this.data)
    }
}

class BLS {
    constructor(){
        this.root = null
    }
    insert(data){
        var node = new Node(data,null,null)
        if(this.root === null){
            this.root = node
        }else{
            var current = this.root;
            var parent
            while(true){
                parent = current
                if(data<=current.data){
                    current = current.left
                    if(current === null){
                        parent.left = node
                        break;
                    }
                }else{
                    current = current.right
                    if(current === null){
                        parent.right = node
                        break;
                    }
                }
            }
        }
    }
    order(node){
        if(node !==null){
            this.order(node.left)
            node.show()
            this.order(node.right)
        }
    }
    preOrder(node){
        if(node !==null){
            node.show()
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    postOrder(node){
        if(node !==null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            node.show()
        } 
    }
    getMin(){
        var current = this.root
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }
    getMax(){
        var current = this.root
        while(current.right !==null){
            current = current.right
        }
        return current.data
    }
    find(data){
        var current = this.root
        while(current !==null){
            if(current.data === data){
                return current
            }
            if(data <current.data){
                current = current.left
            }else{
                current = current.right
            }
        }
    }
}

var bls = new BLS(1);
bls.insert(23)
bls.insert(45)
bls.insert(16)
bls.insert(37)
bls.insert(3)
bls.insert(99)
bls.insert(22)
bls.postOrder(bls.root)
console.log(bls.getMin())
console.log(bls.getMax())
console.log(bls.find(23))
console.log(JSON.stringify(bls.root))
