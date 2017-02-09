module.exports = function (app) {
    // var helpers = require(__dirname + '/helpers');

    // HTTP get ======================================================================   
    app.get('/', function (req, res) {
        res.render('index');
    });
}

