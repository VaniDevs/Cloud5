//var user = firebase.auth().currentUser;

//if(user){

//} else {
    //document.write("Please login");
//}

import {getDataBaseConnection} from './firebaseConfig.js';

let database = getDataBaseConnection();

console.log(database);