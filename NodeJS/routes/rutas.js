const express = require("express"); //importar express
const router = express.Router(); //crear un router

router.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router;