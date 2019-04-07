/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when you have a bucket of  paint brushes and you tell the computer to look at all the brushes
* 2. Implicit binding is for object literals and pointing at the object.
* 3. New binding is for constructor functions meant to build object literals with different methods.
* 4. explicit Binding is for pointing to an object in a construtor object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myName(name) {
    console.log(this);
     return `Hello my name is: ${name}`;
}
// Principle 2

// code example for Implicit Binding
const boss = {
    name: "Kaiser",
    age: 35,
    company: "Axe",
    youreFired: function(){
        return `${this.name} you're are fired from ${this.company}!`;
    }

}

console.log(boss.youreFired());

// Principle 3

// code example for New Binding
function Mammal(habitat){

    this.habitat = habitat;
    this.lives = function () {
     console.log( `this mammal lives in the  ${this.lives}`);
    }
}

const dolphin = new Mammal('Ocean')
const jaguar = new Mammal('jungle')

console.log(dolphin);
console.log(jaguar);

// Principle 4

// code example for Explicit Binding

const mammal = {
    
    name: "Bottle Nose Dolphin"
   
}
const human = {
    
    name: 'Homo Sapien,contemporary human'

}

const thingsInCommon = ["gestate embryos in our stomachs", " are warm blooded", "raise our young"];

function venDiagram(thingsInCommon1, thingsInCommon2, thingsInCommon3){
    return ` ${human.name} and ${mammal.name} have these things in common we: ${thingsInCommon}. `;
}

console.log(venDiagram.call(human, mammal, ... thingsInCommon));