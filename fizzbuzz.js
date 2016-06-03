//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
  for (var i= 0; i<30; i++)
  if(i%3===0 && !(i%5===0)){
    consol.log("fizz");
  }
  if else(i%5===0  && !(i%3===0)){
    consol.log("buzz");
  }
  if else(i%3====0 && i%5===0){  
    consol.log("fizzbuzz");
  }
  else{
    consol.log(i);
  }
  
};

module.exports = { fizzbuzz: fizzbuzz };
