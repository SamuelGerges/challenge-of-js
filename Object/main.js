// challenge 1

let myObj = {
  name : 'Elzero',
  age : 38,
  country : 'Egypt',
  fullDetails : function() {
    return `My Name Is ${myObj.name}, My Age Is ${myObj.age}, I Live in ${myObj.country}`;
  }
}


console.log(myObj.name); // Elzero
console.log(myObj.age); // 38
console.log(myObj.country); // Egypt
console.log(myObj.fullDetails());