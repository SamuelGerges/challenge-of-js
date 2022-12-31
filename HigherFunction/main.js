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


// let numbers = [2, 12, 11, 5, 10, 1, 99];

// let sum = numbers.reduce(function(acc , curr){
//   if(curr % 2 === 0){
//     console.log('mul',acc*curr);
//     return acc * curr;

//   }else{
//     console.log('sum',acc+curr);
//     return acc + curr;
//   }
// },1)

// console.log(sum);

function find_max(...nums) {
  
   let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  //  console.log(max_num);
   for (let num of nums) {
    // console.log(num)
    if (num > max_num) {
    // (Fill in the missing line here)
     max_num =num
  

    }
   }
   return max_num;
}



console.log(find_max(1,2,3,4));