const UserModel = require("../models/User");

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await UserModel.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuarios" });
  }
};

module.exports = {
  obtenerUsuarios,
};
