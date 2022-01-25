canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
//Line 4-7 is the outer box
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();
//Line 9-13 is code for blue circle
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();
//Line 15-19 is code for black circle
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();
//Line 21-25 is code for red circle
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();
//Line 27-31 is code for orange circle
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();
//Line 33-36 is code for green circle
