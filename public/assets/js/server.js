const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});