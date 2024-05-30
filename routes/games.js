const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkIsVoteRequest, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkUniqueTitle} = require("../middlewares/games");
const {sendAllGames, sendCreatedGame, sendUpdatedGame, sendDeleteGame, sendGameById} = require("../controllers/games");

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
                    "/games",
                    findAllGames,
                    checkIsGameExists,
                    checkIfCategoriesAvaliable,
                    checkEmptyFields,
                    checkAuth,
                    createGame,
                    sendCreatedGame
                );
gamesRouter.get("/games/:id", findGameById, sendGameById)
gamesRouter.put(
                    "/games/:id",
                    findGameById,
                    findAllGames,
                    checkIsVoteRequest,
                    checkIfCategoriesAvaliable,
                    checkEmptyFields,
                    // checkIsGameExists, не надо
                    checkUniqueTitle, //новый миддлвар
                    checkAuth,
                    updateGame,
                    sendUpdatedGame,
                );
gamesRouter.delete(
                    '/games/:id',
                    checkAuth,
                    deleteGame,
                    sendDeleteGame,
                );

module.exports = gamesRouter;