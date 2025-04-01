DROP TABLE edusign;
DROP TABLE users;

-- @block
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(120) NOT NULL,
  lastname VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);


-- @block
CREATE TABLE edusign (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  users_id INTEGER,
  FOREIGN KEY (users_id) REFERENCES users(id),
  created_at DATETIME
)

-- @block
INSERT INTO users (firstname, lastname, email)
  VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email)
  VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email)
  VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email)
  VALUES ('Barbara', 'Chase', 'barbara@test.fr');


-- @block
SELECT *
FROM users;

SELECT *
FROM users
WHERE firstname = 'ada';

SELECT *
FROM users
WHERE firstname LIKE 'b%';

SELECT COUNT(*)
FROM users;

SELECT COUNT(*)
FROM users
WHERE firstname LIKE 'b%';

SELECT firstname
FROM users;

-- @block
INSERT INTO edusign (users_id, created_at)
VALUES (1, '2024-05-30 09:30:00'),
(3, '2024-05-30 09:30:00'),
(1,'2024-09-01 09:30:00'),
(2,'2024-09-01 09:30:00'),
(3,'2024-09-01 09:30:00'),
(4,'2024-09-01 09:30:00');

-- @block
SELECT *
FROM edusign
ORDER BY created_at DESC, users_id;

SELECT *
FROM edusign
WHERE created_at = '2024-05-30 09:30:00';

SELECT COUNT(*)
FROM edusign
GROUP BY created_at