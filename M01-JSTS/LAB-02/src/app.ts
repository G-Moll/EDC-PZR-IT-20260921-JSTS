import { User } from "./models/User.js";
import { Post } from "./models/Post.js";
import { name, getUsers, getPosts } from './client/ApiClient.js';

console.log( name );

async function displayUsers(): Promise<void> {
    try {
        const users: User[] = await getUsers();

        users.forEach( user => {
            console.log( `🧑🏻 ( ${ user.id } ) ${ user.name } (@${ user.username })` );
            console.log( `   📧 ${ user.email }` );
            console.log( `   🏢 ${ user.company.name }` );
            console.log( `   🌍 ${ user.address.city }\n` );
        });
    }
    catch( e ) {
        console.error( "Error al consultar los datos", e );
    }
}

async function displayPosts(): Promise<void> {
    try {
        let posts: Post[] = await getPosts();
        
        posts.forEach( ( post, index ) => {
            console.log( `🆔 ${ post.userId } - 📫 ${ post.id }` );
            console.log( `📧 ${ post.title }` );
            console.log( `📄 ${ post.body }\n` );
        });
    }
    catch( e ) {
        console.log( "Error al consultar los datos", e );
    }
}

displayUsers();
displayPosts();
