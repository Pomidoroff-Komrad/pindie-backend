const users = require('../models/user');
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}
const findUserById = async (req, res, next) => {
  try{
    req.user = await users.findById(req.params.id);
    next()
  } catch(err){
    res.status(404).json({ message: "Пользователь не найден"})
  }
}
const createUser = async (req, res, next) =>{
  try{
      req.games = await users.create(req.body);
      next();
  } catch(err){
      res.status(400).json({ message: "Не удалось создать пользователя"})
  }
}
const updateUser = async (req, res, next) =>{
  try{
      req.user = await users.findByIdAndUpdate(req.params.id, req.body);
      next()
  } catch(err){
      res.status(400).json({message: 'Не удалось обновить пользователя'})
  }
}
const checkEmptyNameAndEmail = async (req, res, next) =>{
  if (!req.body.username || !req.body.email) {
    res.status(400).send({ message: "Введите имя и email"});
  } else{
    next();
  }
}
const deleteUser = async (req, res, next) =>{
  try{
      req.user = await users.findByIdAndDelete(req.params.id);
      next();
  } catch(err){
      res.status(400).json({ message: 'Не удалось удалить пользователя'})
  }
}
const hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
}; 
const filterPassword = (req, res, next) => {
  const filterUser = (user) => {
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  };
  if (req.user) {
    req.user = filterUser(req.user);
  }
  if (req.usersArray) {
    req.usersArray = req.usersArray.map((user) => filterUser(user));
  }
  next();
};
const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.usersArray.find((user) => {
    return req.body.email === user.email;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
  } else {
    next();
  }
};

module.exports = {findAllUsers, findUserById, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword, filterPassword, checkIsUserExists};