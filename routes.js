const router = require('express').Router();


(require('./routes/pages'))(router);
(require('./routes/blogs'))(router);

module.exports = router;