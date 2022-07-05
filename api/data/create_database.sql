USE `order_tracking`;

--\c into order_tracking

CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  street varchar(255) DEFAULT NULL,
  zipcode int DEFAULT NULL,
  city varchar(255) DEFAULT NULL,
  phone varchar(45) DEFAULT NULL
);

CREATE TABLE order_status (
    id INT PRIMARY KEY NOT NULL,
    status TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP
);

CREATE TABLE shipping (
    id INT PRIMARY KEY NOT NULL,
    label TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP
);

CREATE TABLE orders (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_order DATETIME NOT NULL,
    company TEXT NOT NULL,
    price INT NOT NULL CHECK(price > 0),
    number_product INT NOT NULL,
    receipt_date DATETIME,
    estimated_date DATETIME,
    status_id INT NOT NULL REFERENCES order_status (id) ON DELETE CASCADE,
    shipping_id INT NOT NULL REFERENCES shipping (id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP
);


INSERT INTO order_status (id, status) VALUES (1, 'Reçu'), (2, 'Précommande'), (3, 'En attente'), (4, 'Non reçu');

INSERT INTO shipping (id, label) VALUES (1, 'Domicile'), (2, 'Point relais'), (3, 'Express');

INSERT INTO users (firstname, lastname, email, password, street, zipcode, city, phone) VALUES ('Toto','Martin','toto.martin@gmail.com','$2b$10$LXqc8MBzlRt711wKrN/75.7ECdHfGZkCqPvsO10jv1L1ARLPCjuL.','12 Rue des David',33130,'Bègles',NULL), ('Tata','Dupond','tata.dupond@gmail.com','$2b$10$LXqc8MBzlRt711wKrN/75.7ECdHfGZkCqPvsO10jv1L1ARLPCjuL.','12 Rue de maurignon',91650,'Breuillet',NULL);

INSERT INTO orders (date_order, company, price, number_product, receipt_date, estimated_date, status_id, shipping_id, user_id) VALUES ('2022-12-01 00:00:00','hollister', 15 , 1, null, null ,2, 1, 1),('2022-02-15 00:00:00','cokodive',50, 2 ,'2022-02-18 00:00:00','2022-02-15 00:00:00',1,2, 1),('2022-05-12 00:00:00','Amazon', 115, 2, null, '2022-05-27 00:00:00',3,1,2);