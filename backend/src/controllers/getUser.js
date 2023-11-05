const User = require("../models/user");

module.exports = getResume = async (userid) => {
  try {
    const user = await User.findOne({ id: userid });
    return user;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
