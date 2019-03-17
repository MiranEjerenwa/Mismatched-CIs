-- Load this file in SQL Workbench, modify the DB name in the USE statement, 
-- if necessary, and execute the Insert statements to populate seed data. 
-- Load order is department_seeds, users_seeds, Cidata_seeds
USE mismatchedci_dev_db; 
INSERT INTO Departments (department, createdAt, updatedAt) VALUES
('Digital Risk Staff'),
('Digital Technology'),
('Digital Support'),
('Digital Operations'),
('DIG Engineering'),
('Digital Quality');
