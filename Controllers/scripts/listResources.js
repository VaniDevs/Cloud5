
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
    console.log(JSON.stringify(services));
    var temp = Object.keys(services);
    console.log(temp);

    for(var key in services) {
        console.log(key);
        panelDivContainer.appendChild(renderServicePanel(services[key], key));
    }
    
    divElement.appendChild(panelDivContainer);
    return divElement;
}

function renderServicePanel(myservicekey, key){
    console.log(myservicekey);
    var collapseid = key;
    var panelGroup = document.createElement("div");
    var panelDefault = document.createElement("div");
    var panelHeading = document.createElement("div");
    var panelTitle = document.createElement("h3");
    var panelAnchor = document.createElement("a");
    var panelText = document.createTextNode(myservicekey["organizationname"] + ": " + myservicekey["title"]);
    var panelCollapse = document.createElement("div");
    var outerContainer = document.createElement("div");

    
    panelGroup.setAttribute("class", "panel-group");
    panelDefault.setAttribute("class", "panel panel-default");
    panelHeading.setAttribute("class", "panel-heading");
    panelTitle.setAttribute("class","panel-title");
    panelTitle.style.fontSize = '20px';
    panelAnchor.setAttribute("data-toggle", "collapse");
    panelAnchor.setAttribute("href", "#" + collapseid);
    panelCollapse.setAttribute("id", collapseid);
    panelCollapse.setAttribute("class", "panel-collapse collapse");
    panelCollapseContent = renderServicePost(panelCollapse,myservicekey);
    outerContainer.setAttribute("class", "container")

    // panelGroup.setAttribute("class", "deleteClass");
    // panelDefault.setAttribute("class", "deleteClass");
    // panelHeading.setAttribute("class", "deleteClass");
    // panelTitle.setAttribute("class", "deleteClass");
    // panelAnchor.setAttribute("class", "deleteClass");
    // panelCollapse.setAttribute("class", "deleteClass");
    
    panelAnchor.appendChild(panelText)
    panelTitle.appendChild(panelAnchor);
    panelHeading.appendChild(panelTitle);
    panelHeading.append(panelCollapse);
    panelDefault.appendChild(panelHeading);
    panelGroup.appendChild(panelDefault);
    outerContainer.appendChild(panelGroup);

    
    return panelGroup;

}

 /**
  * RENDERING THE SERVICE POSTING CONTENT
  * */

 function renderServicePost(panelCollapse, services){
    for(var key in services) {
        console.log(key);
        panelCollapse.appendChild(renderSingleContent(key , services[key]));
    }
 }

 function renderSingleContent(dataTitle, dataContent) {

    let container = document.createElement("div");
    let title = document.createElement("h4");
    let content = document.createElement("p");
    title.innerHTML = dataTitle + ":";
    content.innerHTML = dataContent;
    
    container.appendChild(title);
    container.appendChild(content);

    //returns to be appended
    return container;

 }


 function deleteAllPanel() {
   $(".deleteClass").remove();
 }


     
            