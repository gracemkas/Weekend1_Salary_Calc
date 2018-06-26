let express = require('express');

let app = express();//makes a server app

const PORT = 5000;//like a channel. can chose any number

//Respond with assets. Path to files like html
app.use(express.static('server/public'));

//Allow for incoming requests
app.listen(PORT, function(){
    console.log('App is running on ', PORT);
});