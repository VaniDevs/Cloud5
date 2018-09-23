var config = {
    apiKey: "AIzaSyDEtiyF_qJXqoN0BPv0KaOQ7LmiteTMLe4",
    authDomain: "vanhack-eb10a.firebaseapp.com",
    databaseURL: "https://vanhack-eb10a.firebaseio.com",
    projectId: "vanhack-eb10a",
    storageBucket: "vanhack-eb10a.appspot.com",
      messagingSenderId: "872464678078"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("user 1");
        console.log(user);
    } else {
        console.log("User not logged in");
    }
});

var user = firebase.auth().currentUser;

//console.log(user.Userinfo.uid);

if (user) {
    console.log("user 2");
    console.log(user);
} else {
  // No user is signed in.
}
