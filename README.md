# Mismatched-CIs
Our app is called Mismatched CIs.  Mismatched CIs (Configeration Items) is a Dashboard app that provides users (Group Manager or identified department owner(s)) the ability to identify and analyze mismatched server CIs for their specific department or group within CMDB where the CI owner department and billing department do not match causing the billing department to be charged for a CI that is not in the appropriate billing department. In an effort to eliminate misaligned billing charges, the mismatched CIs need to be identified and corrected in CMDB to reflect the appropriate billing department.

Use Case:  The user will be able to log into the app and manage CI data based on user credentials.  Once the user logs into the app, the user can upload a CSV file containing CI data for their specific department or group. The user would receive this CSV file from a ServiceNow Asset Manager.  Upon data import, the user will be able to filter out CI data that does not have a match between CI owner department and billed department by querying DB by user and department ID.  A display of the missmatched CI data will be listed in the HTML dashboard.  The functionality of displaying a graph of this data is available.  An added functionality to notify/email the owner of the mis-aligned CI(s) data will be available in a future phase of development.  The CI owner will be able simply click a link to automatically create an RITM ticket to correct CI billing department in CMDB in a future phase of development.

        1. User will log into the app using user id and password.
        2. Once logged into the app, the user will click on "Upload CSV File" located on the left navigation panel.
        3. The user will upload the CI CSV file received from the ServiceNow Asset Manager.
        4. The CSV file will load and display in the body of the form.
        5. The user will be able to view all CIs associated or linked to their department or group.
        6. The data that the user will be able to view will already display the CIs within their group or department that have been identified as mismatched CIs not having the same CI department owner as the listed CI department billed.
        7. The user will be able to view this data in a graph format as well by clicking on the link titled "View Graph"


Technologies used:  Node and Express Web server, backed by a MYSQL Database.  Sequelize is being used as the interface between the two systems (ORM).  The application is deployed on a public cloud platform, Heroku, for the production environment.  User authorization and data access is achieved using JWT.  New technology used:  D3

Applications:  The Mismatched CI Dashboard is a web application using a Node and Express Web Server, backed by a MySQL Database. Sequelize is being used as the interface between the two systems (ORM). The application is deployed on a public cloud platform, Heroku, for the Production environment.

Project requirements:
1. Must use a Node and Express Web Server (the E and N in MEAN/MERN/MEVN/MEHN)
2. Must be backed by a MySQL, MongoDB, or Firebase database with a Sequelize (or Mongoose) ORM/ODM
3. Must have both GET and POST routes for retrieving and adding new data
4. Must be deployed using Heroku (with Data) or AWS
5. Must utilize at least two libraries, packages, or technologies that we haven't discussed Consider hardware (camera, GPS, gyro, game controllers), software (examples include  front-end frameworks like React, back-end, linting), cloud APIs, or other programming languages
6. Must allow for or involve the authentication of users in some way Consider JWT or some other session management tool
7. Must have a polished frontend / UI 
8. Must have folder structure that meets MVC Paradigm
9. Must meet good quality coding standards (indentation, scoping, naming)
10. Must include unit tests via Mocha / Chai and UI tests using Sinon
11. Must include at least 3 custom NPM scripts (i.e. built in npm scrips do NOT count, must be executed using npm run ).
        - Consider scripts needed to prune and/or check for outdated packages, clean (rm -rf node modules) and build scripts (npm i). 
        - Consider using NPX to standardize package execution for all team members
12. Must use HelmetJS npm package
Optional:
1.  Uses webpack
2.  Serverless architecture using any cloud service

Team:  Michelle Brewington, Mirian Ejerenwa, Steve Miotti and Peter Abogi


