/*Esta función obtiene la ubicación del usuario con un callback como parametro el cual obtendra la ubicación de cumplirse de lo contrara devolvera null*/

function obtenerUbicacionActual(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const coords = {
          lat: latitude,
          lng: longitude,
        };
        callback(coords);
      },
      (error) => {
        alert(
          "Activar ubicación para mostrar ruta hacia nuestras instalaciones: " +
            error.message
        );
        callback(null); // Llama al callback con valor nulo en caso de error
      }
    );
  } else {
    alert("Geolocalización no soportada en este navegador");
    callback(null); // Llama al callback con valor nulo si no se admite la geolocalización
  }
}

function initMap() {
  const mapDiv = document.getElementById("mapDiv");
  const directionsService = new google.maps.DirectionsService();

  obtenerUbicacionActual(function (userLocation) {
    const map = new google.maps.Map(mapDiv, {
      zoom: 12,
      center: userLocation ? userLocation : { lat: 12.265139, lng: -86.563057 }, // Usa la ubicación actual si está disponible, de lo contrario, usa ubicación predeterminada
    });

    const destinoMarker = new google.maps.Marker({
      position: { lat: 12.265139, lng: -86.563057 },
      map: map,
      icon: "../img/logomarker.png",
      title: "Calle 123 Paris",
    });

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Add a click listener for each marker, and set up the info window.
    destinoMarker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(destinoMarker.getTitle());
      infoWindow.open(destinoMarker.getMap(), destinoMarker);
    });

    if (userLocation) {
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
      });

      const originMarker = new google.maps.Marker({
        map: map,
        position: userLocation,
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
    }
  });
}
