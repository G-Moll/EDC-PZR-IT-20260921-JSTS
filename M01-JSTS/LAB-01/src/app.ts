import { Calculator, VERSION } from "./utils/utils.js";

const calculator = new Calculator();

let numOne = 37;
let numTwo = 3;

console.log( `${ numOne } + ${ numTwo } = ${ calculator.add( numOne, numTwo ) }` );
console.log( `${ numOne } - ${ numTwo } = ${ calculator.subtract( numOne, numTwo ) }` );
console.log( `${ numOne } * ${ numTwo } = ${ calculator.multiply( numOne, numTwo ) }` );
console.log( `${ numOne } / ${ numTwo } = ${ calculator.divide( numOne, numTwo ) }` );

calculator.showHistory();
