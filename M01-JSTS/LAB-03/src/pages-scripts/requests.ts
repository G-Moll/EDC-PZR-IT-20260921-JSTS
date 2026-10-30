import { getDOMElement } from "../utils/dom-utils.js";
import { type User  } from "../models/User.js";

const load = getDOMElement( "#load" );
const output = getDOMElement( "#output" );

async function getUsers(): Promise<User[]> {
    const response = await fetch( "https://jsonplaceholder.typicode.com/users" );

    if( ! response.ok ) {
        throw new Error( `HTTP ${ response.status } ${ response.statusText}` );
    }

    return await response.json() as User[];
}

// EVENTO DE CLICK
load.addEventListener( "click", async () => {
    output.textContent = "Loading...";

    try {
        const users = await getUsers();
        const usersData = users
            .map( user => `<p>${ user.name } - ${ user.email }</p>` )
            .join( "" );

        output.innerHTML = usersData;
        console.log( usersData );
    }
    catch( e ) {
        output.textContent = `Error: ${ ( e as Error ).message }`;
    }
} );

// console.log( "Running Requests (Async/Await) Page..!" );

export {};
