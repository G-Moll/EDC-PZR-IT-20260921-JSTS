import { User } from "../models/User.js";
import { Post } from "../models/Post.js";

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

function getPosts(): Promise<Post[]> {
    return fetchJson<Post[]>( "https://jsonplaceholder.typicode.com/posts" );
}

let name: string = "Joshua";

export {
    name,
    getUsers,
    getPosts
};
