/*
function getGreeting(){
    return "Hello world!";
}
//함수를 저장한 변수에 "()"를 붙이면 함수 호출을 의미
console.log(getGreeting()); 
console.log(getGreeting);


// Without rest parameter
function fun(a, b){
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3              

// es6 rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15      

// rest with function and other arguments
function fun(a,b,...c){
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');


function outFunc(name) { 
    var outVar = 'my name is ' 
    function innerFunc() { return outVar + name } 
    return innerFunc 
} 
var result = outFunc('bono') 
console.log('result: ' + result()) 

var out = 'out value'           //전역스코프
function outFunc() {            //outFunc스코프
    var inner = 'in value' 
    function inFunc(inParam) {  //inFunc 스코프
        console.log('out: ' + out) 
        console.log('inner: ' + inner) 
        console.log('inParam: ' + inParam)
    } 
    return inFunc 
} 
var param = 'this is param' 
var outResult = outFunc() 
outResult(param) 
// out: out value 
// inner: in value 
// inParam: this is param 


const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i=0; i<items.length; i++) {
    copy.push(items[i]);
}

// 이후
items.forEach(function(item){
    copy.push(item);
});

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
  
// 인덱스 2는 배열의 그 위치에 항목이 없기에
// 건너뜀을 주의하세요.
[2, 5, , 9].forEach(logArrayElements);

let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
*/

const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]