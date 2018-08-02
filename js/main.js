var myId = localStorage.getItem('idHajj');

var personArr = personalInfo.personalInfo;
var mutawwifArr = mutawwifInfo.completeInfo;
var locationsArr = geolocation.pilgrimsLocationCollection;

var filterData = personArr.filter(function (obj) {
    return obj.uniqueID == myId;
});

var fullName = filterData.map(function (r) {
    return r.firstName + ' ' + r.lastName;
});
var uniqueID = filterData.map(function (r) {
    return r.uniqueID;
});
var personalImg = filterData.map(function (r) {
    return r.imagePath;
});



$('.profile-usertitle-name').html(fullName);
$('.profile-usertitle-job').text(uniqueID);
$(".img-haaji").attr("src", personalImg);
$(".show-direction-btn").click(function () {
    $("#map").hide();
});

function loadSettings() {
    $('#start').val(localStorage.start);
    $('#end').val(localStorage.end);
}


var mutawwifId = filterData.map(function (r) {
  return r.mutawwifID;
});



  var locationFilterData = locationsArr.filter(function(obj) {
    return obj.pilgrimId == myId;
  });


  
var pilgrimLocations = locationFilterData.map(function(r){
    return r.pilgrimLocation;
});
  /*for testing only*/
 console.log(mutawwifFilterData);
 console.log(mutawwifId.toString());
 
 console.log(pilgrimLocations);
   /*for testing only*/
  
var mutawwifFilterData = mutawwifArr.filter(function (obj) {
  return obj.uniqueID == mutawwifId;
});
var mutawwifName = mutawwifFilterData.map(function (r) {
  return r.fullName;
});


/*info.html*/
$('.profile-usertitle-name-info').html(fullName);
$(".img-haaji").attr("src", personalImg);
$('.profile-fullName').html(fullName);
$('.profile-nationality').html(nationality);
$('.profile-mutawwifName').html(mutawwifName);
//profile-mak-loc-Name
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