var myId = localStorage.getItem('idHajj');
console.log('0', myId);
if (myId === null) {
  myId = 123456;
}


if (myId != 988746 && myId != 891131 && myId != null) {
  console.log(1 ,myId);
  myId = '123456';
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
var locationFilterData = locationsArr.filter(function (obj) {
  return obj.pilgrimId == myId;
});
