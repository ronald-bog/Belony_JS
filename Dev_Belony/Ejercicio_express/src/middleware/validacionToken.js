const jwt = require("jsonwebtoken");
require("dotenv").config({ quiet: true });

async function AuthToken(req, res, next) {
  try {
    const authConBearer = req.headers.authorization;

    if (!authConBearer) {
      return res.status(401).json({ message: "Token requerido" });
    }

    const token = authConBearer.split(" ")[1];

    const verificarToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verificarToken;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = { AuthToken };
