const express = require('express');
const app = express();
const path = require('path');

// Glues directories 
app.use(express.static(path.join(__dirname, 'public')));


// How you get things (load,etc)
// Every page has its own router. This is a route handler
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
})

// Connects with local host
const port = 8000;
app.listen(port);




// // How you send things
    // app.post