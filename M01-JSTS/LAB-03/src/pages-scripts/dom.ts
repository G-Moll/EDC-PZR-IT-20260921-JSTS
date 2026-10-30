import { getDOMElement } from "../utils/dom-utils.js";

// CREAR NUEVOS ELEMENTOS LI
const title = getDOMElement( "#title" );
const list = getDOMElement( "#list" );

const techs = [ "Ts", "Js", "Php", "Java", "C#", "Go", "MySQL" ];

techs.forEach( tech =>  {
    const li = document.createElement( "li" );
    li.textContent = tech;
    list.appendChild( li );
} );
console.log( "LI Elements created..." );

// CAMBIAR PROPIEDADES
title.textContent = "DOM Updated...";
console.log( "H1 Element Updated..." );

title.setAttribute( "data-loaded", "true" )
console.log( "H1 Element Attribute Updated..." );

// console.log( "Running DOM Page..!" );

export {};
