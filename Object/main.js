// challenge 1

let myObj = {
  name : 'Elzero',
  age : 38,
  country : 'Egypt',
  fullDetails : function() {
    return `My Name Is ${myObj.name}, My Age Is ${myObj.age}, I Live in ${myObj.country}`;
  }
};


console.log(myObj.name); // Elzero
console.log(myObj.age); // 38
console.log(myObj.country); // Egypt
console.log(myObj.fullDetails());



let obj1 = {
  name : 'method 1',
};

console.log(`${obj1.name}`);

let obj2 = new Object({
  name : 'method 2'
});

let obj_2 = new Object(obj1);

console.log(obj2.name);
console.log(obj_2.name);


let obj3 = Object.create({
  'name' : 'method 3'
});
console.log(obj3.name);





let obj4 = Object.assign(obj1) ;
console.log(obj4.name);









// challenge 4

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({a},threeNums,twoNums);
console.log(finalObject.a);
console.log(finalObject.b);
console.log(finalObject.c);
console.log(finalObject.d);
console.log(finalObject.e);
console.log(finalObject.f);

