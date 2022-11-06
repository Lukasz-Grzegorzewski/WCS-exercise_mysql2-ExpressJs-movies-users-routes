const { query } = require("./database");
const database = require("./database");

const getUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([users]) => res.status(200).json(users))
    .catch((err) => console.error(err)
    )
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([user]) => {
      user[0] != null ?
        res.status(200).json(user[0]) :
        res.status(404).send("Not Found")
    })
    .catch((err) => console.error(err))
};

module.exports = {
  getUsers,
  getUserById,
};
