const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");

async function login(req, res, next) {
  const { email, password } = req.body;
  // console.log(req.body);
  try {
    const { user, error } = await UserModel.authenticate()(email, password);
    // console.log(user);
    if (error) {
      return next(new HTTPError(401, error.message));
    }
    const token = JWTService.createToken(user._id);
    console.log(token);
    res.json({ token });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};
