var token;
var user;

function myfunction(){

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
   token = result.credential.accessToken;
   user = result.user;

   sessionStorage.setItem('userToken', token);

   window.location.href = "admin.html";
 
}).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
});
}

