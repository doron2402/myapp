var Settings = function(args) {
    var json_data = require('./' + args.env + '.json');
    return json_data;
};
module.exports = Settings;
