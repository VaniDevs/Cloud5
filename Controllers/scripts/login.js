

var token;
var user;

function myfunction(){

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
   token = result.credential.accessToken;
   user = result.user;
   sessionStorage.setItem('usertoken', token);
 
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});


}

