var express = require("express");
var nodemailer = require("nodemailer");
var app = exports.app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'Y9m683EhtJz7fsRtvjbxxcsK'}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.locals.siteTitle = 'DropnIn';
app.locals.showPageHeader = true;

require("./routes")(app);