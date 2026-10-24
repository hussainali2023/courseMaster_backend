// utility to generate JWT token

const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET || "coursemaster-super-secret-jwt-key-2026";
  return jwt.sign(payload, secret, { expiresIn: "30d" });
};

module.exports = generateToken;
