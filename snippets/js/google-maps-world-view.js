{
    // By setting the zoom level to 0, the map will try to fit the entire world in your viewport
    const zoom = 0;

    // You might need to tweak these depending on your map's aspect ratio
    const center = { lat: 45, lng: 12 };

    // Set up the bounds you want to use as a constraint while dragging the map
    // These values represent all continents minus antarctica
    const fitBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-50, -179),
        new google.maps.LatLng(84, 179)
    );

    const map = new google.maps.Map({ zoom, center, fitBounds /* ,... */ });

    let lastValidCenter = map.getCenter();

    google.maps.event.addListener(map, 'center_changed', () => {
        if (
            map.getZoom() >= 2 &&
            fitBounds.contains(map.getBounds().getNorthEast()) &&
            fitBounds.contains(map.getBounds().getSouthWest())
        ) {
            lastValidCenter = map.getCenter();
            return;
        }

        map.panTo(lastValidCenter);
    });
}
