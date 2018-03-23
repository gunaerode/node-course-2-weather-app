console.log ("Async App");

setTimeout (() => {
    console.log ("First Call function");
}, 2000);

setTimeout (() => {
    console.log ('Second Call function');
}, 0);

console.log ("Async App Ends");