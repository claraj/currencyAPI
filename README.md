# Currency API

Node and express site that connects to exchange rate API to convert currencies.

If you clone this repo, you'll need to run `npm install` from the code directory to install dependencies.

Also from the code directory, start the app with `npm start`

It should be running at http://127.0.0.1:3000

Press Control+C to stop the app. 

## Extension project

https://github.com/claraj/yelp-express-map

If you clone this repo, you'll need to run `npm install` from the code directory to install dependencies.

Extra features: map of foods, using Leaflet and script hacked into Handlebars.

Yelp requires a key to authenticate. You'll need to make an account here and create an application to get a key:

https://www.yelp.com/developers/documentation/v3

Storing keys in code is not recommended. So, the key is saved as an environment variable on your computer. 
The environment variable's name is **YELP_API_KEY** and the value is whatever your key is. This application reads the key from the environment variable in services/yelp.js

Once you've set the key, start the app with `npm start`

It should be running at http://127.0.0.1:3000.

Press Control+C to stop the app. 
