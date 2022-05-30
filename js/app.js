let cardHeader = document.querySelector('h2');
cardHeader.style.color = 'white';

let lists = document.querySelectorAll('li');

lists.forEach(list => {
    list.style.color = 'white';
});

// Question 2

let teamMembers = ['nutjob', 'ladel', 'drew', 'stanleyceejay', 'krisemeka'];
console.log(teamMembers[1]);

// Question 3,


let myObj = {
    firstName: "oladele",
    lastName: 'shodipe',
    bestMovie: 'Avengers',
    bestFood: 'rice',
    complexion: 'chocolate',
    birthMonth: 'january',
    state: 'ogun',
    groupName: 'apollo'
}

console.log(myObj.bestMovie);

// Question 4
let noun = "boy";
let verb = 'sits';
let adjective = 'big';

let sentence1 = noun + " " + verb;
let sentence2 = adjective + " " + noun;
let sentence3 = adjective + " " + noun + " " + verb;
let sentence4 = adjective + " " + noun + " " + verb +  " down." 
let sentence5 = "The " + adjective + " " + noun + " " + verb +  " down quietly." ;

console.log(sentence1 + "\n" + sentence2 +"\n" + sentence3 +"\n" + sentence4 +"\n" + sentence5);

//Question 5

function remainder(num1, num2) {
    return num1 % num2;
}

console.log(remainder(10, 8));

// Question 6 
function quadratic (a, b , c) {
    let x1 = (-b + Math.sqrt(b**2 - (4 * a * c)) )/ 2 * a;
    let x2 = (-b - Math.sqrt(b**2 - (4 * a * c)) )/ 2 * a;
    return ["x1 = " + x1, "x2 = " + x2];
}

console.log(quadratic(1, 5, 6));


// Question 7

const myNoun = "dog";
const myAdjective = 'big';
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = `The ${myAdjective} ${myNoun} ${myVerb} ${myAdverb}.`;
console.log(wordBlanks)

//Question 8

function areaOfCircle(radius) {
    const PI = 3.142
    return PI * radius * radius;
}

console.log("Area of Circle = " +areaOfCircle(9))

//Question 9


let principal = 8200, rate = 17.5, time = 2.5;
const simpleInterest = (principal * rate * time)/ 100;
console.log(simpleInterest);


// Question 10 
console.log(10 % 4);

// Question 11
function bmi (mass, height) {
    return mass / height ** 2;
}

const meritBmi1 = bmi(78, 1.69);
const nutjobBmi1 = bmi(92, 1.95);

meritHigherBMI = meritBmi1 > nutjobBmi1;
console.log(meritHigherBMI);

const meritBmi2 = bmi(85, 1.76);
const nutjobBmi2 = bmi(95, 1.88)
meritHigherBMI = meritBmi2 > nutjobBmi2;
console.log(meritHigherBMI);