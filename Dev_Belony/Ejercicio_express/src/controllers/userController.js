const userService = require("../services/userService");

async function getUser(req, res) {
  const user = req.body;
  const result = await userService.getUser(user);
  if (result.success) {
    res.status(200).json({
      message: result.message,
      token: result.token,
    });
  } else {
    res.status(500).json({ succes: result.success, message: result.message });
  }
}

module.exports = { getUser };
