const expressAsyncHandler = require("express-async-handler");
const createHttpError = require("http-errors");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateJWT = (roles) =>
  expressAsyncHandler((req, res, next) => {
    const token = req.cookies.accessToken || req.headers.authorization;

    if (token) {
      jwt.verify(token, process.env.SECRET_KEY_JWT, (err, user) => {
        if (err) return next(createHttpError.Forbidden("authencated"));
        if (roles && !roles.some((role) => role === user.role))
          return next(createHttpError.Forbidden("forbidden"));
        req.user = user;
        next();
      });
    } else {
      throw new Error("authencation");
    }
  });

module.exports = authenticateJWT;
