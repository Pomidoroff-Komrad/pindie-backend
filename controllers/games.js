const sendAllGames = (req, res) =>{
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.gamesArray));
}
const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
  };
const sendCreatedGame = (req, res) =>{
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game))

}
const sendUpdatedGame = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({message: "Игра обновлена"}));
}
const sendDeleteGame = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({message: "Игра удалена"}));
}
module.exports = {sendAllGames, sendGameById, sendCreatedGame, sendUpdatedGame, sendDeleteGame};