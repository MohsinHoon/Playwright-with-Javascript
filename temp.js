class Animal {
  constructor(public name: string) {}
  speak() { return `${this.name} makes a noise`; }
}

class Dog extends Animal {
  constructor(name: string) { super(name); }          // call parent constructor
  speak() { return super.speak() + ' and barks'; }    // reuse + add behavior
}
