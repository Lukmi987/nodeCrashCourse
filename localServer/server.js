const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//second arg is response header
const server = http.createServer((req, res) => {
    //loadash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    //when we make a request this callback fires
    console.log('request made',req.url, req.method);

    //set header content type
    res.setHeader('Content-Type','text/html');

    // set the static routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-mee':
            res.statusCode = 301;
            //redirect
            res.setHeader('Location','/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send a html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });
    // res.write('<p>hello ninjas</p>');
    // res.write('<p>hello ninjas</p>');
    // res.end();
});

//invoke listen mehtod
//Port number are like 'doors' into a computer
server.listen(3000,'localhost', () => {
    console.log('listening for requests on port 3000')
});

//////////////////////////////////// NOTES /////////////////////////////////////
// Status Codes
// -status codes describe the type of response sent to the browser
//     - 200 ok
//     - 301- Resource moved
//     - 404 - not found
//     -500 Range - server error codes