import User from "../models/UserModel.js";
import DEFAULT_USERS from "../constants/starting-users.js";

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  //console.log(users);
  return users;
};

const addDefaultUsers = async (req, res) => {
  await User.create(...DEFAULT_USERS);
};

export { getAllUsers, addDefaultUsers };
