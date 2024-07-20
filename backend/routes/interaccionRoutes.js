const express = require("express");
const router = express.Router();
const Interaccion = require("../models/interaccionSave");

router.post("/nuevainteraccion", (req, res) => {
  const nuevainteraccion = new Interaccion({
    role: req.body.role,
    contentUser: req.body.contentUser,
    contentBot: req.body.contentBot,
  });

  nuevainteraccion
    .save()
    .then(() => {
      res.send("Interacción agregada correctamente");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/obtenerinteracciones", async (req, res) => {
  try {
    const interacciones = await Interaccion.find();
    res.json(interacciones);
  } catch (error) {
    console.error("Error al obtener interacciones:", error);
    res.status(500).send("Error al obtener interacciones");
  }
});

module.exports = router;
