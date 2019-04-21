// Recursive javascript JS solution, 92.60% of JavaScript online submissions 

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    if(root==null)
        return [];
    
    var arr=[];
    preOrder(root);
    
    function preOrder(root)
    {
         if(!root.children)
        {
            return arr;
        }
        arr.push(root.val);
        for(let i = 0; i < root.children.length; i++)
        {
              preOrder(root.children[i]);
        }
    }
    return arr;
};