var getUser = (id, callBack) => {
    var user = {
        id,
        name: 'Ram'
    };
    callBack(user);
};  

getUser(77, (userObject) => {
    console.log(userObject);
});