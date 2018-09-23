function updateServiceList() {
    // deleteAllPanel();

    let aServiceList = search();

    aServiceList.forEach(function(sService) {
        generateServicePanel(sService);
    });
}

function updateFilter() {
    // deleteAllPanel();

    let ageInput = $('#ageInput').val();
    let cityInput = $('#cityInput').val();
    let genderInput = $('input[name="genderInput"]:checked').val();

    var aServiceList = [];
    var aServiceContent = [];
    var oService = {};
    var aFilteredService = [];
    
    let ref = database.ref("service/");
    ref.on('value', function(snapshot) {
        if (snapshot.val()) {
            // console.log(snapshot.val());
            aServiceList = Object.keys(snapshot.val());
            aServiceContent = Object.values(snapshot.val());
            for (var i = 0; i < aServiceList.length; i++) {
                oService[aServiceList[i]] = aServiceContent[i];
            }
        }
    });

    for (var key in oService) {
        if (oService[key]["city"] == cityInput) {
            aFilteredService.push(key);
        } else if (oService[key]["gender"] == "all") {
            aFilteredService.push(key);
        } else if (oService[key]["gender"] == genderInput) {
            aFilteredService.push(key);
        } else if (oService[key]["ageFrom"] < ageInput && oService[key]["ageTo"] > ageInput) {
            aFilteredService.push(key);
        }
    }

    aFilteredService.forEach(function(serviceId) {
        generateServicePanel(serviceId);
    })
}

function search() {
    let sSearchTocken = $('#searchInput').val();
    // let sSearchTocken = "Sport sport";
    let aSearchTocken = sSearchTocken.split(' ');

    let aServiceList = [];

    aSearchTocken.forEach(function(sTocken) {
        let ref = database.ref("keyWords/" + sTocken);
        ref.on('value', function(snapshot) {
            if (snapshot.val()) {
                let tempServiceList = Object.keys(snapshot.val());
                tempServiceList.forEach(function(service) {
                    // console.log(service);
                    aServiceList.push(service);
                });
            }
        });
    });
    return aServiceList;
}
