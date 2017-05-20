var Client = require('node-rest-client').Client;
var client = new Client();
var express = require('express');
var app = express();
app.use(express.static('D:\\Demos\\FraudAnalytics\\IPF_Demo'));

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("SpendAnalytics app listening at http://%s:%s", host, port)

})
