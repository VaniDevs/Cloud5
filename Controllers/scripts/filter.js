const database = firebase.database();

function updateServiceList() {
    var aServiceList = search();
    console.log(aServiceList);
    
    deleteAllPanel();
    render(aServiceList);
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
                    console.log(service);
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

    


