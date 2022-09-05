const JWT = require("jsonwebtoken");
const expiry = "1d";

function createToken(user) {
  const token = JWT.sign(
    {
      email: user.email,
    },
    "knkgnkdxngkdnfkhnfknhkdfn",

    {
      expiresIn: expiry,
      subject: user._id.toString(),
    }
  );
  return token;
}

module.exports = {
  createToken,
};
