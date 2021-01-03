const { Router } = require("express");

function createMoodsRouter(db) {
  const router = Router();

  router.get("/moods", async (req, res) => {
    const [moods] = await db.execute("SELECT * from moods;");
    res.json(moods);
  });

  

  return router;
}

module.exports = createMoodsRouter;
