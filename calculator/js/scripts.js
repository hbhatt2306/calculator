
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter amother number:"));

alert(add(number1, number2));

var sub = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter amother number:"));

alert(sub(number1, number2));


var mul = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter amother number:"));

alert(mul(number1, number2));


var div = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter amother number:"));

alert(div(number1, number2))
;

var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter a another number:"));
var result = divide(number1, number2);
alert(result);


var BMI = function(weight, height){
return weight/(height*height);

}
var inputWeight = parseFloat(prompt("enter your weight:"));
var inputHeight = parseFloat(prompt("enter your height:"));

alert(BMI(inputWeight, inputHeight));

*var temperature = function(farenheit, celcius){
return (farenheit - 32) / 1.8;
}

var number1 = parseFloat(prompt("enter farenheit:"));

alert(temperature(number1));

var volume = function(gallons, liters){
return gallons * 3.78541;
}

var number1 = parseFloat(prompt("enter gallons:"));

alert(volume(number1));
