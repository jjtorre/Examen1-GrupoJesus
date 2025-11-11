const express = require("express");
const app = express();
const PORT = 3000;

app.set("json spaces", 2);

app.get("/", (req, res) => {
  res.json({
    mensaje: "🚀 API funcionando exitosamente!",
    fecha: new Date().toLocaleString(),
    baseDeDatos: process.env.DB_HOST,
    instrucciones: "Puedes visitar /salud para comprobar el estado",
  });
});

app.get("/salud", (req, res) => {
  res.json({
    status: "ok",
    mensaje: "Todo está funcionando correctamente ✅",
    timestamp: Date.now()
  });
});

app.listen(PORT, () => {
  console.log(`✅ API Listo - escuchando en puerto ${PORT}`);
});
