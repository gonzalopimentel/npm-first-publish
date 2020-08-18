import Singleton from "./Singleton";

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("A is equal to B?", a === b);
// --> true
