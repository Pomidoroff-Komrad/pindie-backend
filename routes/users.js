const usersRouter = require('express').Router();

const {findAllUsers, createUser, findUserById, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword, checkIsUserExists, filterPassword} = require('../middlewares/users');
const {sendAllUsers, sendCreatedUser, sendUpdatedUser, sendDeleteUser, sendMe, sendUserById} = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth.js");


usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
                    "/users",
                    findAllUsers,
                    checkIsUserExists,
                    checkEmptyNameAndEmail,
                    checkAuth,
                    hashPassword,
                    createUser,
                    sendCreatedUser
                );
usersRouter.get('/users/:id', findUserById, filterPassword, sendUserById)
usersRouter.put(
                    "/users/:id",
                    checkEmptyNameAndEmail,
                    checkAuth,
                    updateUser, 
                    sendUpdatedUser
                );
usersRouter.delete(
                    '/users/:id',
                    checkAuth,
                    deleteUser,
                    sendDeleteUser,
                )
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
  