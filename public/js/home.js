$(document).ready(function() {
  var mapOptions = {
    zoom: 13,
    disableDefaultUI: true
  };
  var map;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
      initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(initialLocation);
    });
  }
});