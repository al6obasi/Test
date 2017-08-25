let UserController = require ('../database/User/UserController.js');
module.exports = function (app, express) {
	
/*                              User Route */
// **************************************************************************//
		app.post('/api/signin', UserController.signin);
		app.post('/api/signup',UserController.signup);
};

