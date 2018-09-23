const database = firebase.database();

function updateServiceList() {
    var aServiceList = search();
    console.log(aServiceList);
    var aTemp = getServiceObject();
    console.log(aTemp);
    render(aTemp);
}

function updateAgeFilter() {
    
}

function updateCityFilter() {

}

function updateGenderFilter() {

}

function search() {
    // let sSearchTocken = $('#placeholder').value;
    var sSearchTocken = "Sport sport";
    var aSearchTocken = sSearchTocken.split(' ');

    var aServiceList = [];

    aSearchTocken.forEach(function(sTocken) {
        var ref = database.ref("keyWords/" + sTocken);
        ref.on('value', function(snapshot) {
            if (snapshot.val()) {
                let tempServiceList = Object.keys(snapshot.val());
                tempServiceList.forEach(function(service) {
                    //console.log(service);
                    aServiceList.push(service);
                });
            }
        });
    });
    return aServiceList;
}

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

function getKeyWords() {
    var keyWords = [];
    var ref = database.ref("keyWords/");
    ref.on('value', function (snapshot) {
        if(snapshot.val()) {
            let aTempKeyWord = Object.keys(snapshot.val());
            aTempKeyWord.forEach(function(aKeyWord) {
                console.log("akeyWord: " + aKeyWord);
                keyWords.push(aKeyWord);
            });
        }
    });
    console.log(keyWords);
    return keyWords;

}

    
function getServiceObject() {
    var aServiceList = [];
    var aServiceContent = [];
    var oService = {nothing:"nothing"};
    
    let ref = database.ref("service/");
    ref.on('value', function(snapshot) {
        if (snapshot.val()) {
            // console.log(snapshot.val());
            aServiceList = Object.keys(snapshot.val());
            aServiceContent = Object.values(snapshot.val());
            console.log(snapshot.val());
            for (var i = 0; i < aServiceList.length; i++) {
                oService[aServiceList[i]] = aServiceContent[i];
            }
        }
       
    });
    
    return oService;
}

