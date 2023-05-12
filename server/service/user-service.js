const UserModal = require("../models/userModal");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");

class UserService {
  async registration(email, password) {
    const candidate = await UserModal.findOne({ email });
    if (candidate) {
      throw new Error(`User with email: ${email} already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModal.create({
      email,
      password: hashPassword,
      ac: activationLink,
    });
    await mailService.sendActivationMail(email, activationLink);
  }
}

module.exports = new UserService();
