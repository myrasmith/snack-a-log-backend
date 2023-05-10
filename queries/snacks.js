const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return { result: allSnacks };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

module.exports = { getAllSnacks };
