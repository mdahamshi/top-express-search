import { usersStorage } from "../storages/usersStorage.js";
import { body, validationResult } from "express-validator";
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),

  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),

  body("email").trim().isEmail().withMessage("Email must be valid"),

  body("age")
    .optional({ checkFalsy: true })
    .isInt({ min: 18, max: 120 })
    .withMessage("Age must be a number between 18 and 120"),

  body("bio")
    .optional({ checkFalsy: true })
    .isLength({ max: 200 })
    .withMessage("Bio must be 200 characters or less"),
];
export const usersListGet = (req, res) => {
  res.render("pages/home", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

export const usersCreateGet = (req, res) => {
  res.render("pages/createUser", {
    title: "Create user",
    user: {},
  });
};

export const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("pages/createUser", {
        title: "Create user",
        errors: errors.array(),
        user: req.body,
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];
export const usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("pages/updateUser", {
    title: "Update user",
    user: user,
  });
};
export const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("pages/updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  },
];

export const usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

export const userSearch = (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const filteredUsers = usersStorage.getUsers().filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const email = user.email.toLowerCase();
    return fullName.includes(q) || email.includes(q);
  });

  res.render("pages/search", {
    title: `Search results for "${req.query.q}"`,
    users: filteredUsers,
    query: req.query.q,
  });
};
