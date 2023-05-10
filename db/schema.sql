DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log;

\c snack_a_log

CREATE TABLE snacks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  img TEXT,
  review TEXT,
  rating INTEGER,
  protein INTEGER,
  carbohydrates INTEGER,
  fat INTEGER
);