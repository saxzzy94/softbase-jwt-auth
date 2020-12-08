const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");

//Database
const db = new JsonDB(new Config("DataBase.json", false, false, "/"));

//index Route
router.get("/", (req, res) => {
	res.send("Welcome to my api");
});

//protected route
router.get("/post", authenticate, (req, res) => {
	jwt.verify(req.token, process.env.ACCESS_TOKEN, (err, user) => {
		if (err) return res.sendStatus(403);
		else res.json({ message: "welcome back", user });
	});
});


//Register Route
router.post("/register", (req, res) => {
	//check if user already existed

	const user = db.getData("/user").find(user => user.email === req.body.email);

	if (user) {
		return res.status(400).json({
			email: "user already existed",
		});
	} else {
		const newUser = {
			id: req.body.id,
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		};
		db.push("/user[]", newUser);
		db.save();

		res.json({
			name: req.body.name,
			email: req.body.email,
		});
	}
});

//Login Route
router.post("/login", (req, res) => {
	//Find user by emaill
	const user = db.getData("/user").find(user => {
		return user.email == req.body.email;
	});

	// Check for user
	if (user.email !== req.body.email) {
		return res.status(404).json({
			email: "user not found",
		});
	}

	if (user.email == req.body.email && user.password == req.body.password) {
		const payload = {
			id: user.id,
			name: user.name,
			email: user.email,
		};

		jwt.sign(payload, process.env.ACCESS_TOKEN, (err, token) => {
			res.json({ token });
		});
	}
});

//Verify user
function authenticate(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (token == null) return res.sendStatus(401);
	req.token = token;
	next();
}


module.exports = router;
