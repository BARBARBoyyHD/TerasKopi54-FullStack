const db = require("../config/mysql/db");

const log = {
  async manual(user_id, message) {
    try {
      await db.query(
        "INSERT INTO logs (user_id, message) VALUES (?, ?)",
        [user_id, message]
      );
    } catch (error) {
      console.error("Log error (manual):", error.message);
    }
  },
  // optional: add fromRequest() as discussed earlier
};

module.exports = log;
