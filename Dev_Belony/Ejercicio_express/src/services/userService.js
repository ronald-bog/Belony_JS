const userRepository = require("../repositories/userRepository");
const jwt = require("jsonwebtoken");
require("dotenv").config({ quiet: true });

async function getUser(user) {
  try {
    const { userCliente, passwordCliente } = user;
    const { user_db, password_db } = await userRepository.getUser();
    if (userCliente === user_db && passwordCliente === password_db) {
      const token = jwt.sign({}, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });

      return {
        success: true,
        message: "Credencial valida",
        token: token,
      };
    } else {
      return {
        success: false,
        message: "User o password incorrectos",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al acceder a la base de datos",
    };
  }
}

module.exports = { getUser };
