'use strict';
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3333,function(req,res){
  console.log('typeahead is running on localhost:3333');
})
