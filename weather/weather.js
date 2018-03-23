// Weather Api Request
const request = require('request');

var getWeather = (latitude, longitude, callBack) => {
    request ({
        url: `https://api.darksky.net/forecast/f61ffe32d8206e54b804d645d1306b57/${ latitude },${ longitude }`,
        json: true
    },
    function (error, response, body) {
        if (error) {
            callBack ('Unable to connect the darksky.net forecast API !!');
        } else if (response.statusCode === 400) {
            callBack ('Result not found');
        } else if (response.statusCode === 200) {
            callBack (undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callBack (`Server issues - Contact 9206885323`);
        }
    });
};

module.exports = {
    getWeather
}