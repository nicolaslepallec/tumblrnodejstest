var oauthkey="rpKQQ5rb1NBPe5cBRt9X5y3l4gy3SI9Tm1HrQFZW1vSZ4Kpshr";

var Tumblr = require('tumblr').Tumblr;
var posts = [];
function getPosts(processPost, writefile){
	//var blog = new Tumblr('nicotruc.tumblr.com', oauthkey);
	var blog = new Tumblr('nodejstest.tumblr.com', oauthkey);
	blog.posts({limit: 20}, function(error, response) {
	    if (error) {
	       throw new Error(error);
	       console.log(response);
	    }
	    //console.log(response);
	    console.log(response.posts);
	    //posts=response.posts;
	    processPost(response.posts, writefile);
	});
}

exports.getPosts = getPosts;