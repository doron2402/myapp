if (!global.AA) {
    global.AA = {};
}
//GET ENVIORMENT
var environment = 'dev';
if (process.argv['env']) {
    switch (process.argv['env'].toLowerCase()) {
        case 'stage':
            environment = 'stage';
            break;
        case 'prod':
            environment = 'prod';
            break;
        default:
            environment = 'dev';
            break;
    }
}
//Modules
AA.async = require('async');
AA._ = require('underscore');
AA.Hapi = require("hapi");
AA.Joi = require("joi");
AA.Mongo = require('mongoose');

//Settings
AA.Settings = require('./settings')({
    env: environment
});
//Data Sets
AA.MongoDB = AA.Mongo.connect(AA.Settings.MONGODB.URL);

// AA.NEO4J.getNode
// AA.Validation = require('./adapters/validate');
// AA.Routes = require('./routes');
// AA.Schema = require('./schemas');
// AA.Models = require('./models');
// AA.Controllers = require('./controllers');

AA.server = new AA.Hapi.Server(AA.Settings.PORT, AA.Settings.HOST);

// AA.server.route([
//     AA.Routes.external.follow.routes.follow,
//     AA.Routes.external.follow.routes.unfollow,
//     AA.Routes.external.follow.routes.check_relationship
// ]);

AA.server.start(function() {
    console.log("Hapi server started @", AA.server.info.uri);
});
