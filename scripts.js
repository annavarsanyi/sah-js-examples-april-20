// Third part:

console.log('Script file is loaded');

$('h1').text('This is done by JavaScript!');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

function myLittleFunction() {
    $('main').append('<p>A p is appended in the main</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

// Single line comment

/*
Multiple
lines
of comments
*/

/*
let age;
undefined
age=34;
34
age-8
26
index_base.ugly.js?v=1588251121:4 Uncaught TypeError: Cannot read property 'replace' of undefined
    at init.<anonymous> (index_base.ugly.js?v=1588251121:4)
    at init.a.fn.quickEach (index_base.ugly.js?v=1588251121:3)
    at Object.success (index_base.ugly.js?v=1588251121:4)
    at f (jquery.js:974)
    at Object.fireWith [as resolveWith] (jquery.js:1084)
    at r (jquery.js:7803)
    at XMLHttpRequest.r (jquery.js:8518)
(anonymous) @ index_base.ugly.js?v=1588251121:4
a.fn.quickEach @ index_base.ugly.js?v=1588251121:3
success @ index_base.ugly.js?v=1588251121:4
f @ index_vendor.ugly.js?v=1588251121:1
fireWith @ index_vendor.ugly.js?v=1588251121:1
r @ jquery.js:5679
r @ jquery.js:5679
XMLHttpRequest.send (async)
send @ jquery.js:5679
ajax @ jquery.js:5679
checkPPInterval @ index_base.ugly.js?v=1588251121:4
age = 48 / 8
6
age+2
8
let NumberOfLegs = 4
undefined
NumberOfLegs * 2
8
NumberOfLegs = 6
6
let name = Anna
VM512:1 Uncaught ReferenceError: Anna is not defined
    at <anonymous>:1:12
(anonymous) @ VM512:1
let name = 'Anna'
undefined
name
"Anna"
let name = "Anna"
undefined
let OldEnoughToDrive = false
undefined
'Hello, ' + name
"Hello, Anna"
true && false
false
true && true
true
false && true
false
true || true
true
true || false
true
false || false
false
let color1 = "orange"
undefined
let color2 = "blue"
undefined
let colors = ["orange", "blue", "green"]
undefined
colors
(3) ["orange", "blue", "green"]
colors[1]
"blue"
let pickedColor = 1
undefined
colors[pickedColor]
"blue"
colors[3] = "lime"
"lime"
colors
(4) ["orange", "blue", "green", "lime"]
colors.push('purple')
5
colors
(5) ["orange", "blue", "green", "lime", "purple"]
let person = {
name: Anna;
}
VM1409:2 Uncaught SyntaxError: Unexpected token ';'
let person = {
name: Anna;
age: 32;
favoriteColor: Colors;
}
VM1497:2 Uncaught SyntaxError: Unexpected token ';'
let person = {
name: Anna,
age: 32,
favoriteColor: Colors,
}
VM1573:2 Uncaught ReferenceError: Anna is not defined
    at <anonymous>:2:7
(anonymous) @ VM1573:2
let person = {
name: Anna,
age: 32,
favoriteColor: colors
}
VM1583:2 Uncaught ReferenceError: Anna is not defined
    at <anonymous>:2:7
(anonymous) @ VM1583:2
let person = {
name: "Anna",
age: 32,
favoriteColor: colors
}
undefined
person
{name: "Anna", age: 32, favoriteColor: Array(5)} */