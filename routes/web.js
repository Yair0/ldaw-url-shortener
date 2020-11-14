const router = require("express").Router();
const urlController = require("../controllers/UrlController");

router.post("/", urlController.post);
router.get("/redirect/:url_shortened", urlController.get);
router.put("/redirect/:url_shortened", urlController.put);

module.exports = router;
