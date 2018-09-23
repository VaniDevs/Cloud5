// onload pulls all data 
const database = firebase.database();

function getServiceHashes() {
var aServiceHash = [];
   var ref = database.ref("service/");
   ref.on('value', function(snapshot) {
       if (snapshot.val()) {
           // console.log(snapshot.val());
           let aTempServiceHash = Object.keys(snapshot.val());
           aTempServiceHash.forEach(function(sServiceHash) {
               console.log(sServiceHash);
               aServiceHash.push(sServiceHash);
           });
       }
   });
   return aServiceHash;
}

var category = [
    "Sports",
    "Food", 
    "Scholarships",
    "Clothes"
]

var resourceServices = [
    "Resource 1",
    "Resource 2",
    "Resource 3"
]



var resource = {
    orgName : "getResourceName",
    services : resourceServices
}

var postObject = {
    organizationName: "weekendfuelbag",
    service: "randomservice",
    description: "something",
    city: "vancouver",
    ageFrom: "0",
    ageTo: "100",
    gender: "0-3",
    time: "DATE",
    email: "jsdiofj",
    phoneNumber: "123213",
    website: "fioasdjfos.com",
    image: "image",
    streetAddress: "1000 st",
    
 }

 var panelTitle = postObject.organizationName + ": " + postObject.service;



/**
 * GENERATE AND RENDER THE PANELS
 */
function render() {
    var parentDiv = document.getElementById("div1");
    var divElement = document.getElementById("div2");
    var buttonid = document.getElementById("generate");
    var uniqueKey = "";

    for(let i = 0; i < category.length; i++) {
        divElement = generateCategoryTitle(divElement,i);
        for(let j = 0; j < resourceServices.length; j++){
            uniqueKey = i + "" + j;
            console.log(uniqueKey);
            divElement.appendChild(generateServicePanel(j,uniqueKey));
        }
    }

    parentDiv.removeChild(buttonid);
    
}

function generateCategoryTitle(divElement,count) {
    let panelGroup = document.createElement("div");
    panelGroup.setAttribute("class", "panel-group");

    let tempDiv = document.createElement("h1");
    tempDiv.setAttribute("id", category[count]);
    tempDiv.innerText = category[count];
    panelGroup.appendChild(tempDiv);
    divElement.appendChild(panelGroup);
    return divElement;
}

function generateServicePanel(count, uniqueKey){

    var collapseid = uniqueKey + "collapse";
    var collapseContentId = uniqueKey + "collapsecontent";

    var panelContainer = document.createElement("div");
    var panelHeading = document.createElement("div");
    var panelTitle = document.createElement("h3");
    var panelAnchor = document.createElement("a");
    var panelText = document.createTextNode(resourceServices[count]);
    var panelCollapse = document.createElement("div");
    var panelCollapseContent = document.createElement("div");

    panelContainer.setAttribute("class", "panel panel-default");
    panelHeading.setAttribute("class", "panel-heading");
    panelTitle.setAttribute("class","panel-title");
    panelTitle.style.fontSize = '20px';
    panelAnchor.setAttribute("data-toggle", "collapse");
    panelAnchor.setAttribute("href", "#" + collapseid);
    panelCollapse.setAttribute("class", "panel-collapse collapse");
    panelCollapse.setAttribute("id", collapseid);
    panelCollapseContent.setAttribute("id", collapseContentId);
    panelCollapseContent.innerHTML = "Test Content";

    panelAnchor.appendChild(panelText)
    panelTitle.appendChild(panelAnchor);
    panelHeading.appendChild(panelTitle);
    panelHeading.append(panelCollapseContent);
    panelContainer.appendChild(panelHeading);

    
    
    return panelContainer;

}

 /**
  * RENDERING THE SERVICE POSTING CONTENT
  * */


 function generateServicePost(parentDiv, postObject) {
    renderDescription(parentDiv, postObject.description);
    
 }

 function renderDescription(parentDiv, postObject) {
    var descriptionHeader = "<h2> Description </h2>";
    var descriptionContent = "<p>" + postObject.description + "</p>";
 }


 function renderAddress(parentDiv, postObject) {
    var addressHeader = "<h2> Address </h2>";
    var addressContent = "<p>" + postObject.streetAddress + "</p>";
 }

 function renderCity(parentDiv, postObject) {
    var cityHeader = "<h2> City </h2>";
    var cityContent = "<p>" + postObject.city + "</p>";
 }

 function renderTargetAge(parentDiv, postObject) {
    var targetAgeHeader = "<h2>Target Age Range </h2>";
    var targetAgeContent = "<p> From " + postObject.ageFrom + " to " +  postObject.ageTo + " years </p>";
 }

 function renderTargetGender(parentDiv, postObject) {
    var targetGenderHeader = "<h2> Gender </h2>";
    var targetGenderContent = "<p>" + postObject.description + "</p>";

 }

 function renderContactEmail(parentDiv, postObject) {
    var contactEmailHeader = "<h2> Email </h2>"
    var contactEmailContent = "<p>" + postObject.email + "</p>";
 }

 function renderContactNumber(parentDiv, postObject) {
    var contactNumberHeader = "<h2> Phone </h2>";
    var contactNumberContent = "<h2>" + postObject.phoneNumber + "</h2>";

 }

 function renderWebsite(parentDiv, postObject) {
    var websiteHeader = "<h2> Website </h2>";
    var websiteContent = "<p>" + postObject.website + "</p>";
 }


     
            