function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
 
    // Multiple markers location, latitude, and longitude
    var markers = [
['Kansas City, MO', 38.979367, -94.607591],
['Ottawa, Canada', 45.419514, -75.693736],
['Jinja, Uganda', 0.447527, 33.202737], 
['Nairobi, Kenya', -1.291881, 36.821303], 
['Omaha, NE', 41.225358, -95.927329],
['BANFF', 51.178169, -115.571479],
['Dublin', 53.349716, -6.263870],
['Cliffs of Moher',52.971704, -9.431247],
['Cork', 51.898752, -8.474378],
['Limerick', 52.664105, -8.628069],
['Gattwick', 51.153635, -0.181859],
['Heathrow', 51.704016, -0.411714],
['Arkansas', 36.261961, -94.115201],
['AL', 32.414140, -86.303712],
['CA', 37.850012, -122.478674],
['CO', 40.383634, -105.519138],
['FL', 28.385582, -81.563938],
['GA', 33.778716, -84.421680],
['ID', 43.644927, -116.118942],
['IL', 41.878924, -87.626025],
['IA', 41.587701, -93.625039],
['FL', 28.385582, -81.563938],
['KS', 38.941943, -95.254501],
['IN', 37.934374, -87.896442],
['KY', 37.083592, -88.601434],
['LA', 29.958216, -90.061807],
['MN', 44.976001, -93.267653],
['MS', 32.350560, -90.191673],
['NJ', 40.737579, -74.185276],
['NV', 39.326065, -118.042007],
['NY',40.758889, -73.978725],
['NC', 34.752430, -77.433530],
['OH', 39.988540, -82.970479],
['OK', 36.156650, -95.983070],
['OR', 43.539333, -121.160330],
['PA', 40.508327, -80.070899],
['SC', 34.042136, -81.075994],
['SD', 44.055605, -103.772328],
['TN', 35.052820, -90.025015],
['TX', 32.751414, -97.082437],
['WA', 47.199845, -121.009880],
['WI', 43.041543, -87.907314],
['WY',42.940204, -106.607715],
['Iceland',64.131298, -21.935180],
['Amsterdam', 52.375408, 4.884009],
['Mexico', 25.862231, -97.497774]
      ];
// Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
      // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(2.75);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);
