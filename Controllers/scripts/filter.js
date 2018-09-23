const database = firebase.database();

function updateServiceList() {
    var aServiceList = search();

    deleteAllPanel();

    aServiceList.forEach(function(sService) {
        generateServicePanel(sService);
    });
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



