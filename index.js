// It will require and run our main fetch function.

const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP((error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("It worked! Returned coordinates:", data);
});

fetchISSFlyOverTimes((error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("It worked! Returned flyover times:", data);
});
