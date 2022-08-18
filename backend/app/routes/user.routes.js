const user = require("../controllers/user.controller");
module.exports = function(app) {

    app.post('/api/user/register', user.register);

    app.post('/api/user/logIn', user.logIn);

    app.get('/api/user/getAllUsers', user.getAllUsers);

    app.update('/api/user/updateAccount', user.updateAccount);

    app.update('/api/user/updatePassword', user.updatePassword);


}