const sendAllUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.usersArray));
};
const sendUserById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};
const sendCreatedUser = (req, res) =>{
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user))
}
const sendUpdatedUser = (req, res) =>{
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({message: "Пользователь обновлен"}));
}
const sendDeleteUser = (req, res) =>{
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({message: "Пользователь удален"}));
}
const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

module.exports = {sendAllUsers, sendUserById, sendCreatedUser, sendUpdatedUser, sendDeleteUser, sendMe};
