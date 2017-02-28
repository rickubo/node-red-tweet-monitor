# node-red-tweet-monitor
create a quick tweet monitoring dashboard application with bluemix node-red

# requirements
this samples needs a bluemix account, if you don't have create one at (http://www.bluemix.net)

# step 1 - application deployment
1. open your bluemix catalog, go to Apps/boilerplate menu and create a "node-red starter" cloud foundry app.

2. open the application url <myproject>.mybluemix.net/red.

3. open the node-red application and import the node-red-tweet-monitoring.json. Go to the menu at right and select import from clipboard.

4. authenticate the twitter service with double click over the node.

5. associate the database name at cloudant service, created with node-red starter app.

6. deploy the app with the top right button.

# step 2 - create the search index at cloudant

<img src="https://github.com/rickubo/node-red-tweet-monitor/blob/master/index.png?raw=true">

1. open the bluemix dashboard

2. select the cloudant service created with the node-red starter, which usually initiate with the app project name.

3. create the database you defined on step 1.

4. create a desing document with a search index function.

5. copy the search-index.js code to create the index.

# step 3 - test it

1. if you are monitoring your own twitter account, post a tweet.

2. check it out, and have fun!!


