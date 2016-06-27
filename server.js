'use strict';
const restify = require('restify');
const logger = require('morgan');
const config = require('./config');


/**
 * Start server and add middleware
 */
var server = restify.createServer();
server.use(logger('tiny'));
server.use(restify.bodyParser());


/**
 * Server method for slack.
 * Is bound to config.command.name
 * This route recieves messages from slack
 */
server.post(config.command.name, (req, res) => {
  let params = req.params;
  if(config.debug) {
    console.log(JSON.stringify(params,null,2));
  }

  //Do whatever you want. But make a json object similar to the one below.
  let dummyMessage = {
       'text':'Message Title shown just below the chatbot name',
       'attachments':[
          {
             'color':'#36a64f',
             'title':'Slack API Documentation',
             'text':'Optional text that appears within the attachment'
          }
       ]
    }

  //send said object back to the requester.
  return res.send(dummyMessage);
});//end of server.post


/**
 * Get method for slack.
 * Is bound to config.command.name
 */
server.get(config.command.name, (req, res) => {
  return res.send(200, 'Ok');
});//end of server.get



/**
 * Starts the server that will listen on the config.port provided
 * @param  {Number} config.port Port to listen on
 * @param  {Funtion} function   Runs after server starts;
 */
server.listen(config.port, (err) => {
  if (err) {
    return console.error('Error starting server: ', err);
  }
  return console.log(`Server successfully started on port ${config.port}`);
});


/**
 * Handling uncaughtException
 */
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
  console.log(err.stack);
});

/**
 * Handling unhandledRejection
 */
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
