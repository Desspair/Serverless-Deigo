const express = require("express");
const Orders = require("../models/Orders");
const router = express.Router();

//Listar
router.get("/", (req, res) => {
  Orders.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

//Buscar un elemento segun su id
router.get("/:id", (req, res) => {
  Orders.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

//Crear un elemento
router.post("/", (req, res) => {
  Orders.create(req.body).then((x) => res.status(201).send(x));
});

//Actualizar un elemento segun su id
router.put("/:id", (req, res) => {
  Orders.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

//Borrar un elemento segun su id
router.delete("/:id", (req, res) => {
  Orders.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
