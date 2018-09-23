function updateServiceList() {
    var aServiceList = search();
    console.log(aServiceList);
    var aTemp = getServiceObject();
    console.log(aTemp);
    render(aTemp);
}

function userInfoKPI() {
    let ageInput = $('#ageInput').val();
    let cityInput = $('#cityInput').val();
    let genderInput = $('input[name="genderInput"]:checked').val();

    if (!ageInput && !cityInput && !genderInput) {
        return;
    }

    let hash = generateHash(ageInput + cityInput + genderInput + getCurrentTime());

    database.ref('KPI/' + hash).set({
        "age": ageInput,
        "city": cityInput,
        "gender": genderInput,
        "timestamp": getCurrentTime()
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
                let tempServiceList = Object.values(snapshot.val());
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

