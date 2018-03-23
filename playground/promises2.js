
var request = require ('request');

var geoCodeAddress = (address) => {
    return new Promise ((errorMessage, result) => {
        var encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        },
        function (error, response, body) {
            if (error) {
                errorMessage('Unable to connect to google services !');
            } else if (body.status === 'ZERO_RESULTS') {
                errorMessage('Weather not found for that address');
            } else if (body.status === 'OK') {
                result({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {
                errorMessage(`Service not found`);
            }
        });
    });
};

geoCodeAddress ('00000000').then ((result) => {
    console.log (JSON.stringify (result, undefined, 2));
}, (errorMessage) => {
    console.log (errorMessage);
});