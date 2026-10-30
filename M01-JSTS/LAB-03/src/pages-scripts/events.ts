import { getDOMElement } from "../utils/dom-utils.js";

const btn = getDOMElement( "#btn" );
const input = getDOMElement( "#input" );
const output = getDOMElement( "#output" );
const list = getDOMElement( "#list" );

// CUANDO SE HA CARGADO SÓLO LA ESTRUCTURA
window.addEventListener( "DOMContentLoaded", ( e: Event ) => {
    console.log( e.type );
} );

// CUANDO TODO EL HTML Y RECURSOS EXTERNOS SE HAN CARGADO
window.addEventListener( "load", ( e: Event ) => {
    console.log( e.type );
} );

// EVENTO DE CLICK
btn.addEventListener( "click", ( e: MouseEvent ) => {
    const textValue = `Click en ( ${ e.clientX }, ${ e.clientY } )`
    output.textContent = textValue;
    console.log( textValue );
} );

// EVENTO DE ENTRADA DE DATOS EN UN INPUT
input.addEventListener( "input", ( e: Event ) => {
    const target = e.target as HTMLInputElement;
    const textValue = `Hello ( ${ target.value || "visitor" } )`;
    output.textContent = textValue;
    console.log( textValue );
} );

// DELEGACIÓN DE EVENTOS
list.addEventListener( "click", ( e: Event ) => {
    const target = e.target as HTMLElement;

    if( target.matches( "li" ) ) {
        console.log( "Current LI Element: ", target.textContent );
    }
} );

// console.log( "Running Events Page..!" );

export {};
