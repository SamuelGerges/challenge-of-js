function getElement(){
  console.log(document.getElementById("elzero"));
  console.log(document.getElementsByTagName("div")[0]);
  console.log(document.getElementsByClassName("element")[0]);
  console.log(document.getElementsByName("js")[0]);
  console.log(document.querySelector("div"));
  console.log(document.querySelectorAll("div")[0]);
  console.log(document.querySelector("#elzero"));
  console.log(document.querySelectorAll("#elzero")[0]);
  console.log(document.querySelector(".element"));
  console.log(document.querySelectorAll(".element")[0]);
  console.log(document.querySelector("[name = 'js']"));
  console.log(document.querySelectorAll("[name = 'js']")[0]);
  console.log(document.body.children[0]);
  console.log(document.body.firstElementChild);
  console.log(document.body.childNodes[1]);
}


let imgUpdate = document.querySelectorAll('img')
for (let i =0 ;i<10;i++){
let element = document.querySelectorAll('img')
imgUpdate[i].src ="https://www.logodesign.net/logo-design-mascot/0/NTc0NQ%253D%253D/SFVTS1k%253D/"
imgUpdate[i].alt = "Elzero Logo";
}

// console.log(imgUpdate[0]);


// challenge 4

let dolarInput = document.querySelector('[name=dollar]');
let myDiv = document.querySelector('.result');

dolarInput.oninput = function(){
  myDiv.innerHTML = `${dolarInput.value} USD Dollar = ${(dolarInput.value * 15.6).toFixed(2)} Egyptian Pound`;
}


