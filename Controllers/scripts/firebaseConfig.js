// Initialize Firebase
var config = {
    apiKey: "AIzaSyDEtiyF_qJXqoN0BPv0KaOQ7LmiteTMLe4",
    authDomain: "vanhack-eb10a.firebaseapp.com",
    databaseURL: "https://vanhack-eb10a.firebaseio.com",
    projectId: "vanhack-eb10a",
    storageBucket: "vanhack-eb10a.appspot.com",
      messagingSenderId: "872464678078"
};

firebase.initializeApp(config);


var database = firebase.database();

console.log(database);



