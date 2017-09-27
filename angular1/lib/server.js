'use strict';

const port = 8000;
const express = require('express');
const app = express();
const path = require('path');
const distFolder = path.resolve(__dirname, '../dist');

app.use('/', express.static(distFolder));

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
