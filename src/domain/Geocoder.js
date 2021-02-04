import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then((results) => {
      // const data = results.data;
      const data = {
        status: 'OK',
        // status: 'ZERO_RESULTS',
        // status: 'REQUEST_DENIED',
        results: [{
          formatted_address: '日本、〒105-0011 東京都港区芝公園４丁目２−８',
          geometry: {
            location: {
              lat: 35.6585805,
              lng: 139.7454329,
            },
          },
        }],
      };
      const status = data.status;
      const result = data.results[0];
      if (typeof result === 'undefined') {
        return { status };
      }

      const address = result.formatted_address;
      const location = result.geometry.location;
      return { status, address, location };
    })
;

export const reverseGeocode = () => null;
