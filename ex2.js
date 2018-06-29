class Stack {
  constructor(maxlength) {
    this.data = []
    this.maxlength = maxlength
  }
  getSize() {
    return this.data.length
  }

  isEmpty() {
    return this.getSize() ? false : true
  }

  isFull() {
    var { data, maxlength } = this // here we are extracting the properties from the object that in this case is "this";
    var { length } = data // here we are extracting the length property from data from our array.
    return length == maxlength
  }

  top() {
    // here we will return the last item in the stack without removing it...
    var { data } = this
    // we can extract any property using var { property } = object, i.e. var { length } = data
    // its a property of data, which is itself a property of this, the instance
    var { length } = data // find the length...
    return data[length - 1] // the last item will always be length - 1
  }

  push(data) {
    // we need to check if the stack is full...
    // and if the stack is already at max length, throw an error...
    if (this.isFull())
      throw new Error('the stack is full');
    return this.data.push(data);
  }

  pop() {
    // we need to test if the stack has length:
    if (this.isEmpty())
      throw new Error('stack is empty!')
      // here remove the last item from the array
    return this.data.pop();
    }
  }

var stack = new Stack(10)
console.log(stack)
console.log(stack.isEmpty())
stack.push('test1');
stack.push('test2');
stack.push('test3');
var job = stack.pop() //  result is here 3
console.log(stack.getSize())
console.log(stack.isFull()) // result is here false
console.log(stack.top())
