const ConsultingData = require("../models/ConsultingData");

const getConsultingData = async (req, res) => {
  try {
    const consultingData = await ConsultingData.find();
    res.json(consultingData);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener Data" });
  }
};

module.exports = {
  getConsultingData,
};
