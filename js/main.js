var myId = localStorage.getItem('idHajj');
if (myId === null) {
    myId = 988746;
}



if (myId != 988746 && myId != 891131 && myId != null) {
    myId = '988746';
    console.log(2, myId);

}

var personArr = personalInfo.personalInfo;
var mutawwifArr = mutawwifInfo.completeInfo;

var filterData = personArr.filter(function (obj) {
    return obj.uniqueID == myId;
});

var mutawwifId = filterData.map(function (r) {
    return r.mutawwifID;
});


var mutawwifFilterData = mutawwifArr.filter(function (obj) {
    return obj.uniqueID == mutawwifId;
});
var mutawwifName = mutawwifFilterData.map(function (r) {
    return r.fullName;
});

var fullName = filterData.map(function (r) {
    return r.firstName + ' ' + r.lastName;
});
var y1 = filterData.map(function (s) {
    return s.uniqueID;
});
var personalImg = filterData.map(function (t) {
    return t.imagePath;
});

console.log(fullName.toString());
console.log(y1.toString());
console.log(personalImg.toString());


var nationality = filterData.map(function (r) {
    return r.nationality;
});


/*for testing only*/
console.log(mutawwifFilterData);
console.log(mutawwifId.toString());

/*for testing only*/

/*profile.html*/
$('.profile-usertitle-name').html(fullName);
$('.profile-usertitle-job').text(y1);
$(".img-haaji").attr("src", personalImg);

$(".show-direction-btn").click(function () {
    window.location.href = 'mapRouteWithoutMap.html';
});


/*info.html*/
$('.profile-usertitle-name-info').html(fullName);
$(".img-haaji").attr("src", personalImg);
$('.profile-fullName').html(fullName);
$('.profile-nationality').html(nationality);
$('.profile-mutawwifName').html(mutawwifName);

/*info.html*/


/*Goolge Map API Functions*/
function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 21.42, lng: 39.82}
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


$(window).on('load', function () {
    $('#collapseOne').collapse({toggle: true});
    $('#collapseTwo').collapse({toggle: true});
    $('#collapseThree').collapse({toggle: true});
    $('#collapseFour').collapse({toggle: true});
    $('#collapseFive').collapse({toggle: true});
});

var locationsArr = geolocation.pilgrimsLocationCollection;

var locationFilterData = locationsArr.filter(function(obj) {
  //return obj.pilgrimId == myId;
  return obj.category == category;
});

var category;
$('a[href="#collapseOne"]').click(function(e){category = 'makkah';});
$('a[href="#collapseTwo"]').click(function(e){category = 'medina';});
$('a[href="#collapseThree"]').click(function(e){category = 'mina';});
$('a[href="#collapseForth"]').click(function(e){category = 'mudalifa';});
$('a[href="#collapseFifth"]').click(function(e){category = 'arafat';});


var filterData = locationsArr.filter(function(obj) {
  return obj.pilgrimId == myId && obj.category == category;
});

var mk = filterData[0].pilgrimLocation.filter(function(obj){
  return obj.category == 'makkah';
});
var med = filterData[0].pilgrimLocation.filter(function(obj){
  return obj.category == 'medina';
});
var min = filterData[0].pilgrimLocation.filter(function(obj){
  return obj.category == 'mina';
});
var muz = filterData[0].pilgrimLocation.filter(function(obj){
  return obj.category == 'mudalifa';
});
var ara = filterData[0].pilgrimLocation.filter(function(obj){
  return obj.category == 'arafat';
});

console.log(mk[0].address.distName, med[0].address.buildingName);

$('#address-disct-mk').text(mk[0].address.distName);
$('#address-st-name-mk').text(mk[0].address.streetName);
$('#address-build-name-mk').text(mk[0].address.buildingName);
$('#address-build-num-mk').text(mk[0].address.buildingNum);
$('#address-floor-num-mk').text(mk[0].address.floorNum);
$('#address-flat-num-mk').text(mk[0].address.flatNum);
$('#address-room-num-mk').text(mk[0].address.roomNum);


