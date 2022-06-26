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

const fetchCoordsByIP = function (callback) {
  const url =
    "https://api.ipbase.com/json/?apikey=AG8HAenbMGC1MigPzwlB56Y6aCRMVQIfc5fNRjVq";
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    let data = {};
    data.latitude = JSON.parse(body).latitude;
    data.longtitude = JSON.parse(body).longitude;
    // if non-200 status, assume server error
    if (response.statusCode != 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    if (data) {
      callback(null, data);
    }
  });
};

const fetchISSFlyOverTimes = function (callback) {
  const url =
    "https://iss-pass.herokuapp.com/json/?lat=43.70317077636719&lon=-79.51219177246094";
  request(url, (error, response, body) => {
    if (error) {
      return error, null;
    }
    if (response.statusCode != 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass time. Response: ${body}`;
      return callback(Error(msg), null);
    }
    let data = JSON.parse(body).response;
    if (data) {
      callback(null, data);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
