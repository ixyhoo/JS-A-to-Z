"use strict";
//CANVAS
//-------
/*function draw (){

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 50, 150);
    
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx.fillRect(100, 30, 100, 50);
    
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    ctx.fillRect(10, 25, 100, 50);
    ctx.clearRect(35, 25, 40, 50);
    ctx.clearRect(125, 75, 50, 50);
    
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.moveTo(180, 150);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 150);
    ctx.fill();
}

window.addEventListener("load", draw);*/

//-------
// try catch

try {   
    // test un block de code
    maFonction();
} catch (error) {
    // attrape les erreurs
   // console.log(error);
}

function isValidJson(txt) {
    try {
        JSON.parse(txt);
        return true;
    } catch {
        return false;
    }
}

//console.log(isValidJson("test"));

try {   
    // test un block de code
    maFonction();
} catch (error) {
    // attrape les erreurs
   console.log(error);
} finally {
    // s'execute toujours
   // console.log("finally");
}

//throw

function isNumber(num){
    if(isNaN(num)) {
        throw "Ce n'est pas un nombre";
    } else {
        console.log("C'est un nombre");
    }
    //plein de code
}

try {
    isNumber("2d");
} catch (error) {
    console.log(error);
}

//------
//Strict mode 



voiture = "BMW";
console.log(voiture);