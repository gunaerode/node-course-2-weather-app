
// Asynchronus - Promise
var asyncAdd = (first, second) => {
    return new Promise ((resolve, reject) => {
        if (typeof first === 'number' && typeof second === 'number') {
            resolve(first + second);
        } else {
            reject ('Parameters must be numbers !');
        }
    });
};

// Way Two
asyncAdd(7, '3').then((result) => {
    console.log(`Result: ${result}`);
    return asyncAdd(result, 7);
}).then((resultTwo) => {
    console.log(`Result Two: ${resultTwo}`);
}).catch((errorMessage) => {
        console.log(errorMessage);
});

// Way One

/* asyncAdd (7, 3).then ((result) => {
    console.log (`Result: ${ result }`);
    return asyncAdd (result, '7');
}, (errorMessage) => {
    console.log (errorMessage);
}).then((resultTwo) => {
        console.log(`Result Two: ${resultTwo}`);
    }, (errorMessageTwo) => {
        console.log(errorMessageTwo);
    }); */

/* // Only one time will call in call back we can call as many as time want we can call
var somePromises = new Promise ((resolve, reject) => {
    setTimeout (() => {
        // resolve ('It\'s working...');
        reject('Error: Unable to process');
    }, 4000);
});

somePromises.then ((message) => {
    console.log (message);
}, (errorMessage) => {
    console.log (errorMessage);
}); */