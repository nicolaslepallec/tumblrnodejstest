
var fs = require('fs');

function writefile(HTMLcontent){
	fs.writeFile('index.html', HTMLcontent, function (err) {
	  if (err) throw err;
	  console.log('It\'s saved!');
	});
}

exports.writefile=writefile;
