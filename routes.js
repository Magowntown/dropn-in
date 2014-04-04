module.exports = function (app) {
// set up the routes themselves
app.get('/', function(req, res) {
  if (req.session.logged) {
    res.render('map', {
      pageTitle: "Home",
      session: req.session
    });
  } else {
    res.redirect('/welcome');
  }
});

app.get('/welcome', function(req, res) {
  res.render('welcome', {
    pageTitle: "Welcome",
    session: req.session,
    showPageHeader: false
  });
});

app.get('/aboutUs', function(req, res) {
  res.render('aboutUs', {
    pageTitle: "About Us",
    session: req.session
  });
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    pageTitle: "Contact",
    session: req.session
  });
});

app.post('/contact', function(req, res) {
  var transport = nodemailer.createTransport();
var messageOptions = { from: req.body.fullName+" <"+req.body.email+">", // sender address
to: "amagown@gmail.com", // list of receivers
subject: "Contact Message From Dropn.In", // Subject line
text: "New Contact Message from Dropn.In\nFull text of message below:\n\n"+req.body.message
};
transport.sendMail(messageOptions, function(error, response){
  if(error){
    res.json({type: 1, message: ["Email not sent successfully."]});
    return;
  }

// response.statusHandler only applies to 'direct' transport
response.statusHandler.once("failed", function(data){
  res.json({type: 1, message: ["Email not sent successfully."]});
});

response.statusHandler.once("requeue", function(data){
  res.json({type: 1, message: ["Email not sent successfully."]});
});

response.statusHandler.once("sent", function(data){
  res.json({type: 0, message: ["Email sent successfully."]});
});
});
});

app.get('/login', function(req, res) {
  if (req.session.logged) {
    res.render('index', {
      pageTitle: "Home",
      session: req.session
    });
  } else {
    res.render('login', {
      pageTitle: "Login",
      session: req.session
    });
  }
});

app.get('/signUp', function(req, res) {
  if (req.session.logged) {
    res.render('index', {
      pageTitle: "Home",
      session: req.session
    });
  } else {
    res.render('signUp', {
      pageTitle: "Sign Up",
      session: req.session
    });
  }
});

app.get('/map', function(req, res) {
  res.render('map', {
    pageTitle: "Home",
    showPageHeader: false,
    session: req.session
  });
});

app.post('/deploy', function(req, res) {
  var sys = require('sys')
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("git pull", puts);
  res.send(200, {status: "successful"});
});
};