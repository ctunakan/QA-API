/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const app = require('./index');

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
