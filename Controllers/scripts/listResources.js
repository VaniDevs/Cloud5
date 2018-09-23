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
function render(categories) {
    console.log(categories);
    
    var divElement = document.getElementById("contentContainer");

    categories.forEach(function(category) {
        console.log(category);
        divElement = renderCategory(divElement,category);
    });
    
}

function renderCategory(divElement,category) {
    console.log(category);

    let panelDivContainer = document.createElement("div");
    let categoryTitle = document.createElement("h1");
    
    
    panelDivContainer.setAttribute("class", "container");
    categoryTitle.setAttribute("id", category);
    categoryTitle.innerText = category;

    panelDivContainer.appendChild(categoryTitle);

    // for(let j = 0; j < resourceServices.length; j++){
    //     uniqueKey = count + "" + j;
    //     console.log(uniqueKey);
    //     panelDivContainer.appendChild(renderServicePanel(j,uniqueKey));
    // }

    divElement.appendChild(panelDivContainer);
    return divElement;
}

function renderServicePanel(count, uniqueKey){

    var collapseid = uniqueKey + "collapse";

    var panelGroup = document.createElement("div");
    var panelDefault = document.createElement("div");
    var panelHeading = document.createElement("div");
    var panelTitle = document.createElement("h3");
    var panelAnchor = document.createElement("a");
    var panelText = document.createTextNode(resourceServices[count]);
    var panelCollapse = document.createElement("div");
    var panelCollapseContent = document.createElement("p");

    panelGroup.setAttribute("class", "panel-group");
    panelDefault.setAttribute("class", "panel panel-default");
    panelHeading.setAttribute("class", "panel-heading");
    panelTitle.setAttribute("class","panel-title");
    panelTitle.style.fontSize = '20px';
    panelAnchor.setAttribute("data-toggle", "collapse");
    panelAnchor.setAttribute("href", "#" + collapseid);
    panelCollapse.setAttribute("id", collapseid);
    panelCollapse.setAttribute("class", "panel-collapse collapse");
    panelCollapseContent.innerHTML = "getServiceContent";

    panelGroup.setAttribute("class", "deleteClass");
    panelDefault.setAttribute("class", "deleteClass");
    panelHeading.setAttribute("class", "deleteClass");
    panelTitle.setAttribute("class", "deleteClass");
    panelAnchor.setAttribute("class", "deleteClass");
    panelCollapse.setAttribute("class", "deleteClass");
    panelCollapseContent.setAttribute("class","deleteClass");
    
    panelAnchor.appendChild(panelText)
    panelTitle.appendChild(panelAnchor);
    panelHeading.appendChild(panelTitle);
    panelHeading.append(panelCollapse);
    panelCollapse.appendChild(panelCollapseContent);
    panelDefault.appendChild(panelHeading);
    panelGroup.appendChild(panelDefault)

    
    return panelGroup;

}

 /**
  * RENDERING THE SERVICE POSTING CONTENT
  * */

 function renderServicePost(service){
    
 }

 function renderSingleContent(serviceEntryKey,dataTitle, dataContent) {

    let container = document.createElement("div");
    let title = document.createElement("h2");
    let content = document.createElement("p");
    title.innerHTML = dataTitle;
    content.innerHTML = dataContent;
    
    container.appendChild(title);
    container.appendChild(content);

    //returns to be appended
    return container;

 }


 function renderAddress(parentDiv, postObject) {
    let temp = document.createElement("div");
    var addressHeader = "<h2> Address </h2>";
    var addressContent = "<p>" + postObject.streetAddress + "</p>";
 }

 function renderCity(parentDiv, postObject) {
    let temp = document.createElement("div");
    var cityHeader = "<h2> City </h2>";
    var cityContent = "<p>" + postObject.city + "</p>";
 }

 function renderTargetAge(parentDiv, postObject) {
    let temp = document.createElement("div");
    var targetAgeHeader = "<h2>Target Age Range </h2>";
    var targetAgeContent = "<p> From " + postObject.ageFrom + " to " +  postObject.ageTo + " years </p>";
 }

 function renderTargetGender(parentDiv, postObject) {
    let temp = document.createElement("div");
    var targetGenderHeader = "<h2> Gender </h2>";
    var targetGenderContent = "<p>" + postObject.description + "</p>";

 }

 function renderContactEmail(parentDiv, postObject) {
    let temp = document.createElement("div");
    var contactEmailHeader = "<h2> Email </h2>"
    var contactEmailContent = "<p>" + postObject.email + "</p>";
 }

 function renderContactNumber(parentDiv, postObject) {
    let temp = document.createElement("div");
    var contactNumberHeader = "<h2> Phone </h2>";
    var contactNumberContent = "<h2>" + postObject.phoneNumber + "</h2>";

 }

 function renderWebsite(parentDiv, postObject) {
    let temp = document.createElement("div");
    var websiteHeader = "<h2> Website </h2>";
    var websiteContent = "<p>" + postObject.website + "</p>";
 }

 function deleteAllPanel() {
   $(".deleteClass").remove();
 }


     
            