// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const gallery = require('./routes/gallery.router.js');
// const PORT = process.env.PORT || 5000;

// /** ---------- MIDDLEWARE ---------- **/
// app.use(bodyParser.json()); // needed for axios requests
// app.use(express.static('build'));

// /** ---------- EXPRESS ROUTES ---------- **/
// app.use('/gallery', gallery);

// /** ---------- START SERVER ---------- **/
// app.listen(PORT,  () => {
//     console.log('Listening on port: ', PORT);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer'); // Import Multer
const path = require('path'); // Import the 'path' module
const gallery = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/

app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- MULTER CONFIGURATION ---------- **/

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store uploaded files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate a unique filename
  },
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage: storage });

/** ---------- EXPRESS ROUTES ---------- **/

// Define a route for image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  // The uploaded file is available in req.file
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const imagePath = req.file.path;
  // Handle saving the imagePath to your database or wherever you need it
  res.status(200).send('Image uploaded successfully!');
});

app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
