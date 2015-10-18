#!/usr/bin/env node
var mkdirp = require('mkdirp'),
    fs = require('fs'),
    readline = require('readline'),
    colors = require('colors'),
    pretty = require('pretty');

var javaScriptContent = "angular.module('xxxxxApp', ["+
    "'ui.bootstrap',"+
"])"+
"\n"+
".controller('xxxxxCtrl', function HomeController($scope) {\n"+
    "$scope.message = 'This is the xxxxx Page';\n"+
"\n"+
"\n"+
"});";


var cssContent = "";
var htmlContent = '<!doctype html>'+
  '<html ng-app="xxxxxApp">'+
  '<head>'+
  '<meta charset="utf-8">'+
  '<meta name="description" content="">'+
  '<meta name="viewport" content="width=device-width, initial-scale=1">'+
  '<title>xxxxx App</title>'+
  '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'+
  '<link rel="stylesheet" href="css/style.css">'+
        '<link rel="author" href="humans.txt">'+
        '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js"></script>'+
        '<script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.13.4.js"></script>'+
    '</head>'+
    '<body>'+
        '<div ng-controller="xxxxxCtrl">'+
            '<h1>xxxxx</h1>'+
            '<p>{{message}}</p>'+
        '</div>'+
        '<script src="js/main.js"></script>'+
    '</body>'+
'</html>';

htmlContent = pretty(htmlContent);

var specJSContent = "describe( 'xxxxx section', function() { \n"+
  "beforeEach( module( 'xxxxx' ) ); \n"+
"\n"+
  "it( 'should have a dummy test', inject( function() { \n"+
  "  expect( true ).toBeTruthy(); \n"+
  "})); \n"+
"});";




var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question('What is your application name?  ', function(answer) {
  console.log('Application Name: ' + answer);


// create directory
  mkdirp('./'+answer, function (err) {
  	if (err) { throw err; }
  	// done
  	console.log('Component created successfully!'.green);
	});

  mkdirp('./'+answer+'/css', function (err) {
    if (err) { throw err; }
    // done
    console.log('CSS directory created successlly!'.yellow);
  });

  mkdirp('./'+answer+'/js', function (err) {
    if (err) { throw err; }
    // done
    console.log('JS directory created successlly!'.yellow);
  });


var filesToCreate = ['.js', '.less', '.html', '.spec.js' ];

var filesContents = [javaScriptContent, cssContent, htmlContent, specJSContent];


fs.writeFile('./'+answer+'/css/style.css',filesContents[1], function(err) {
    if(err) { return console.log(err); }
    else {
      console.log('style.css saved successfully'.cyan);
    }
});
fs.writeFile('./'+answer+'/js/main.js',filesContents[0].replace(/xxxxx/g,answer), function(err) {
    if(err) { return console.log(err); }
    else {
      console.log('main.js saved successfully'.cyan);
    }
});

fs.writeFile('./'+answer+'/index.html',filesContents[2].replace(/xxxxx/g,answer), function(err) {
    if(err) { return console.log(err); }
    else {
      console.log('index.html saved successfully'.cyan);
    }
});




  rl.close();
});

