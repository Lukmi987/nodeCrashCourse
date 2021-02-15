const express = require('express')// returns a func

//express app
const app = express();

//listen for requests and returns an instance of the server if we need it
app.listen(3000);

// if express finds the match the get method the code below is not executed
app.get('/', (req, res) => {
    //also automatically set content-type header and also sets the status code
    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
       res.send('<p>home page</p>');
});

// redirects
app.get('/about-us',(req, res) => {
    //express sends the request to the browser and forces it , and automatically sets the status code
    res.redirect('/about');
})

// 404 page use func fires for every single request coming in, but only if it reaches this line of code, that why it's needs to be in the bottom
app.use((req, res)=> {
    //we can chain coz status returns  response object itself so we can just tack on that method at the end of it
    res.status(404).sendFile('./views/404.html', {root: __dirname})
} );