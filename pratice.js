class person {
      gender = 'male';
    
    printGender = () => {
      console.log(this.gender);
    }
  }
  
  class human extends person {
      name = 'choi';
      gender = 'female';

    printMyName = () => {
      console.log(this.name);
    }
  }
  
  const Person = new human();
  Person.printMyName();
  Person.printGender();
  