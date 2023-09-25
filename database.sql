/* Use the following SQL to create a database of images to display in gallery */
/* Database name is 'react_gallery' */

CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  path varchar(300) NOT NULL,
  description TEXT,
  likes INT DEFAULT 0
);

INSERT INTO gallery ("path", "description")
VALUES ('images/IMG_E25.jpeg', 'Big Sky'),
       ('images/IMG_2CE.jpeg', '`Lil Kaeden as a baby'),
       ('images/IMG_8304.jpeg', 'Ninja 636R'),
       ('images/IMG_8360.jpeg', 'Me and lil man'),
       ('images/IMG_8442.jpg', 'My lil ninja');

INSERT INTO gallery ("path", "description")
VALUES ('https://www.treehugger.com/thmb/o2GZPpDoa8hVq9ci9AZvgF5P6JQ=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2015__08__leptopelis-vermiculatus-tree-frog-9eac464118ed4ca8a1fbff8907295258.jpg', 'Ribbit, bro'),
('http://amphibianrescue.org/amphibianwordpress/wp-content/uploads/2011/07/Granular-glass-frog-Cochranella-granulosa-Kristen-Martyn-Flickr.jpg', 'Bro...guess what? ...Ribbit'),
('https://i.pinimg.com/originals/fb/30/d0/fb30d0ef2fd6304ebcb837a59afb8817.jpg', 'Yes, yes my good sir'),
('https://www.freecodecamp.org/news/content/images/2019/07/this-is-javascript.jpeg', '...Javascript, bro');

SELECT * FROM gallery;

/* Want to increase likes? Finger tired from clicking the like button? */
/* Try the following SQL to instantly add some flair to your page! */

UPDATE "gallery" SET "likes" = 150 WHERE "id" = 1;

UPDATE "gallery" SET "likes" = 850 WHERE "id" = 2;

UPDATE "gallery" SET "likes" = 420 WHERE "id" = 3;

UPDATE "gallery" SET "likes" = 130 WHERE "id" = 4;

UPDATE "gallery" SET "likes" = 28 WHERE "id" = 5;

UPDATE "gallery" SET "likes" = 2362 WHERE "id" = 6;

UPDATE "gallery" SET "likes" = 987 WHERE "id" = 7;

UPDATE "gallery" SET "likes" = 1850 WHERE "id" = 8;

UPDATE "gallery" SET "likes" = 22632 WHERE "id" = 9;

/* Feeling down? ...Defeated? ...Tired of databases, data, image galleries, and other stuff? */
/* ...try the following SQL commands and smile, for all your worries have been DROPPED, ayyy! */

DROP TABLE "gallery";