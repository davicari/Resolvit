
var fs = require('fs');
var path = require('path');
var parser = require('./node_modules/AnalizadorTexto/analizador.js');

	
	//the program called by default will work over the input, and output file in the folder.
	var fileInput = "input.txt";
	var fileOutput = "output.json";
	var unwantedWords = ["a", "the", "and", "of", "in", "be", "also", "as"];
	
	if(process.argv[2] != undefined && process.argv[3] != undefined)//called with parameters
	{
		fileInput = process.argv[2];
		fileOutput = process.argv[3];
	}
	
	var filePathIn = path.join(__dirname,fileInput);
	
	fs.readFile(filePathIn, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        
		var jsonData = parser.myAnalizer(data,unwantedWords);
		
		filePathOut = path.join(__dirname,fileOutput);
		
		fs.writeFile(filePathOut,JSON.stringify(jsonData,null,"\t"),'utf8',(err) => {
		  if (err) throw err;
		  console.log('The file '+fileOutput+' has been saved!');
		});
				
    } else {
        console.log(err);
    }
});
		

	