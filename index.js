require("dotenv").config();
require("./database/connect");
const HTTPError = require("./errors/HTTPError");
const app = require("./app");
const morgan = require("morgan");
app.use(morgan("combined"));

global.HTTPError = HTTPError;

app.listen(3001, () => console.log(`Listening on port ${3001}`));
