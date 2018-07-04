
class List {
	constructor() {
		this.head = null
	}
	add(data) {
		if (this.head)
    return this.head.add(data)
		return this.head = new Node(data)
	}
	get length() {
			return this.nodes.length
	}
	middle() {
		var index = Math.floor(this.length / 2)
		return this.node(index)
	}
	node(index) {
		return this.nodes[index]
	}
	get nodes() {
		return this.head ? this.head.list([]) : []
			return this.head.list(list)
		return list
	}

}

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
	add(data) {
		if (this.next)
			return this.next.add(data)
		return this.next = new Node(data)
	}
	list(nodes) {
		nodes.push(this)
		return this.next ? this.next.list(nodes) : nodes
}
}
var list = new List();
