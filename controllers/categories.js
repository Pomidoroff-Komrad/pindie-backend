const sendAllCategories = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.categoriesArray));
};
const sendCreatedCategory = (req, res) =>{
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category))
}
const sendCategoryById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};
const sendUpdatedCategory = (req, res) =>{
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({message: "Категория обновлена"}));
}
const sendDeletedCategory = (req, res) =>{
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({message: "Категория удалена"}));
}

module.exports = {sendAllCategories, sendCreatedCategory, sendCategoryById, sendUpdatedCategory, sendDeletedCategory};
