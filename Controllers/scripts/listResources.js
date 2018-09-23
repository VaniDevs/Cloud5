
/**
 * GENERATE AND RENDER THE PANELS
 */

//  var serviceKeys = [
//     ageFrom,
//     ageT0,
//     city,
//     description,
//     email,
//     gender,
//     image,
//     organizationname,
//     phonenumber,
//     streetAddress,
//     time,
//     title,
//     website
// ]


function render(services) {
    console.log("render");
    var divElement = document.getElementById("contentContainer");
    var panelDivContainer = document.createElement("div");
    
    panelDivContainer.setAttribute("class", "container");

    console.log("forloop..");
    console.log(services);
    var temp = Object.keys(services);
    console.log(temp);

    for(var key in services) {
        console.log(key);
        panelDivContainer.appendChild(renderServicePanel(services[key]));
    }
    
    divElement.appendChild(panelDivContainer);
    return divElement;
}

function renderServicePanel(myservicekey){
    console.log(myservicekey);
    var collapseid = myservicekey;
    //var panelTitle = postObject.organizationName + ": " + postObject.service;
    var panelGroup = document.createElement("div");
    var panelDefault = document.createElement("div");
    var panelHeading = document.createElement("div");
    var panelTitle = document.createElement("h3");
    var panelAnchor = document.createElement("a");
    var panelText = document.createTextNode("orgname: " + "resource title");
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

 function renderServicePost(services){
    
 }

 function renderSingleContent(serviceKeys, service) {

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


     
            