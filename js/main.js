console.log(personalInfo.personalInfo[0].firstName);


var fullName = personalInfo.personalInfo[0].firstName + ' ' + personalInfo.personalInfo[0].lastName;

$('.profile-usertitle-name').text(fullName);
$('.profile-usertitle-job').text(personalInfo.personalInfo[0].uniqueID);

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

    var onChangeHandler = function() {
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
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function initMap1() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 37.77, lng: -122.447}
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute1(directionsService, directionsDisplay);
    document.getElementById('mode').addEventListener('change', function() {
        calculateAndDisplayRoute1(directionsService, directionsDisplay);
    });
}

function calculateAndDisplayRoute1(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
        origin: {lat: 37.77, lng: -122.447},  // Haight.
        destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
