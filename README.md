# Cms Blog platform

## Description

Tech Blog Platform is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

To install the necessary dependencies, run the following command:
npm install

## Usage

To use this application locally:

1. Set up your local database by running the schema from the `db/schema.sql` file.
2. Create a `.env` file in the root directory with your database credentials.
3. Run `npm run seed` to seed the database with sample data.
4. Start the server by running `npm start`.
5. Visit `http://localhost:3001` in your browser.

The deployed version can be accessed [here](https://cms-blog-platform.onrender.com).

Live Demo: [https://cms-blog-axmr.onrender.com](https://cms-blog-axmr.onrender.com)

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts
- Comment on blog posts
- Dashboard for managing your own posts

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- Sequelize ORM
- MySQL2
- bcrypt
- dotenv
- express-session

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Tests

To run tests, execute the following command:
npm test 

## Questions

If you have any questions about the repo, open an issue or contact me directly at wilmertdelorbe21@gmail.com. You can find more of my work at [wilmertdelorbe](https://github.com/wilmertdelorbe).

## License

This project is licensed under the MIT license.