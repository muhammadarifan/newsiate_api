var express = require("express");
var router = express.Router();
var model = require("../models/index");

router.get("/", function (req, res, next) {
  model.NewsCategory.findAll().then(function (data) {
      res.json({
            status: "success",
            data: data,
      });
  });
});

module.exports = router;
