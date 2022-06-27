const request = require("request");

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

module.exports = {
  fetchISSFlyOverTimes,
};
