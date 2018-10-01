$(".answerKey").attr("style","display: none;") //DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
'Sonali Marlin'

//problem-1
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-1").innerHTML = addNumbers(3,5);

function addNumbers(num, num2) {
  return num + num2;
}

//problem-2
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-2").innerHTML = subtractNumbers(10,8);

function subtractNumbers(num, num2){
  return num - num2;
}
//problem-3
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-3").innerHTML = showResultsInBody(5);

function showResultsInBody(param) {
  console.log("The result of your calculation is " + param);
}

//problem-4
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-4").innerHTML = showResults(5);

function showResults(param) {
  return(param);
}

//problem-5
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-5").innerHTML = multiplyNumbers(5,10);

function multiplyNumbers(n, n1){
  return n * n1;
}

//problem-6
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-6").innerHTML = divideNumbers(20,4);

function divideNumbers(n, n1){
  return n / n1;
}

//problem-7
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-7").innerHTML = showResults(addNumbers(3,5));

//problem-8
// Using ONLY function calls solve this equation. (5+6)+(7+3)
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-8").innerHTML = showResults(addNumbers(addNumbers(5,6),addNumbers(7,3)));

//problem-9
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-9").innerHTML = showResults(subtractNumbers(multiplyNumbers(15,4),divideNumbers(10,2)));


//challenge-1
// Create a new addition function called addTheWorld. It should be able to take ANY number of parameters and display the sum of them all. Call addTheWorld(5,2,8). Call addTheWorld(10,5,3,2). Call addTheWorld(25). (Hint:Look up the arguments keyword)
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("challenge-1.1").innerHTML = addTheWorld(5,2,8);

function addTheWorld (...args) {
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
  return sum;
}

document.getElementById("challenge-1.2").innerHTML = addTheWorld(10,5,3,2)
document.getElementById("challenge-1.3").innerHTML = addTheWorld(25)
