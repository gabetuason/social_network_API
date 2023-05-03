# social_network_API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is an API for a social network web application that enables users to share their ideas, respond to their friends' ideas, and create a list of friends. To accomplish this, will need to utilize Express.js for routing, a MongoDB database, and the Mongoose Object Document Mapper (ODM). Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) and Node.js v16. Also inside is a Package.json for metadata and dependencies, which allow package managers like `npm init` to install. See installation and usage for proper use of the application. This social network API allows users to create, read, update, and delete users, thoughts, and reactions. When the application is used, the server starts and Mongoose models are synced to the MongoDB database. Data is displayed in a formatted JSON.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Assure that node.js is installed preferably version 16 (stable), found on https://nodejs.org/en/download/. To make sure the application is running correctly, the user needs to install packages. To install these packages, the user should run the following command in the terminal: `npm i inquirer@8.2.4` or `npm i`. When installing, it is important that you are in the correct directory otherwise issues may transpire. Also install MongoDB through https://www.mongodb.com/docs/manual/installation/, you can check by using `mongo --version` in the command terminal.

- Run the command `npm i express mongoose`

## Usage

After installing the required files/packages above and running the commands. In your prefered terminal type: `npm start`. At this point you can use a REST client such as insomnia (https://insomnia.rest/) or PostMan (https://www.postman.com/) to look through and change the databases. There is GET, POST(create), PUT(update) and DELETE requests.

Examples of working routes:
- Acquiring all Users: http://localhost:3001/api/users (GET)
- Get User by ID: http://localhost:3001/api/users/:userId (GET)
- Make a username: http://localhost:3001/api/users (POST) 
- Making a thought: http://localhost:3001/api/thoughts (POST)   
- Adding friend count or removing: http://localhost:3001/api/users/:userId/friends/:friendId (POST) AND (DELETE)
- Add a reaction to the thought: http://localhost:3001/api/thoughts/:thoughtId/reactions (POST)

To view more, please check possible working routes for C.R.U.D. in the provided images folder or view the api routes folder.

Please view video demonstration below for example of usage.

Video: 

## License

The project is licensed under: MIT License. To see the license permissions for commercial and non-commercial use, check the link https://opensource.org/licenses/MIT

## Contributing

This is an open source, feel free to use for learning purposes. It is important to mention me as a contributor for distribution or modifications.
  
## Tests

During use, it should have node_modules and package-lock.json added in the file directory. To see if application processed accordingly, API routes should be working in insomnia.
  
## Questions

For any questions about the application, please contact gabetuason24@gmail.com or view the github https://github.com/gabetuason to find me.

