var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  let staff = [{
    facebook: {
      headAdmin: [],
      admin: [],
      moderator: []
    },
    discord: {
      headAdmin: [],
      admin: [],
      moderator: [],
      botManager: []
    }
  }]
  res.render('index', { facebook: staff.facebook, discord: staff.discord });
});


module.exports = router;
