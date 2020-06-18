const getStats = (req, res) => {
    console.log("hitt")
    const db = req.app.get("db");
    db.stats(84).then(stats => {
        console.log("hitt")
        res.status(200).json(stats);
    });
};
module.exports = {
    getStats
}