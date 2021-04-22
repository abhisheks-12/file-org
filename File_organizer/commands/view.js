function  view(dirpath,mode){
    if(mode == "tree"){
            viewTree(dirpath,"");
            // console.log("tree is working!");
    }
    else if(mode == "flat"){
        viewFlat(dirpath);
        // console.log("flat is working!");
    }
    else{
        console.log("U entered wrong command");
    }
}
let fs = require("fs");
let p = require("path");
// This function we created with help of recurssion

function  isFileorNot(dirpath){
    // check extension
    return fs.lstatSync(dirpath).isFile();
}

function getContent(dirpath){
    // content 
    return fs.readdirSync(dirpath);
}

function  viewFlat(dirpath){
    let isFile  = isFileorNot(dirpath);
    if(isFile == true){
        console.log(dirpath +" ");
    } 
    else{
        console.log(dirpath);
        // recurssion
        let content = getContent(dirpath);
        // console.log(content);
        for(let i = 0; i<content.length; i++){
            let childPath = dirpath + "/" +  content[i];
            viewFlat(childPath)
        }
    }
}


function  viewTree(dirpath,indent){
    let isFile  = isFileorNot(dirpath);
    if(isFile == true){
        let stArr = dirpath.split("\\");
        let toPrint = stArr.pop();
        console.log(indent,toPrint +"*");
    } 
    else{
        let stArr = dirpath.split("\\");
        let toPrint = stArr.pop();
        console.log(indent,toPrint );
        
        // recurssion
        let content = getContent(dirpath);
        // console.log(content);
        for(let i = 0; i<content.length; i++){
            let childPath = dirpath + "/" +  content[i];
            viewTree(childPath, indent + "\t");
        }
    }
}

module.exports = {
    makeView:view
}