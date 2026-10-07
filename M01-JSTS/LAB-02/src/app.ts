import { User } from "./models/User.js";
import { name, getUsers } from './client/ApiClient.js';

async function displayUsers(): Promise<void> {
    
    console.log( name );

    try {
        const users: User[] = await getUsers();

        users.forEach( user => {
            console.log(`👤 ( ${ user.id } ) ${ user.name } (@${ user.username })` );
            console.log(`   📧 ${ user.email }`);
            console.log(`   🏢 ${ user.company.name }`);
            console.log(`   🌍 ${ user.address.city }\n`);
        });
    }
    catch( error ) {
        console.error( "Error al consultar los datos", error );
    }
}


displayUsers();
