const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Get users
// @route GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
});

// @desc Set users
// @route POST /api/users
// @access Private
const setUser = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name");
  }

  const user = await User.create({
    name: req.body.name,
    species: req.body.species,
    breed: req.body.breed,
    age: req.body.age,
  });
  res.status(200).json(user);
});

// @desc Update user
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser,
};