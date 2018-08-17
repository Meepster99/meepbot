var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/test/;

  // find out how to filter out chatbots msgs from the chatbot so we dont get another ligma loop
  
 
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  //below this is stuff u added
  botRegex = /trumpets|flutes|claranets|sousaphones/i;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postString("suck");
    this.res.end();
  }
  
  botRegex = /Zack Kozma/i;
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postString("is daddy");
    this.res.end();
  }
  
  botRegex = /saxophones/i;
   
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postString(String.fromCharCode(0xD83C, 0xDFB7));
    this.res.end();
  }
  
  botRegex = /ligma/i;
   
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    
    postString(request.user_id);
    this.res.end();
  }
  
}



function postString(str) {
  var botResponse, options, body, botReq;

  botResponse = str;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}




function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = cool();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
