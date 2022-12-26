
// challenge 1

function checkstatus(a, b, c) 
{
  let name , age , status;
  
    if(typeof a === "string")
    {
       name = a;
      if(typeof b === "number")
      {
        age = b;
        status = c;
      }
      else
      {
        age = c;
        status = b;
      }
    }
    else if(typeof a === "number")
    {
       age = a;
       if (typeof b === "string")
       {
         name = b;
         status = c;
       }
      else
      {
        status = b;
         name = c;
      }
         
    }
      
    else 
    {
      status = a;
      if (typeof b === "string")
      {
        name = b;
        age = c;
      }
      else
      {
        name = c;
        age = b;
      }
    }
    if (status === true){
      console.log(`"Hello ${name}, Your Age Is ${age}, You Are Available For Hire"`);
      
    }
    else{
      console.log(`"Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire"`);
    }
}
checkstatus('samuel',22,true); 
checkstatus(22,'Samuel',true);
checkstatus(false,22,'samuel');




// challenge 2

function calculate(firstNum, secondNum, operation = "add") {
    if(secondNum === undefined){
      console.log(`Please Add A Second Number`);
    }
    else{
      if(operation === "subtract"){
        console.log(firstNum - secondNum);
      }
      else if(operation === "multiply"){
        console.log(firstNum * secondNum);
  
      }
      else{
        console.log(firstNum + secondNum);
  
    }
  }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
  





// challenge 3

function sayHello(name, gender) {
  if(gender === 'Male' || gender === 'male'){
    console.log(`Hello Mr ${name}`)
  }else if(gender === 'Female' || gender === 'female'){
    console.log(`Hello Miss ${name}`)
  }else{
    console.log(`Hello ${name}`)
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
