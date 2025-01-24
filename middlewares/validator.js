const { check, validationResult } = require("express-validator");

exports.registerAsLawyerRules = () => [
  check("email", "this field must be valid email").isEmail(),
  check("password", "password should be greater than 6").isLength({
    min: 6,
    max: 20,
  }),
  check("firstName", "firstname is required").notEmpty(),
  check("lastName", "lastName is required").notEmpty(),
  check("specialty", "specialty is required").notEmpty(),
];

exports.registerAsClientRules = () => [
  check("email", "this field must be valid email").isEmail(),
  check("password", "password should be greater than 6").isLength({
    min: 6,
    max: 20,
  }),
  check("firstName", "firstname is required").notEmpty(),
  check("lastName", "lastName is required").notEmpty(),
];

exports.loginRules = () => [
  check("email", "this field must be valid email").isEmail(),
  check("password", "password should be greater than 5").isLength({
    min: 5,
    max: 20,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
