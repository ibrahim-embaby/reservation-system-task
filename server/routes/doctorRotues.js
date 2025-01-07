const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("Doctors route");
});

module.exports = router;
