DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS departments CASCADE;
DROP TABLE IF EXISTS observations CASCADE;
DROP TABLE IF EXISTS client_observations CASCADE;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS guardians CASCADE;

CREATE TABLE clients (
  client_id serial primary key,
  firstName varchar(45),
  lastName varchar(45)
);

CREATE TABLE departments (
  department_id serial primary key,
  name varchar(45)
);

CREATE TABLE observations (
  observation_id serial primary key,
  name varchar(45)
);

CREATE TABLE client_observations (
  client_id integer REFERENCES clients,
  observation_id integer REFERENCES observations,
  quantity integer,
  PRIMARY KEY (client_id, observation_id)
);


CREATE TABLE users (
  user_id serial primary key,
  firstName varchar(45),
  lastName varchar(45)
);

CREATE TABLE guardians (
  guardian_id serial primary key,
  firstName varchar(45),
  lastName varchar(45)
);
