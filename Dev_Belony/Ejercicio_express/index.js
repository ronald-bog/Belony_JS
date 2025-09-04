const express = require("express");
const app = express();
const PORT = 3001;
const productoRoute = require("./src/routes/productoRoute");

app.use(express.json());
app.use("/productos", productoRoute);
app.use("/productos:id", productoRoute);
app.use("/productos", productoRoute);
app.use("/productos:id", productoRoute);
app.use("/productos.id", productoRoute);
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
