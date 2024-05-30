const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
  
const {findAllCategories, createCategory, findCategoryById, updateCategory, checkIsEmptyName, deleteCategory, checkIsCategoryExists} = require('../middlewares/categories');
const {sendAllCategories, sendCreatedCategory, sendUpdatedCategory, sendDeletedCategory, sendCategoryById} = require('../controllers/categories');
  
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
                        "/categories",
                        findAllCategories,
                        checkIsCategoryExists,
                        checkIsEmptyName,
                        checkAuth,
                        createCategory,
                        sendCreatedCategory
                    );
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)
categoriesRouter.put(
                        '/categories/:id',
                        findAllCategories,
                        checkIsEmptyName,
                        checkIsCategoryExists,
                        checkAuth,
                        findCategoryById,
                        updateCategory,
                        sendUpdatedCategory
                    );
categoriesRouter.delete(
                            "/categories/:id",
                            checkAuth, 
                            deleteCategory,
                            sendDeletedCategory,
                        );

module.exports = categoriesRouter;
  