$('#address-disct-med').text(med[0].address.distName);
$('#address-st-name-med').text(med[0].address.streetName);
$('#address-build-name-med').text(med[0].address.buildingName);
$('#address-build-num-med').text(med[0].address.buildingNum);
$('#address-floor-num-med').text(med[0].address.floorNum);
$('#address-flat-num-med').text(med[0].address.flatNum);
$('#address-room-num-med').text(med[0].address.roomNum);


$('#address-disct-min').text(min[0].address.distName);
$('#address-st-name-min').text(min[0].address.streetName);
$('#address-build-name-min').text(min[0].address.buildingName);
$('#address-build-num-min').text(min[0].address.buildingNum);
$('#address-floor-num-min').text(min[0].address.floorNum);
$('#address-flat-num-min').text(min[0].address.flatNum);
$('#address-room-num-min').text(min[0].address.roomNum);


$('#address-disct-muz').text(muz[0].address.distName);
$('#address-st-name-muz').text(muz[0].address.streetName);
$('#address-build-name-muz').text(muz[0].address.buildingName);
$('#address-build-num-muz').text(muz[0].address.buildingNum);
$('#address-floor-num-muz').text(muz[0].address.floorNum);
$('#address-flat-num-muz').text(muz[0].address.flatNum);
$('#address-room-num-muz').text(muz[0].address.roomNum);



$('#address-disct-ara').text(ara[0].address.distName);
$('#address-st-name-ara').text(ara[0].address.streetName);
$('#address-build-name-ara').text(ara[0].address.buildingName);
$('#address-build-num-ara').text(ara[0].address.buildingNum);
$('#address-floor-num-ara').text(ara[0].address.floorNum);
$('#address-flat-num-ara').text(ara[0].address.flatNum);
$('#address-room-num-ara').text(ara[0].address.roomNum);


//$('#address-disct').html(locationFilterData[0].);
//console.log(locationFilterData);

var locationFilterData = locationsArr.filter(function (obj) {
    return obj.pilgrimId == myId;
});

//var lat = filterData.pilgrimsLocationCollection[0].category;

console.log(locationFilterData[0].pilgrimLocation[0]);

var lat; //= locationFilterData[0].pilgrimLocation[0].geometry.lat;
var long; //= locationFilterData[0].pilgrimLocation[0].geometry.long;

$(".makkahLoc").click(function () {
    window.location.href = 'mapRouteWithLocation.html';
    lat = locationFilterData[0].pilgrimLocation[0].geometry.lat;
    long = locationFilterData[0].pilgrimLocation[0].geometry.long;
    localStorage.setItem('lat', lat);
    localStorage.setItem('long',long);
});

$(".medinaLoc").click(function () {
    window.location.href = 'mapRouteWithLocation.html';
    lat = locationFilterData[0].pilgrimLocation[1].geometry.lat;
    long = locationFilterData[0].pilgrimLocation[1].geometry.long;
    localStorage.setItem('lat', lat);
    localStorage.setItem('long',long);
});

$(".minaLoc").click(function () {
    window.location.href = 'mapRouteWithLocation.html';
    lat = locationFilterData[0].pilgrimLocation[2].geometry.lat;
    long = locationFilterData[0].pilgrimLocation[2].geometry.long;
    localStorage.setItem('lat', lat);
    localStorage.setItem('long',long);
});

$(".muzdalifahLoc").click(function () {
    window.location.href = 'mapRouteWithLocation.html';
    lat = locationFilterData[0].pilgrimLocation[3].geometry.lat;
    long = locationFilterData[0].pilgrimLocation[3].geometry.long;
    localStorage.setItem('lat', lat);
    localStorage.setItem('long',long);
});

$(".arafatLoc").click(function () {
    window.location.href = 'mapRouteWithLocation.html';
    lat = locationFilterData[0].pilgrimLocation[4].geometry.lat;
    long = locationFilterData[0].pilgrimLocation[4].geometry.long;
    localStorage.setItem('lat', lat);
    localStorage.setItem('long',long);
});