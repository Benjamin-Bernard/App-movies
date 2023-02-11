const user = require("../controllers/user.controller.js");
module.exports = function(app) {

    app.post('/api/user/register', user.register);

    app.post('/api/user/logIn', user.logIn);

    app.get('/api/user/getAllUsers', user.getAllUsers);

    app.put('/api/user/updateAccount', user.updateAccount);

    app.put('/api/user/updatePassword', user.updatePassword);


}