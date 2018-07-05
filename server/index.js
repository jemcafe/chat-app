const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3060;
app.listen(port, () => console.log(`Listening on port: ${port}`));