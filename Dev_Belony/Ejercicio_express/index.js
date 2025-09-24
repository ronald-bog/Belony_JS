const express = require("express");
const app = express();
const PORT = 3001;
const productoRoute = require("./src/routes/productoRoute");
const movimientoRoute = require("./src/routes/movimientoRoute");
const loginRoute = require("./src/routes/loginRoute");

app.use(express.json());
app.use("/login", loginRoute);
app.use("/productos", productoRoute);
app.use("/movimientos", movimientoRoute);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    mensaje: `El endpoint '${req.url}' no existe.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
