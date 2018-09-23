// onload pulls all data 

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

function setUser(user) {
    // setters
}

function getUserInformation() {
    return userProfile;
}


function calculatePreferenceScore(user){
    // priority value?

}

function search(user) {

}

function getResouceServicesList(resource) {
    return resource.services;
} 


/**
 * GENERATE AND RENDER THE PANELS
 */
function render() {
    var parentDiv = document.getElementById("div1");
    var divElement = document.getElementById("div2");
    var buttonid = document.getElementById("generate");

    

    for(let i = 0; i < category.length; i++) {
        divElement = generatePanelHeader(divElement,i);
        for(let j = 0; j < resourceServices.length; j++){
            divElement.append(generatePanel(j));
        }
    }

    parentDiv.removeChild(buttonid);
    
}

function generatePanelHeader(divElement,count) {

    let tempDiv = document.createElement("h1");
    tempDiv.setAttribute("id", category[count]);
    tempDiv.innerText = category[count];
    divElement.append(tempDiv);
    return divElement;
}

function generatePanel(count){
    // create panel div container
    // create panel
    // create textl

    var panelContainer = document.createElement("div");
    var panel = document.createElement("div");
    var panelText = document.createTextNode(resourceServices[count]);

    panelContainer.setAttribute("class", "panel panel-default");
    panel.setAttribute("class","panel-body");
    panel.style.fontSize = '20px';

    panel.appendChild(panelText);
    panelContainer.appendChild(panel);
    
    
    return panelContainer;

}


/**
 * LINK ACTION TO THE PAGE
 */

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

 function generateServicePost(div, postObject) {
    renderDescription(serviceDescriptoin);
    renderLocation(orgLocation);
 }

 /**
  * RENDERING THE SERVICE POSTING 
  * */

 function renderDescription(serviceDescriptoin) {
    
}


 function renderAddress(orgLocation) {

 }

 function renderCity() {

 }

 function renderTargetAge() {

 }

 function renderTargetGender() {

 }

 function renderContactEmail() {

 }

 function renderContactNumber() {

 }

 function renderWebsite() {

 }


     
            