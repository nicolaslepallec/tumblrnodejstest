var jsdom = require("jsdom").jsdom;
var document = jsdom("<html><head></head><body>hello world<ul id='nav'></ul></body></html>");
var window = document.createWindow();

function printPost(posts, writefile){
	for (var i in posts) {
		console.log(posts[i].body);
		var l=document.createElement('li');
		l.innerHTML=posts[i].body;
		//l.appendChild(t);
		document.body.appendChild(l);
		if(posts[i].photos.length>1){
			
		}
		}
	
	console.log(window.document.innerHTML);
	writefile(window.document.innerHTML);
}

exports.printPost=printPost;
