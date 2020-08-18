// Boolean
let muted: boolean = true;
muted = false;

// numbers
let age = 6;
let numerator: number = 42;
let denominator: number = age;
let result = numerator / denominator;

// String
let firstName: string = "Gonzalo";
let greet = `My name is ${firstName}`;

// Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum
enum Color {
  Rojo = "Rojo",

  Verde = "Verde",

  Azul = "Azul",
}

let colorFavorite: Color = Color.Verde;
console.log(`My favorite color is ${colorFavorite}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

// Object
let someObject: object = { type: "Wildcard" };
