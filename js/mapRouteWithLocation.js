var currentPosition;
//alert(localStorage.getItem('lat'));

/*function initialize(){
    navigator.geolocation.getCurrentPosition(function(position){
        // create the map here, because we only have access to position inside of this function
        // even if we store in a global variable, it only gets updated once this callback runs

        currentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    });
}
*/

navigator.geolocation.getCurrentPosition(success);
function success(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    initMap(crd);
};

function initMap(coordinates) {

    var currentPosition =  {'lng': coordinates.longitude, 'lat': coordinates.latitude};
    var pointA = new google.maps.LatLng(21.42, 39.82);
    var pointBLat = localStorage.getItem('lat'), pointBLong = localStorage.getItem('long');
    var pointB = new google.maps.LatLng(pointBLat,pointBLong),
        myOptions = {
            zoom: 15,
            //navigator.gelocation
            center: currentPosition
        },


        map = new google.maps.Map(document.getElementById('map'), myOptions),
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });
        directionsDisplay.setPanel(document.getElementById('right-panel'));

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);        //infoWindow = new google.maps.InfoWindow;
        //alert(localStorage.getItem('lat'));
        //initialize();
        pointA = currentPosition;
        //    navigator.geolocation.getCurrentPosition(function(position) {
               //console.log(position);
               //pointA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                /* pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };*/

                //infoWindow.setPosition(pos);
                //infoWindow.setContent('Location found.');
                //infoWindow.open(map);
                //map.setCenter(pos);
        //    });
            //pointA = pos;
        /*    markerA = new google.maps.Marker({
                position: pointA,
                title: "point A",
                label: "A",
                map: map
            }),
                markerB = new google.maps.Marker({
                    position: pointB,
                    title: "point B",
                    label: "B",
                    map: map
                });*/
            // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

}


/*function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
*/
function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
        destination: pointB,
        //avoidTolls: true,
        //avoidHighways: false,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

$(".show-direction-btn").click(function () {
    $("#map").hide();
});
