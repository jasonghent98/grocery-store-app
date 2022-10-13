export default function getUserCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      throw new Error("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position: any) {
    const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
    return coordinates;
  }