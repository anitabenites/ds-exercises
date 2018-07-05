
class List {   // List is an interface to the linked list, it is how we interact with our list object.
	constructor() { // we are using a constructor because this is a template class which will be instantiated.
		this.head = null // it means our linked list will have a head node, but it is not yet defined, so we are just
    // reserving a property for it, the property "head",i.e: list.head will always return the first node in the list.
	}

  // each node will have data and a next property which could have a reference to the next node.
	add(data) {
		if (this.head) // means if the list already has a head node, we need to pass the add method call to that node, or if there is NO head, we create a new node and make it the head.
    return this.head.add(data)
		return this.head = new Node(data)
	}
	get length() { // I made length to be a getter so it appears as a property of the list, as with all lists, because
    // once we instantiate the class we want var list to obtain the poperty such as length, because know the length will helps us
    // to know how many nodes will allow us to determine the middle node.
			return this.nodes.length
	}
	middle() { // this method return the middle node
		var index = Math.floor(this.length / 2) // length comes from nodes and nodes comes from looping through them.
    // then we just half the length to know which one is middle.
		return this.node(index)
	}
	node(index) { // it allows us to select any node from the looped nodes list
		return this.nodes[index]
	}
	get nodes() { // most important part of the list class; i have made it a getter so it does not need invoking.
    // this is a pivotal getter as it loops though all the nodes using recursion
		return this.head ? this.head.list([]) : [] // this empty list wants to know all the nodes that exists.
    // we need a temporary array, so for each node that exists in the change, it can add itself to the array.
		// also can be replaced by:
    // if (this.head) // we are saying here: if there is a head node,
      // return this.head.list(list) // loop through all the nodes, starting from the first, OR
    // return list // just return the empty array
	}

}

class Node { // the Node class is required to contain the actual data and any reference to the "next" node
	constructor(data) { // we are passing the argument data because any node instance is required to have data.
		this.data = data
		this.next = null
	}
	add(data) {
    // if there is a NEXT node, it passed the add(data) to the next node and this will continue until we find the last node and when it happens a new Node is created, with data and popped on the end of the linked list.
		if (this.next)
			return this.next.add(data)
		return this.next = new Node(data) // if there is NO next, make a new node and make it the next of the current node. // i.e pop it on the end of the linked list.
    // list --> node1--> node2--->node3
	}
  // list is a method call on the node instance!
  //the list instance has a getter called nodes, which needs to return a list of nodes in the linked list.
  // to achieve this it creates an empty array.
	list(nodes) { // nodes is the empty array that is created from the list.nodes getter.
    // each node receives this method call, the class list will have all the previous nodes.
    // they will have all added themselves to the list via recursion
		nodes.push(this) // we are adding ourself to the nodes arrays
    // when the list method is called on each node, it needs to add itself(i.e this) to the nodes array as created in line 30, then once it reaches the last node,that list is returned to the list instance.
		return this.next ? this.next.list(nodes) : nodes // if there is another node, i.e: this.next, pass the empty list created on line 30 to that next node or return the empty list.
}
}
var list = new List(); // the list itself needs methods and properties which allow us to get to all the nodes.
