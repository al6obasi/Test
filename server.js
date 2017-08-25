const express = require('express')
const app = express()

require('./server/config/middleware.js') (app,express); 
require('./server/config/routes.js') (app,express);

//*****************
/*   Port Configeration */

app.listen(3000, function () {
  console.log(' app listening on port 3000')
})
//=============================================================================
/*									Database								 */
//=============================================================================
let mongoose = require ('mongoose');
let mongoURI = 'mongodb://127.0.0.1/Test_MediaCorp';
	mongoose.connect(mongoURI);
	db = mongoose.connection;

	db.once('open',function () {
		console.log('... mongoDB  Test_MediaCorp  is open');
	});

