const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 5000;
const User = require("./models/User");
require("dotenv").config();

const mongoose = require("mongoose");
const objetobd = mongoose.connection;
mongoose.connect(process.env.DB_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
objetobd.on("connected", () => {
  console.log("Conexion correcta a MongoDB");
});
objetobd.on("error", () => {
  console.log("Conexion incorrecta a MongoDB");
});

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const interaccionRoutes = require("./routes/interaccionRoutes");
app.use("/interacciones", interaccionRoutes);

const botRoutes = require("./routes/botRoutes");
app.use("/bot", botRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
