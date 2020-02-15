const routes = require('express').Router();
let loginController = require("../controller/LoginController");

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected' });
})

routes.post('/login', loginController.post);

module.exports = routes;