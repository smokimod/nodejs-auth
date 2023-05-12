const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "jwt-secret-key";
const JWT_REFRESH_SECRET_KEY = "jwt-secret-key";
const tokenModel = requre("../models/tokenModal");

class TokenService {
  generateToken() {
    const accesToken = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
    return {
      accesToken,
      refreshToken,
    };
  }
  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
