import { User } from "./models/User.js";
import { Post } from "./models/Post.js";
import { name, getUsers, getPosts } from './client/ApiClient.js';

console.log( name );

async function displayUsers(): Promise<void> {
    try {
        const taskStart = performance.now();

        const users: User[] = await getUsers();

        users.forEach( user => {
            console.log( `🧑🏻 ( ${ user.id } ) ${ user.name } (@${ user.username })` );
            console.log( `   📧 ${ user.email }` );
            console.log( `   🏢 ${ user.company.name }` );
            console.log( `   🌍 ${ user.address.city }\n` );
        });

        const taskEnd = performance.now();
        const timeLapsed = taskEnd - taskStart;
        
        console.log( `✅ Usuarios obtenidos: ${ users.length }` );
        console.log( `🥦 La tarea tardó ${ timeLapsed.toFixed( 3 ) } milisegundos\n` );
    }
    catch( e ) {
        console.error( "Error al consultar los datos", e );
    }
}

async function displayPosts( userId: undefined | number = undefined ): Promise<void> {
    try {
        const taskStart = performance.now();

        let posts: Post[] = await getPosts();

        posts = !! userId ?
            posts.filter( post => post.userId == userId ) :
            posts;

        posts.forEach( ( post, index ) => {
            console.log( `🆔 ${ post.userId } - 📫 ${ post.id }` );
            console.log( `📧 ${ post.title }` );
            console.log( `📄 ${ post.body }\n` );
        });

        const taskEnd = performance.now();
        const timeLapsed = taskEnd - taskStart;

        console.log( `✅ Posts obtenidos: ${ posts.length }` );
        console.log( `🥦 La tarea tardó ${ timeLapsed.toFixed( 3 ) } milisegundos\n` );
    }
    catch( e ) {
        console.log( "Error al consultar los datos", e );
    }
}

displayUsers();
displayPosts();
