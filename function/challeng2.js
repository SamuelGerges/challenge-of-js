// challeng 1 



function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) { 
    let Fname = zName.slice(0,zName.indexOf(" "));
    let Lname = zName.slice(zName.indexOf(" "),zName.length);
    return `${Fname} ${Lname[1].toUpperCase()}.`
  }
  function ageWithMessage(zAge) {
    let message ="";
    let age = zAge.slice(0, zAge.indexOf(" "))
    return  `Your Age Is ${age}`;

  }
  function countryTwoLetters(zCountry) {
    let country = zCountry.slice(0,2).toUpperCase()
    return `${country}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return (`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In  ${countryTwoLetters(zCountry)}` )
  }
  return fullDetails(); // Do Not Edit This
}
console.log(getDetails('Samuel gerges','22 is my age','Egypt')); 






function itsMe() {
  return `Iam A Normal Function`;
}
console.log(itsMe());

let itsMeA = () => `Iam A Normal Function`;


console.log(itsMeA());



function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org




let urlCreateA = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreateA("https", "elzero", "org")); // https://www.elzero.org









function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble





let checkerA = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checkerA("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerA("Ahmed")("Not Available")()); // Iam Not Avaialble




function specialMix(...data) {
  let counter = 0;
  let string_count = 0;
  for(let i = 0; i < data.length; i++){
    if (parseInt(data[i])){
      counter += parseInt(data[i]);
      
      }
    else{
    string_count++;
    }
  }
  if( counter == 0 && string_count == data.length){
    counter = "All Is Strings";
  }
  return counter;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings