$(document).ready(function() {
  document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
  $('#scan').click( function()
      {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
              localStorage.setItem("idHajj", result.text);
              window.location = "profile.html";

            },
            function (error) {
              alert("Scanning failed: " + error);
            });
      }
  );
}
