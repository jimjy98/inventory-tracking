CREATE DATABASE "db_inventory-main";
GRANT ALL PRIVILEGES ON DATABASE "db_inventory-main" TO jimmy;

CREATE TABLE "item" 
("barcode" integer NOT NULL, "name" character varying NOT NULL, 
"description" character varying NOT NULL, "price" integer NOT NULL, 
"quantity" integer NOT NULL, CONSTRAINT "PK_37d13d4530be2b2a772fc25fbbf" PRIMARY KEY ("barcode"));