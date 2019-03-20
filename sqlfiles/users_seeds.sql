-- Load this file in SQL Workbench, modify the DB name in the USE statement, 
-- if necessary, and execute the Insert statements to populate seed data. 
-- Load order is department_seeds, users_seeds, Cidata_seeds
USE mismatchedci_dev_db;
INSERT INTO Users (id, fname, lname, email, password, department, Role) VALUES
(1, 'Michelle','Brewington', 'michelle.brewington@company.com', 'michelle', 'Digital Risk Staff', 'manager'),
(2, 'Mirian','Ejerenwa', 'mirian.ejerenwa@company.com', 'mirian', 'Digital Technology', 'manager'),
(3, 'Steve','Miotti', 'steve.miotti@company.com', 'steve', 'Digital Operations', 'user'),
(4, 'Peter','Abogi', 'peter.abogi@company.com', 'peter', 'Digital Operations', 'user'),
(5, 'Nicastro','Maryrose', 'nicastro.maryrose@company.com', 'nicastro', 'Digital Quality', '
user'),
(6, 'Bernardine','Urbano', 'bernardine,urbano@company.com', 'bernardine', 'Digital Support', 'user'),
(7, 'Leila','Hollowell', 'leila.hollowell@company.com', 'leila', 'Digital Quality', 'user'),
(8, 'Lovato','Alita ', 'lovato.alita@company.com', 'lovato', 'Digital Risk Staff', 'user'),
(9, 'Brianne','Setliff', 'brianne.setliff@company.com', 'brianne', 'DIG Engineering', 'user'),
(10, 'Rutha','Shippy', 'shippy.rutha@company.com', 'shippy', 'Digital Risk Staff', 'user');