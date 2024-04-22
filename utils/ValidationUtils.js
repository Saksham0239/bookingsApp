import { validate } from "validate.js";

export const validateEmail = (value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.email = {
      message: "is not valid",
    };
  }

  const validationMsg = validate({ email: value }, { email: constraints });

  return validationMsg ? validationMsg["email"][0] : "";
};

export const validatePassword = (value) => {
  const constraints = {
    password: {
      length: {
        minimum: 6,
        message: "should have atleast 6 characters",
      },
      presence: {
        allowEmpty: false,
      },
    },
  };

  const validationMsg = validate({ password: value }, constraints);

  return validationMsg ? validationMsg["password"][0] : "";
};

export const validateText = (value, id) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== "") {
    constraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z letters",
    };
  }

  const validationMsg = validate({ [id]: value }, { [id]: constraints });

  return validationMsg ? validationMsg[id][0] : "";
};
