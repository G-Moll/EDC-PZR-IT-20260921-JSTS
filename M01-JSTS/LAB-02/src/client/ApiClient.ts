import { User } from "../models/User.js";

async function fetchJson<T>( url: string ): Promise<T> {
    const response = await fetch( url );

    if( ! response.ok ) {
        throw new Error( `Error HTTP ${ response.status } al consultar ${ url }`);
    }

    return response.json() as Promise<T>;
}

function getUsers(): Promise<User[]> {
    return fetchJson<User[]>( "https://jsonplaceholder.typicode.com/users" );
}

let name: string = "Joshua";


export {
    name,
    getUsers
};
