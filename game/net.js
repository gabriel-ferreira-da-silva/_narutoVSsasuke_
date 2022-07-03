var fs = require('fs');

const filename =  'keys.js';

function send_keys( keys ){
    try{
        fs.writeFile(filename, keys);
    }catch{

    }
}

function send_window( keys ){
   console.log("hello");
}

function recieve_window(){
    console.log("hello");
}

function recieve_keys(){
    console.log("hello");
}