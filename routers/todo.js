const router = require("express").Router();
const todo = require("../models/todo.models");

router.route("/").get((req, res) => {
  todo
    .find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(400).json("error" + err);
    });
});

router.route("/add").post((req, res) => {
  const title = req.body.title;

  const newAdd = new todo({ title });

  newAdd
    .save()
    .then((res) => {
      res.json("add successfully");
    })
    .catch((err) => {
      res.status(400).json("error" + error);
    });
});

module.exports = router;
