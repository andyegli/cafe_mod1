
# ☕ cafe_prj

An extension of the Cafe project that Tariq Khan provided as part of  MCSD51 Class with Tariq 
A simple Node.js + Express web application with MySQL integration. 
This project uses `node-venv`, `dotenv`, and optionally Docker for development and deployment.

---

## 🚀 Setup Instructions (with `node-venv`)

### Step 1: Install node-venv globally
npm install -g node-venv

### Step 2: Create .nvmrc with the desired Node.js version
echo "20.11.1" > .nvmrc

### Step 3: Create and activate a virtual Node.js environment
node-venv venv
node-venv activate


### Step 4: Install and use the specified Node.js version
nvm install
nvm use
### Step 5: Install dependencies
npm install express nodemon dotenv

### Step 6: Ensure MySQL or MariaDB is runining and create a Database
Create the SQL Database named cafe

### Step 7: import the tables
import the tables from /db/cafe.sql

### How to Run the Project
### Option 1: 

 node app.js

Runs Node.js directly with app.js as the entry point.
Bypasses all package.json scripts.
No automatic restarts — just runs once.
Use this for production or raw execution.

### Option 2: 
 npm start

Runs the script defined as "start" in package.json.
"start": "node app.js"
Use this for simple app entry points or deployment scripts.

### Option 3:
 npx nodemon app.js

Runs nodemon on the fly using npx.
Watches file changes and automatically restarts.
Use this during development for live reloading.

### Option 4:
 npm run dev

Runs a custom script named dev in your package.json:
"scripts": {
  "dev": "nodemon app.js"
}
Requires nodemon to be installed.
Use this for clean and standardized development workflows.


TODO / Optional Extras
 Generate a good SESSION_SECRET for use in .env
 here a code to do that:
 node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

 Add .env file for config here an example
    NODE_ENV=development
    APP_PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=cafe
    DB_PORT=3306
    DB_DIALECT=mysql
    DB_LOGGING=true
    SESSION_SECRET=99e2a8e9002bfcbcd703592b6cec4007685727387928ba3194f6df04d884c551ff942f641d0d3b9bf0db0af6a69c29832fadb8916a077275f95482b85e9e7b18

 Add Makefile for script shortcuts

 Add Dockerfile and docker-compose.yml for containerized workflows

 Use mysql2 or ORM (e.g. Sequelize) for DB abstraction

