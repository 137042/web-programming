/*
function myFunction() {
    var x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[1].innerHTML;
    for (var i in [...x]) {
        x[i].style.color = "red";
    }
}

let hobby = "game"
console.log(hobby)
hobby = "programming"
console.log(hobby)

var age = 100;
if (age > 12){
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
}
console.log(`in outside ${dogYears} `)


function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log("Hello, World!");
    };
}

console.log(Person.prototype);
console.log(typeof Person.prototype);

function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log("Hello, World!");
    };
}

const joon = new Person();
const jisoo = new Person();
Person.prototype.age = 20;

console.log(joon.age);
console.log(joon); // joon객체에는 age를 정의한 일이 없음
*/

"use strict";
var now = new Date();
var after = new Date("May 5, 2022");

var interval = after.getTime() - now.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

alert("어린이날까지: " + interval + "일");
