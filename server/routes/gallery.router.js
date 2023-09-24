const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log('like clicked for: ',req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

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

module.exports = router;
