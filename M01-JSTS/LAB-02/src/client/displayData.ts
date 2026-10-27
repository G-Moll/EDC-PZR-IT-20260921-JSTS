import { Post } from "../models/Post.js";
import { User } from "../models/User.js";
import { getUsers, getPosts } from "./ApiClient.js";

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

async function displayUsersPosts(): Promise<void> {
    try {
        const taskStart = performance.now();

        const [ users, posts ]: [ User[], Post[] ] = await Promise.all([
            getUsers(),
            getPosts()
        ]);

        const mapUsersPosts: Map<number, Post[]> = new Map();
        
        posts.forEach( post => {
            if( ! mapUsersPosts.has( post.userId ) ) {
                mapUsersPosts.set( post.userId, [] );
            }
            mapUsersPosts.get( post.userId )!.push( post );
        });

        users.forEach( user => {
            const userPosts: Post[] = mapUsersPosts.get( user.id ) ?? [];
            console.log( `Usuario 🧑🏻 ${ user.id }: ${ user.name }` );

            if( userPosts.length == 0 ) {
                console.log( `Usuario sin posts...` );
                return;
            }

            userPosts.forEach( post => {
                console.log( `  Post 📄 ${ post.id } - ${ post.title }` )
            });

            console.log( "" )
        });

        const taskEnd = performance.now();
        const timeLapsed = taskEnd - taskStart;

        console.log( `✅ Usuarios procesados: ${ users.length }` );
        console.log( `✅ Posts distribuidos: ${ posts.length }` );
        console.log( `🥦 La tarea tardó ${ timeLapsed.toFixed( 3 ) } milisegundos\n` );
    }
    catch( e ) {
        console.log( "Error al consumir los datos..." )
    }
}

export {
    displayUsers,
    displayPosts,
    displayUsersPosts
};
