// Import express
const express = require("express");
// initialize express
const app = express();

app.use(express.json())

// import dot env
const dotenv = require("dotenv")
// initialize dotenv
dotenv.config();

// import routes
const routes = require("./routes/index");

// Connect to Mongoose


// Load routes
app.use('/', routes);

// Start server
let port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})
