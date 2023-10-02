var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Riki Chandra' });
});

router.get('/profile', function (req, res, next) {
  res.render('profile', { name: 'Riki Chandra', npm: '2024240038' });
});

module.exports = router;
