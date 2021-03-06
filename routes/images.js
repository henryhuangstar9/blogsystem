var express = require("express");
var router = express.Router();
var multer = require('multer');

var upload = multer({ dest: 'uploads/' });

router.post("/", upload.single('file'), function(req, res) {
    // console.log("upload image");
    // console.log("req.file");
    // console.log(req.file);
    // console.log("http://"+ req.headers.host + "/" + req.file.path);
    res.send({location:"http://"+ req.headers.host + "/" + req.file.path});
});

module.exports = router;