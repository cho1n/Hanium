const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);

const person = {
  name : 'choi'
};

const newPerson = {
  ...person,
  age : 24
};

console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1)
}; 

console.log(filter(1,2,3));

[num1,num2] = numbers;
console.log(num1, num2);

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);