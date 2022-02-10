
// Weather App - Starting

const yargs = require ('yargs');
const axios = require ('axios');

// Google Apis Geocode HTTP request
const yargsArg = yargs
    .options ({
        'address': {
            alias: 'a',
            describe: 'Address to weather for',
            demand: true,
            string: true
        }
    })
    .help ()
    .alias ('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(yargsArg.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get (geoCodeUrl).then ((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error ('Unable to find that address');
    }
    if (response.data.error_message) {
        throw new Error('You have exceeded your daily request quota for this API.');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/<api-key>/${latitude},${longitude}`;
    console.log (response.data.results[0].formatted_address);
    // Weather Request
    return axios.get (weatherUrl);
}).then ((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log('---- Temperature Details ----');
    console.log(`Temperature: ${temperature}`);
    console.log(`Apparent Temperature: ${apparentTemperature}`);
    console.log('------------------------------');
}).catch ((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log ('Server Not Found');
    } else {
        console.log (error.message);
    }
});