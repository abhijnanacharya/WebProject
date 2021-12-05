const express = require('express');
const bodyParser=require('body-parser');

const app= express();


const routes=require('./routes/routes.js');
app.use(routes);





app.listen(3000);
