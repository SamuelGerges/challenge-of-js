// challenge 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];



let newMix = mix.map(function(ele){
  return isNaN(parseInt(ele)) ? ele : '';
}).reduce(function(acc , curr){
  return acc+curr;
});

// console.log(newMix);


// challenge 2

let myString = "EElllzzzzzzzeroo";

let newString = myString.split("").filter(function(ele,index,arr){
  return arr.indexOf(ele)=== index ;
}).reduce(function(acc , curr){
    return acc + curr;
});

// console.log(newString);


// challenge 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray.reduce(function(acc , curr){
  return acc.concat(curr);
},[]).join("");

// console.log(newArr);



let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let num = numsAndStrings.filter(function(ele){
  return !isNaN(parseInt(ele)) ;
}).map(function(ele){
  return -ele;
});

// console.log(num);


// challenge 5


let numbers = [2, 12, 11, 5, 10, 1, 99];

let sum = numbers.reduce(function(acc , curr){
  if(curr % 2 === 0){
    console.log('mul',acc*curr);
    return acc * curr;

  }else{
    console.log('sum',acc+curr);
    return acc + curr;
  }
},1)

console.log(sum);

