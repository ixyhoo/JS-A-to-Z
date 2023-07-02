//CANVAS
//-------

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