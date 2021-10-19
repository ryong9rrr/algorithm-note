function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

function PriorityQueue() {
  this.array = [];
}

PriorityQueue.prototype.enequeue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  if (!added) {
    this.array.push(element);
  }

  return this.array.length;
};

PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data;
};

PriorityQueue.prototype.size = function () {
  return this.array.length;
};

PriorityQueue.prototype.clear = function () {
  this.array = [];
};

PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((e) => e.data);
};

PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let pq = new PriorityQueue();

pq.enequeue("Alice", 1);
pq.enequeue("Bob", 2);
pq.enequeue("Tom", 1);
pq.enequeue("John", 3);

console.log(pq.getBuffer());
// [ 'Alice', 'Tom', 'Bob', 'John' ]

console.log(pq.dequeue());
// Element { data: 'Alice', priority: 1 }
console.log(pq.dequeue());
// Element { data: 'Tom', priority: 1 }

console.log(pq.getBuffer());
// [ 'Bob', 'John' ]
