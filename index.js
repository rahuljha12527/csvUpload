const express = require("express");
const app = express();
const port = 8001;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');


app.use(express.static('./assets'));



app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



// use express
app.use('/',require('./routes'));

// setup the viewup engine 
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port, function (err) {
  if (err) {
    console.log(`Error in runnig the server: ${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
