class person {
    constructor() {
      this.gender = 'male';
    }
    
    printGender() {
      console.log(this.gender);
    }
  }
  
  class human extends person {
    constructor() {
      super();
      this.name = 'choi';
    }
    printMyName() {
      console.log(this.name);
    }
  }
  
  const Person = new human();
  Person.printMyName();
  Person.printGender();
  