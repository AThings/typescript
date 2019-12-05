interface Person {
  firstName: string;
  lastName: string;
}
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
function greeter (person:Person) {
    return "Hello, " + person.firstName + " " + person.lastName ;
}

let user = new Student("JiaLue", "M.", "Feng");
document.body.innerHTML = greeter(user);