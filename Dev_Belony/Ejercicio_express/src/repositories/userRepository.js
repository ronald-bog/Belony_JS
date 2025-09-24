const { pool2 } = require("../config/db");

async function getUser() {
  const sql = "select * from users";
  const [user] = await pool2.execute(sql);
  return user[0];
}

module.exports = { getUser };
