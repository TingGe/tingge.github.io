var sum = (a, b =6) => (a + b);

var square = (b) => {
  return b * b;
}

var variable = 8;

class MyClass {
  constructor(person){
    this.name = person.name;
    this.mail = person.mail
  }
  getName(){
    return this.name;
  }
}

export {
  sum,
  square,
  variable,
  MyClass
}
