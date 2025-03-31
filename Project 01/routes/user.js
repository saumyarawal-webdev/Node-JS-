const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");
const router = express.Router();

// Route
// router.get("/", async (req, res) => {
//   const users = await User.find({});
//   const html = `<ul>
//       ${users
//         .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
//         .join("")}
//       </ul>`;
//   res.send(html);
// });

//REST API
router.get("/", handleGetAllUsers);

router.get("/:id", handleGetUserById);

router.post("/", handleCreateNewUser);

router.patch("/:id", handleUpdateUserById);

router.delete("/:id", handleDeleteUserById);

module.exports = router;
