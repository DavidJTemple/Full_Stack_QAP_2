

/** Author: David Temple
 *  Project: Full-Stack Javascript QAP_2
 *  Date: February 4th, 2022
 *****************************************/



/** in order to really get this party started, I figrued we
    mitght as well call the global functions we need via the 
    require method. So we know that the http object and the 
    file system  objects are for sure necessary to complete 
    our project.
 */

const http = require("http");
const blurb = require("chalk");
const route = require("./routes");




/** Now we need to create an HTTP server on our computer by
    using the createServer() method. We need this to listen 
    to the ports and execute a function.
 */

/** Here we have intialized the const portDash as our server.
 *  We have also set our request and response parameters */ 

const portDash = http.createServer((req, res) => {
    /** We now initialize the const travel as the pathway to our
     *  'views' folder. */
    let travel = "./views/";
    /** Now we are simply printing the end url route, and also
     *  the request.method() being excercised. In
     *  this instance it is the GET method, which is simply 
     *  retrieving the data to read. */
    console.log(req.url, req.method)
    /** The switch statement operates by evaluating the req.url
     *  and comparing it to the values in each case */
    switch(req.url){
        /** The first case "/" is the first response following
         *  the request or our index/homepage. */

        case "/": // homepage/index page is represnted by "/" for cwd
            travel += "index.html"; // adds current url to ./views folder
            route.index(travel, res); // calling the getIt function with travel as argument
            res.statusCode= 200; // 200 status is good 
            break; 
            // All other case values are routed after the index.html
        case "/pink_floyd":
            travel += "pink_floyd.html";
            route.floyd(travel, res);
            res.statusCode = 200;
            break; 
        case "/aerosmith":
            travel += "aerosmith.html" 
            route.smith(travel, res); 
            res.statusCode = 200;
            break;
        case "/john_prine":
            travel += "john_prine.html"
            route.prine(travel, res);
            res.statusCode = 200;
            break
        case "/great_big_sea":
            travel += "great_big_sea.html"
            route.sea(travel, res);
            res.statusCode = 200;
            break;
        case "/aerosmith-one":
            res.setHeader("Location", "/aerosmith");
            res.statusCode = 301;
            res.end();
            break;
            /** If you call my-cookies in your browser there is a mustache waiting for 
             * you in the storage part of your dev-tools gui.
             */
        case "/my-cookies":
            res.setHeader("Set-cookie", "Mustache=Burt Reynolds");
            res.end("These cookies aren't for eating");
            break;
            /** when the url is bogus. This will fire and let the user know without breaking  */
        default:
            travel += "404.html";
            route.fourO(travel, res);
            res.statusCode = 404;
            break;
    }
   
});
/** We cant be talking without someone to listen. Here I set up the port on 3001 to 
 * catch the callout.
 */
portDash.listen(3001, "localhost", () => {
    const print2 = "Listening on port 3001 - waiting for response.";
    console.log(blurb.bgMagenta.green(print2));
});




