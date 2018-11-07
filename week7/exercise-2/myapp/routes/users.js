var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.get("", (req, res) => {
  res.end("Invalid use");
});
router.post("", (req, res) => {
  //res.contentType("application/json");
  let firstname = req.body.firstname,
      lastname = req.body.lastname;
  /*let name = {
    "First Name": firstname,
    "Last Name": lastname
  };*/
  console.log(`First Name: ${firstname}\nLast Name: ${lastname}`);
  //res.end(JSON.stringify(name));
  res.end();
});

module.exports = router;
