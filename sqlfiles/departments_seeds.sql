-- Load this file in SQL Workbench, modify the DB name in the USE statement, 
-- if necessary, and execute the Insert statements to populate seed data. 
-- Load order is department_seeds, users_seeds, Cidata_seeds
USE mismatchedci_dev_db; 
INSERT INTO Departments (department, createdAt, updatedAt) VALUES
('Digital Risk Staff', NOW(), NOW()),
('Digital Technology', NOW(), NOW()),
('Digital Support', NOW(), NOW()),
('Digital Operations', NOW(), NOW()),
('DIG Engineering', NOW(), NOW()),
('Digital Quality', NOW(), NOW());
