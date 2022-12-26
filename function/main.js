function showData(a, b, c) 
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
showData('samuel',22,true); 
showData(22,'Samuel',true);
showData(false,22,'samuel');




