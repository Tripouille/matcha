CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	alias varchar(255) NOT NULL UNIQUE,
	email varchar(255) NOT NULL UNIQUE,
	firstname varchar(255),
	familyname varchar(255),
	password varchar(255) NOT NULL
);