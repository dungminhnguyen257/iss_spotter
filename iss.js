// It will contain most of the logic for fetching the data from each API endpoint.

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  const url = "https://api.ipify.org?format=json";

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    if (data) {
      callback(null, data);
    }
  });
};
const ip = "";
const fetchCoordsByIP = function (ip, callback) {
  const url =
    "https://api.ipbase.com/json/?apikey=AG8HAenbMGC1MigPzwlB56Y6aCRMVQIfc5fNRjVq";
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    let data = {};
    data.latitude = JSON.parse(body).latitude;
    data.longtitude = JSON.parse(body).longitude;
    console.log(response);
    if (data) {
      callback(null, data);
    }
    // if non-200 status, assume server error
    if (response.statusCode != 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
