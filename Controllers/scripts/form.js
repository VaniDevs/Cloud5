function formSaveHandle() {
    if (!handleTitle() || !handleKeyWords()) {
        location.reload(true);
        return;
    }
    var hash = generateHash(handleTitle() + handleOrgName() + getCurrentTime());

    database.ref('service/' + hash).set({
        "ageFrom": handleAgeFrom(),
        "ageTo": handleAgeTo(),
        "city": handleCity(),
        "description": handleDescription(),
        "email": handleEmail(),
        "gender": handleGender(),
        "organizationname": handleOrgName(),
        "phonenumber": handlePhoneNumber(),
        "streetAddress": handle2ndAddress() + " " + handleStAddress() + " " + handleCity() + " " + handleProvince() + " " + handleCountry() + " " + handlePostalCode(),
        "time": getCurrentTime(),
        "title": handleTitle(),
        "website": handleWebsite()
    });

<<<<<<< HEAD
    handleServiceLinkOrg(hash);
=======
>>>>>>> develop
    handleServiceKeyWords(handleKeyWords(), hash);
    window.open('../../Views/admin.html');
}

function handleTitle() {
    var title = $('#titleInput').val().toLowerCase();
    return title;
}

function handleKeyWords() {
    var keywords = $('#keyWordsInput').val().toLowerCase();
    return keywords.split(', ');
}

function handleDescription() {
    var description = $('#descriptionInput').val().toLowerCase();
    return description;
}

function handleStAddress() {
    var stAddress = $('#stAddressInput').val().toLowerCase();
    return stAddress;
}

function handle2ndAddress() {
    var st2ndAddress = $('#2ndAddressInput').val().toLowerCase();
    return st2ndAddress;
}

function handleCity() {
    var city = $('#cityInput').val().toLowerCase();
    return city;
}

function handleProvince() {
    var province = $('#provinceInput').val().toLowerCase();
    return province;
}

function handlePostalCode() {
    var postalCode = $('#postalInput').val().toLowerCase();
    return postalCode;
}

function handleCountry() {
    var country = $('#countryInput').val().toLowerCase();
    return country;
}

function handlePhoneNumber() {
    var phoneNumber = $('#phoneNumberInput').val().toLowerCase();
    return phoneNumber;
}

function handleAgeFrom() {
    var ageFrom = $('#ageFromInput').val().toLowerCase();
    return ageFrom;
}

function handleAgeTo() {
    var ageTo = $('#ageToInput').val().toLowerCase();
    return ageTo;
}

function handleEmail() {
    var email = $('#emailInput').val().toLowerCase();
    return email;
}

function handleWebsite() {
    var website = $('#websiteInput').val().toLowerCase();
    return website;
}

function handleOrgName() {
    var orgName = $('#orgNameInput').val().toLowerCase();
    return orgName;
}

function handleGender() {
    var gender = $('#genderInput').val().toLowerCase();
    return gender;
}

function handleServiceKeyWords(keywords, hash) {
    var oTempParam = {};
    keywords.forEach(function(keyword) {
        oTempParam[hash] = "TRUE";
        database.ref('keyWords/' + keyword).push(hash);
    });
}

function handleServiceLinkOrg(hash) {
    var currentUserUid = firebase.auth().currentUser.uid;
    database.ref('users/' + currentUserUid + '/serviceList/').push(hash);
}
