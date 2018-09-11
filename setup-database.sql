CREATE TABLE product_type (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) not null,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) not null,
	type VARCHAR(255) not null,
	description VARCHAR(255),
	mrp INT not null,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (type) REFERENCES product_type(id)
);

CREATE TABLE vendor(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) not null,
	email VARCHAR(255),
	phone VARCHAR(14) not null,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE batch(
	id VARCHAR(255) PRIMARY KEY,
	batch_date DATE,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE inventory(
	id VARCHAR(255) PRIMARY KEY,
	product_id VARCHAR(255) not null,
	batch_id VARCHAR(255) not null,
	vendor_id VARCHAR(255) not null,
	purchase_price INT not null,
	quatity INT not null,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (product_id) REFERENCES product(id),
	FOREIGN KEY (batch_id) REFERENCES batch(id),
	FOREIGN KEY (vendor_id) REFERENCES vendor(id)
);

CREATE TABLE user(
	id VARCHAR(255) PRIMARY KEY,
	username VARCHAR(255) not null UNIQUE,
	password VARCHAR(14) not null,
	user_role INT not null,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `chk_user_role` CHECK (user_role IN (0, 1))
);