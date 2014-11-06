$(document).ready(function(){

  var x = 40.011207
  var y = -105.255394

  var map = L.map('map').setView([x, y], 13);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


});