import { name } from './client/ApiClient.js';
import { displayUsers, displayPosts, displayUsersPosts } from "./client/displayData.js";

console.log( name );

// Todos los usuarios
// displayUsers();

// Todos los posts
// displayPosts();

// Todos los posts del usuario 3
// displayPosts( 3 );
// Todos los posts del usuario 7
// displayPosts( 7 );

// Todos los posts de todos los usuarios
console.log( "All posts" )
displayUsersPosts();
