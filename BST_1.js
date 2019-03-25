

var BST = function(val) {
  this.val = val;

  this.left = null;
  this.right = null;
}

BST.prototype.add = function(val) {

  if (this.val === undefined) {
    this.val = val;
    return;
  }

  // If tree exists
  if (val <= this.val) {
    if (this.left === null) {
      this.left = new BST(val);
    }
    else {
      this.left.add(val);
    }
  }
  else {
    if (this.right === null) {
      this.right = new BST(val);
    }
    else {
      this.right.add(val);
    }
  }

}

BST.prototype.depthFirstTraversal = function(iterator, order) {
  if (this.val === undefined) {
    console.log("The tree only has 1 empty tree obj:\t", this);
    return;
  }

  if (order === 'pre-order')    iterator(this.val);
  if (this.left) {
    this.left.depthFirstTraversal(iterator, order);
  }
  if (order === 'in-order')     iterator(this.val);
  if (this.right) {
    this.right.depthFirstTraversal(iterator, order);
  }
  if (order === 'post-order')   iterator(this.val);
}

BST.prototype.breadthFirstTraversal = function(iterator) {
  var queue = [];

  if (this.val === undefined) {
    console.log("The tree only has 1 empty tree obj:\t", this);
    return;
  }

  queue.push(this);

  while (queue.length) {
    var currNode = queue.shift();
    iterator(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }
  }
}

BST.prototype.getMax = function() {
  if (this.val === undefined)   return;

  if (this.right) {
    return this.right.getMax();
  }
  else     return this;
}

BST.prototype.getMin = function() {
  if (this.val === undefined)   return;

  if (this.left) {
    return this.left.getMin();
  }
  else     return this;
}

BST.prototype.contains = function(val) {
  if (this.val === undefined)   return false;

  if (val === this.val)
    return this;  // Return the node found
  if (val < this.val) {
    if (this.left) {
      return this.left.contains(val);
    }
    return false;
  }
  if (val > this.val) {
    if (this.right) {
      return this.right.contains(val);
    }
    return false;
  }
}

BST.prototype.contains_2 = function(val) {
  if (this.val === undefined)   return false;

  if (val === this.val)
    return this;  // Return the node found
  if (val < this.val && this.left) {
    return this.left.contains(val);
  }
  if (val > this.val && this.right) {
      return this.right.contains(val);
  }
  return false;
}

BST.prototype.remove = function(val, currNode) {
  if (this.val === undefined)   return;

  if (currNode === undefined)   currNode = this;

  if (val < currNode.val) {
    console.log("<:", currNode.val);
    currNode.left = this.remove(val, currNode.left);
  }
  else if (val > currNode.val) {
    console.log(">:", currNode.val);
    currNode.right = this.remove(val, currNode.right);
  }
  else if (val === currNode.val) {
    if (currNode.left && currNode.right) {
      var successor = currNode.right.getMin();
      console.log("2 childs - successor:", successor.val);

      currNode.val = successor.val;
      currNode.right = this.remove(successor.val, currNode.right);
    }
    else {
      console.log("2 childs - else");
      currNode = currNode.left || currNode.right;
      console.log("currNode:", currNode)
    }
  }
  return currNode;
}




