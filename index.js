const { fetchISSFlyOverTimes } = require("./iss");

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

fetchISSFlyOverTimes((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  printPassTimes(passTimes);
});
