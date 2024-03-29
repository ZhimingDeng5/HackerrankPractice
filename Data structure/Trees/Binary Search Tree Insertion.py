class Node:
    def __init__(self, info):
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

def preOrder(root):
    if root == None:
        return
    print (root.info, end=" ")
    preOrder(root.left)
    preOrder(root.right)
    
class BinarySearchTree:
    def __init__(self): 
        self.root = None

#Node is defined as
#self.left (the left child of the node)
#self.right (the right child of the node)
#self.info (the value of the node)

    def insert(self, val):
        if self.root is None:
            self.root=Node(val)
            return
        current=self.root
        while 1:
            if val>current.info:
                if current.right is not None:
                    current=current.right
                else:
                    current.right=Node(val)
                    break
            elif val<current.info:
                if current.left is not None:
                    current=current.left
                else:
                    current.left=Node(val)
                    break;
            else:
                    break; 
  
        #Enter you code here.

tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.insert(arr[i])

preOrder(tree.root)