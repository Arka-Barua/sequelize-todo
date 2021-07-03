const express = require("express");
const router = express.Router();
const db = require("../models");

// get todos
router.get("/all", (req, res) => {
  db.Todo.findAll().then((todos) => res.send(todos));
});

// create todo

router.post("/create", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  }).then((submittedTodo) => res.send(submittedTodo));
});

// get single item by Id
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.send(todo));
});

// delete todo

router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("deleted"));
});

// Update todo

router.put("/edit", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => res.send("updated"));
});

module.exports = router;
