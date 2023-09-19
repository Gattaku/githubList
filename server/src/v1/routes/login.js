const router = require("express").Router();
const fetch = require("../controllers/fetch");

router.get("/", async (req, res) => {
    const { user } = req.body
    const userInfo = await fetch.getUser(user);
    res.status(200).send(userInfo);

})

module.exports = router;