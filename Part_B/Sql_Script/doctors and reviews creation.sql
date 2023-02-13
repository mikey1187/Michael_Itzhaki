CREATE TABLE doctors (
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
  email VARCHAR(255) NOT NULL,
  doctor_name VARCHAR(255) NOT NULL,
  stars INT NOT NULL
);
