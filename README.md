## Purpose:
-----

This is actually just a simple server with extra information on how to interact with the slack message API. It has nothing fancy so all the parsing and work must be done by the user.


## Setup:
-----
1. define slack command in config.js (for example '/mybot')
2. npm install
3. npm start


### Configure Slack:


You need to create a slack slash command and then configure it to hit and endpoint (your server).


####hey

1. Login to slack in the browser
2. Go to https://yourusername.slack.com/apps/manage
3. Click ‘Custom integrations’
4. Click ‘Slash Commands’
5. Click ‘Add Configuration’
6. Enter the command, for example ‘/pr’
7. Enter host and endpoint for the slash command 'https://myhost.com/mybot' NOTE: must be the same as the conig.js command.name
8. Set method as post
9. Configure the rest of the fields per your desires
10. Click save integrations



### Local Development:


Slack must be told a host and endpoint to hit when the slash command is invoked. For local development install [ngrok](https://ngrok.com/download) on your system. Ngrok will create a host bound to a port on your local computer. invoking ngrok in the terminal (`ngrok http 3000`) will generate a host (`https://someId.ngrok.io`) that you can provide to the slack configuration (step 7 above). Note, every time ngrok is invoked, a new host is generated, hence you must update the slack configuration every time. I suggest you leave it open while you develop.



## Resources:
--------

1. [Slack Message API docs](https://api.slack.com/docs/messages)
2. [Slack Formatting Messages](https://api.slack.com/docs/message-formatting)
3. [Slack message Attachment docs](https://api.slack.com/docs/message-attachments)
4. [Slack message builder](https://api.slack.com/docs/messages/builder)
