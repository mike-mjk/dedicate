const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const getDedications = (req, res) => {
  pool.query("SELECT * FROM dedications", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createDedication = (req, res) => {
  const { name, message } = req.body;

  pool.query(
    "INSERT INTO dedications (name, message) VALUES ($1, $2)",
    [name, message],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Dedication created`);
    }
  );
};

module.exports = {
  createDedication,
  getDedications
};
