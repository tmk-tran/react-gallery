const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/likes/:id", (req, res) => {
  const id = req.params.id;
  console.log("PUT route in /gallery/ with id of ", id);
  const like = req.body;
  let queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1; `;
  pool
  .query(queryText, [id])
  .then(() => {
      res.sendStatus(204);
  }).catch((err) => {
      console.log("error in PUT", err);
      res.sendStatus(500);
  });
});

// GET Route- original
// router.get("/", (req, res) => {
//   res.send(galleryItems);
// });

// GET route for database (stretch goal)
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "gallery";`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database GET request`, error);
      res.sendStatus(500);
    });
});

// POST Route
router.post("/", (req, res) => {
  const newImage = req.body;
  
  const queryText = `INSERT INTO "gallery" ("path", "description") VALUES ($1, $2);`;
  
  pool
  .query(queryText, [newImage.path, newImage.description])
  .then(() => {
      res.sendStatus(201);
    })
  .catch((error) => {
      console.log(`Error making database POST request`, error);
      res.sendStatus(500);
    });
});

// DELETE Route
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("DELETE route /gallery with id of:", id);
    // sanitize data!
    const queryText = `DELETE FROM "gallery" WHERE "id" = $1;`
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(204); // No Content
      })
    .catch((err) => {
        console.log("error in DELETing item from gallery table", err);
        res.sendStatus(500); // Internal Server Error
    });
})

module.exports = router;
