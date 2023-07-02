function obtenerUbicacionActual(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const coords = {
          lat: latitude,
          lng: longitude,
        };
        callback(coords);
        console.log(coords);
      },
      (error) => {
        console.log("Error al obtener la ubicación: " + error.message);
      }
    );
  } else {
    console.log("Geolocalización no soportada en este navegador");
  }
}

function initMap() {
  const mapDiv = document.getElementById("mapDiv");
  const directionsService = new google.maps.DirectionsService();

  obtenerUbicacionActual(function (userLocation) {
    const map = new google.maps.Map(mapDiv, {
      zoom: 12,
      center: userLocation,
    });
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: true,
    });

    const originMarker = new google.maps.Marker({
      map: map,
      position: userLocation,
      title: "Tu ubicación",
      label: {
        text: "Tu Ubicación Actual",
        color: "#000",
        fontWeight: "bold",
      },
    });

    const destinoMarker = new google.maps.Marker({
      position: { lat: 12.265139, lng: -86.563057 },
      map: map,
      icon: "../img/logomarker.png",
      title: "Soy Rodian Matey :v",
    });

    const request = {
      origin: originMarker.position,
      destination: destinoMarker.position,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, function (result, status) {
      if (status === "OK") {
        console.log(request.origin);
        directionsRenderer.setDirections(result);
      }
    });
  });
}
