

var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var BST = function() {
  this.root = null;

}

BST.prototype.add = function(val, currNode) {
  if (this.root === null) {
    this.root = new Node(val);

    return;
  }

  if (currNode === undefined) {
    currNode = this.root;
  }

  if (val <= currNode.val) {
    if (currNode.left) {
      this.add(val, currNode.left);
    }
    else {
      currNode.left = new Node(val);
    }
  }
  else {
    if (currNode.right) {
      this.add(val, currNode.right);
    }
    else {
      currNode.right = new Node(val);
    }
  }
}

BST.prototype.depthFirstTraversal = function(iterator, order, currNode) {
  if (this.root === null) {
    return;
  }
  if (currNode === undefined) {
    currNode = this.root;
  }

  if (order === 'pre-order')    iterator(currNode.val);
  if (currNode.left) {
    
    this.depthFirstTraversal(iterator, order, currNode.left);
  }
  if (order === 'in-order')     iterator(currNode.val);
  if (currNode.right) {
    this.depthFirstTraversal(iterator, order, currNode.right);
  }
  if (order === 'post-order')   iterator(currNode.val);
}

BST.prototype.breadthFirstTraversal = function(iterator) {
  var queue = [];

  if (this.root === null)    return;

  queue.push(this.root);
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

BST.prototype.getMax_1 = function(currNode) {
  if (this.root === null) return;
  if (currNode === undefined)   currNode = this.root;

  if (currNode.right) {
    return this.getMax_1(currNode.right);
  }
  return currNode;
}

BST.prototype.getMax_2 = function(currNode) {
  if (this.root === null) return;
  if (currNode === undefined)   currNode = this.root;

  if (currNode.right) {
        return this.getMax_2(currNode.right);
  }
  else {
    return currNode;
  }
}

BST.prototype.getMax_3 = function(currNode) {
  if (this.root === null) return;
  if (currNode === undefined)   currNode = this.root;

  if (currNode.right) {
        return currNode.right = this.getMax_3(currNode.right);
  }
  else {
    return currNode;
  }
}

BST.prototype.getMin = function(currNode) {
  if (this.root === null)   return;
  if (currNode === undefined)   currNode = this.root;

  if (currNode.left) {
    return this.getMin(currNode.left);
  }
  return currNode;
}

BST.prototype.contains_1 = function(val, currNode) {
  if (this.root === null)   return false;
  if (currNode === undefined)   currNode = this.root;

  if (val < currNode.val) {
    if (currNode.left) {
      return this.contains_1(val, currNode.left);
    }
  }
  else if (val > currNode.val) {
    if (currNode.right) {
      return this.contains_1(val, currNode.right);
    }
  }
  else if (val === currNode.val) {
    return true;
  }
 return false;
}

BST.prototype.contains_2 = function(val, currNode) {
  if (this.root === null)   return false;
  if (currNode === undefined)   currNode = this.root;

  if (val < currNode.val) {
    return currNode.left ? this.contains_2(val, currNode.left) : false;
  }
  else if (val > currNode.val) {
    return currNode.right ? this.contains_2(val, currNode.right) : false;
  }
  else if (val === currNode.val) {
    return true;
  }
}


BST.prototype.remove = function(val, currNode) {
  if (this.root === null)   return;
  if (currNode === undefined)   currNode = this.root;

  if (val < currNode.val) {
    currNode.left = this.remove(val, currNode.left);
  }
  else if (val > currNode.val) {
    currNode.right = this.remove(val, currNode.right);
  }
  else {
    if (currNode.left && currNode.right) {
      var successor = this.getMin(currNode.right);
      currNode.val = successor.val;
      currNode.right = this.remove(successor.val, currNode.right);
    }
    else {
      currNode = currNode.left || currNode.right;
    }
  }

  return currNode;
}


