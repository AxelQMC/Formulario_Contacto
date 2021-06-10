CREATE DATABASE contact;

use contact;

CREATE TABLE contact_information (
    id integer NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono integer NOT NULL,
    empresa varchar(20) NOT NULL,
    mensaje text NOT NULL,
    PRIMARY KEY (id),
);

ALTER TABLE contact_information
    MODIFY id integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;