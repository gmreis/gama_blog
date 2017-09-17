const connection = require('./../config/database')

// POST /api/user
function addUser(req, res) {

  var newUser = {
    "name": req.body.name,
    "login": req.body.login,
    "pass": req.body.pass
  };

  console.log(newUser);

  connection.insert({"user": newUser}, function(err, body, header) {
    if (err) {
      return console.log('[mydb.insert] ', err.message);
    }
    res.send("Hello " + newUser.name + "! I added you to the database.");
  });

}


function login(req, res) {
  res.send("Hello! I added you to the database.");
}

module.exports = { addUser, login }
