const Router = require("express").Router;
const UserController = require("../controller/user-contoller");

const router = new Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/active/:link", UserController.active);
router.get("/refresh", UserController.refresh);
router.get("/users", UserController.getUsers);

module.exports = router;
