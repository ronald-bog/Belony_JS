const express = require('express');
const app = express();
const usuariosRouter = require('./src/routes/usuariosRouter');
const info = require('./src/middlewares/middlewares');
const PORT = 3000;

app.use(info);
app.use(express.json());

app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});