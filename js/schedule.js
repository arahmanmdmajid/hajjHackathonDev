$(".makkahLoc").click(function () {

    alert("Hello! I am an alert box!");
    //window.location.href = 'mapRouteWithoutMap.html';
    //$("#map").hide();
});



var myId = "988746";
var locationsArr = geolocation.pilgrimsLocationCollection;

var locationFilterData = locationsArr.filter(function(obj) {
    return obj.pilgrimId == myId;
});

console.log(locationFilterData[0].category);

