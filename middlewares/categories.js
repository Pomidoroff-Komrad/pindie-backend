const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
}
const findCategoryById = async (req, res, next) =>{
  try{
    req.category = await categories.findById(req.params.id)
    next()
  } catch(err){
    res.status(404).json({ message: "Категория не найдена"})
  }
}
const createCategory = async (req, res, next) =>{
    try{
      req.category = await categories.create(req.body);
      next()
    } catch(err){
      res.status(400).json({ message: "Не удалось создать категорию"})
    }
}
const updateCategory = async (req, res, next) =>{
  try{
      req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
      next()
  } catch(err){
      res.status(400).json({message: 'Не удалось обновить категорию'})
  }
}
const checkIsEmptyName = async (req, res, next) =>{
  if (!req.body.name){
    res.status(400).send(JSON.stringify({ message: "Введите название категории"}))
  } else {
    next();
  }
}
const deleteCategory = async (req, res, next) => {
  try{
    req.categories = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch(err){
    res.status(400).json({ message: 'Не удалось удалить категорию'})
  }
}

const checkIsCategoryExists = async (req, res, next) => {
  const isInArray = req.categoriesArray.find((category) => {
    return req.body.name === category.name;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
  } else {
    next();
  }
};

module.exports = {findAllCategories,
                 findCategoryById,
                 createCategory,
                 updateCategory,
                 checkIsEmptyName,
                 checkIsCategoryExists,
                 deleteCategory,
                }; 