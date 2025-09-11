const express = require("express");
const app = express();
const PORT = 3001;
const productoRoute = require("./src/routes/productoRoute");
const movimientoRoute = require("./src/routes/movimientoRoute");

app.use(express.json());
app.use("/productos", productoRoute);
app.use("/movimientos", movimientoRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
