CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  path TEXT NOT NULL,
  description TEXT,
  likes INT DEFAULT 0
);

INSERT INTO gallery ("path", "description", "likes")
VALUES ('images/IMG_E25.jpeg', 'Big Sky', 0),
       ('images/IMG_2CE.jpeg', '`Lil Kaeden as a baby', 0),
       ('images/IMG_8304.jpeg', 'Ninja 636R', 0),
       ('images/IMG_8360.jpeg', 'Me and lil man', 0),
       ('images/IMG_8442.jpg', 'My lil ninja', 0);
       
SELECT * FROM gallery;