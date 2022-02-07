 const fs = require("fs");
 const blurb2 = require("chalk");

const EventEmitter = require("events");
class DavesEmitter extends EventEmitter{};
const templesEmitter = new DavesEmitter();
const otherEmitter = new DavesEmitter();
const timeEmitter = new DavesEmitter();
 
templesEmitter.on("welcome",(size, display) =>{
    console.log(blurb2.greenBright("*" + size.toUpperCase() + "* ") + display)
})

otherEmitter.on("check",() => {
    let symbol = "<>?<>?<>?<>?"
    console.log(blurb2.cyanBright(symbol));
})

timeEmitter.on("time", () => {
    let d = new Date();
    console.log(d);
})




function index(path, res){
    const line = "You've reached the homepage!"
    templesEmitter.emit("welcome", "home", blurb2.bgCyan.red(line));
    timeEmitter.emit("time");
    otherEmitter.emit("check");
    getIt(path, res);
}
function floyd(path, res){
    const line1 = "Oh! So your a Pink Floyd person?"
    templesEmitter.emit("welcome", "pink floyd", blurb2.bgGreenBright.magenta(line1));
    timeEmitter.emit("time");
    otherEmitter.emit("check");
    getIt(path, res);
}
function smith(path, res){
    const line2 = "What's your favorite Aerosmith song?"
    templesEmitter.emit("welcome", "aerosmith", blurb2.bgRed.blue(line2));
    timeEmitter.emit("time");
    otherEmitter.emit("check");
    getIt(path, res);
}
function prine(path, res){
    const line3 = "John was a great songwriter. One of the greatest!"
    templesEmitter.emit("welcome","john prine", blurb2.bgBlue(line3));
    timeEmitter.emit("time");
    otherEmitter.emit("check");
    getIt(path, res);
}
function sea(path, res){
    const line4 = "By's knows how to trow a party, I tell ya!"
    templesEmitter.emit("welcome", "great big sea", blurb2.bgMagenta.green(line4));
    timeEmitter.emit("time");
    otherEmitter.emit("check");
    getIt(path, res);
}
function fourO(path, res){
    const line5 = "STOP!! I think you are lost ol' buddy!"
    templesEmitter.emit("welcome", "four o four", blurb2.bgGreen.black(line5));
    timeEmitter.emit("time");
    otherEmitter.emit("check");
    getIt(path, res);
}
 
/* We are going to use this function to get the files we 
   lookin for in our switch statement. Each case will call 
   its respected file and our function will go getIt()*/
 function getIt(travel, res){
    const print = "You got er done by!!"
    fs.readFile(travel, "utf8", function(jam, info){
        if(jam){
            console.log(jam);
            respond.end();
        } else {
            console.log(blurb2.bgYellowBright.black(print))
            res.writeHead(res.statusCode, {"Content-Type": "text/html"});
            // res.write(data);
            res.end(info)
        }
    });
};
module.exports = {
    index,floyd,smith,prine,sea,fourO
}