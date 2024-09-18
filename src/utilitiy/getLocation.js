import axios from 'axios';

const API_KEY = 'AIzaSyAwFNh_TQiUICVulmablBlsudim_M9Sh54'; // Replace with your API key

/**
 * Fetches location name from latitude and longitude using Google Maps Geocoding API.
 * @param {number} lat - Latitude.
 * @param {number} lng - Longitude.
 * @returns {Promise<string>} - A promise that resolves to the location name.
 */
const fetchLocationName = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    ).then((res) => { console.log(res) }, (err) => {
      console.log(err)
    });
    const results = response.data.results;

    if (results.length > 0) {
      return await results[0].formatted_address;
    } else {
      return 'Location not found';
    }
  } catch (error) {
    console.error('Error fetching location name:', error);
    return 'Error fetching location';
  }
};

export default fetchLocationName;
