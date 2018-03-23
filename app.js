
// Weather App - Starting

const yargs = require ('yargs');
const geocode = require ('./geocode/geocode'); // if its is a js file does not need .js extenction
const weather = require ('./weather/weather');

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

geocode.geoCodeAddress (yargsArg.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log (errorMessage);
    } else {
        var latitude = result.latitude;
        var logitude = result.longitude;
        var address = result.address
        console.log(address);
        // Weather API Call
        weather.getWeather(latitude, logitude, (errorMessage, result) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log ('---- Temperature Details ----');
                console.log (`Temperature: ${ result.temperature }`);
                console.log (`Apparent Temperature: ${result.apparentTemperature }`);
                console.log ('------------------------------');
            }
        });
    }
});

 