const { body } = require("express-validator");

const projectDataValidateChainableAPI = [
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("Project name is required")
    .isString()
    .withMessage("Project name should be string"),

  ];

module.exports = projectDataValidateChainableAPI;
