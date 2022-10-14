export default function getUserCoordinates() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      throw new Error("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position: any) {
    console.log(position)
  }
