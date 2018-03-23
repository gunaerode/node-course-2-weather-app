// Require modules
const request = require('request');

// Only GeoCode functionalities
var geoCodeAddress = (address, callBack) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },
    function (error, response, body) {
        if (error) {
            callBack('Unable to connect to google services !');
        } else if (body.status === 'ZERO_RESULTS') {
            callBack('Weather not found for that address');
        } else if (body.status === 'OK') {
            callBack (undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            callBack (`Service not found`);
        }
    });
};

// Define functions
module.exports = {
    geoCodeAddress
};
