const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allusers = await User.find({});
  res.setHeader("X-myName", "Saumya");
  return res.json(allusers);
}

async function handleGetUserById(req, res) {
  const finduser = await User.findById(req.params.id);

  if (!finduser) {
    return res.status(404).json({ msg: "User not found" });
  }
  return res.json(finduser);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { first_name: "Shreya" });
  return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.email ||
    !body.last_name ||
    !body.first_name ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
