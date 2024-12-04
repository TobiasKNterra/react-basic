import printPets3, { Person3 } from "./person";
import getAFulfilledPromise, { getARejectedPromise } from "./promise/promise";

console.log("Hallo TypeScript! \n");

/**
 *
 * Übung 1: Funktionen und Variablen
 *******************************************/
console.log("\n******* Übung 1: Funktionen und Variablen ******* \n");

const text: string = "Hallo Welt";

function sayHello(param: string): void {
  console.log(param);
}

sayHello(text);

/**
 *
 * Übung 2: Funktionen und Variablen
 *******************************************/
console.log("\n******* Übung 2: Funktionen und Variablen ******* \n");

function printNumberOrString(param: string | number): void {
  console.log(param);
}

printNumberOrString("Hallo Welt");
printNumberOrString(5);

/**
 *
 * Übung 3: Funktionen und Variablen
 *******************************************/
console.log("\n******* Übung 3: Funktionen und Variablen ******* \n");

function printHelloOrWorld(param: "hello" | "world"): void {
  console.log(param);
}

printHelloOrWorld("hello");
printHelloOrWorld("world");

/**
 *
 * Übung 4: var & let
 *******************************************/
console.log("\n******* Übung 4: var & let ******* \n");

console.log("\n******* with let ******* \n");

let letA = 1;
let letB = 2;

if (true) {
  let letA = 98;
  letB = 99;
}

console.log(letA);
console.log(letB);

console.log("\n******* with var ******* \n");

var a = 1;
var b = 2;

if (true) {
  var a = 98;
  b = 99;
}

console.log(a);
console.log(b);

/**
 *
 * Übung 5: Template Strings
 *******************************************/
console.log("\n******* Übung 5: Template Strings ******* \n");

function printWithHelloWorld(param: string): void {
  const text: string = `Hallo Welt, ${param}!`;
  console.log(text);
}

printWithHelloWorld("Parameter");

/**
 *
 * Übung 6: Interfaces und objects
 *******************************************/
console.log("\n******* Übung 6: interfaces und objects ******* \n");

interface Person {
  name: string;
  nr: number;
  pets: string[];
  isDeveloper(): boolean;
}

const person: Person = {
  name: "Tobias",
  nr: 12,
  pets: ["cat", "dog"],
  isDeveloper: () => true,
};

function printPets(person: Person): void {
  const prefix: string = person.isDeveloper() ? "Entwickler - " : "";
  person.pets.forEach((pet: string) => {
    console.log(`${prefix}${pet}`);
  });
}
printPets(person);

/**
 *
 * Übung 7: Optionale Parameter
 *******************************************/
console.log("\n******* Übung 7: Optionale Parameter ******* \n");

interface Person2 {
  name: string;
  nr: number;
  pets?: string[];
  isDeveloper(): boolean;
}

const person2: Person2 = {
  name: "Tobias",
  nr: 12,
  pets: ["cat", "dog"],
  isDeveloper: () => true,
};

function printPets2(person: Person2): void {
  const prefix: string = person.isDeveloper() ? "Entwickler - " : "";

  if (person.pets) {
    person.pets.forEach((pet: string) => {
      console.log(`${prefix}${pet}`);
    });
  } else {
    console.log("No Pets");
  }
}

printPets2(person2);

/**
 *
 * Übung 7: Module
 *******************************************/
console.log("\n******* Übung 7: Module ******* \n");

const person3: Person3 = {
  name: "Tobias",
  nr: 12,
  pets: ["cat", "dog"],
  isDeveloper: () => true,
};

printPets3(person3);

/**
 *
 * Übung 8: Asynchronität mit Promise
 *******************************************/
console.log("\n******* Übung 8: Asynchr. mit Promise ******* \n");

getAFulfilledPromise().then((result: string) => {
  console.log(result);
});

getAFulfilledPromise()
  .then((result: string) => getARejectedPromise())
  .catch((error: string) => console.log(error));
