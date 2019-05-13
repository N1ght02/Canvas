let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//hoofd
ctx.beginPath();
ctx.arc(200,200,150,0,2*Math.PI);
ctx.closePath();
ctx.stroke();



//mond
ctx.beginPath();
ctx.arc(200,250,60,0,1*Math.PI);
ctx.fillStyle = "red";
ctx.closePath();
ctx.stroke();
ctx.fill();
//oor
ctx.beginPath();
ctx.arc(20,140,40,0,2*Math.PI);
ctx.fillStyle = "pink"
ctx.closePath();
ctx.stroke();
ctx.fill();
//oor
ctx.beginPath();
ctx.arc(380,140,40,0,2*Math.PI);
ctx.fillStyle = "pink"
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.closePath();
ctx.stroke();
ctx.fill();
//oog
ctx.beginPath();
ctx.arc(130,130,40,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.closePath();
ctx.stroke();
ctx.fill();

//oogbal
ctx.beginPath();
ctx.arc(120,120,20,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();
//oogbal2e
ctx.beginPath();
ctx.arc(125,130,10,0,2*Math.PI);
ctx.fillStyle = "red";
ctx.closePath();
ctx.stroke();
ctx.fill();
//oog
ctx.beginPath();
ctx.arc(275,130,40,0,2*Math.PI);
ctx.closePath();
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill();
//oogbal
ctx.beginPath();
ctx.arc(275,125,10,0,2*Math.PI);
ctx.fillStyle = "red";
ctx.closePath();
ctx.stroke();
ctx.fill();

//haar
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = "pink"
ctx.strokeRect(120, 50, 5, 20);
ctx.strokeRect(150, 40, 5, 20);
ctx.strokeRect(180, 30, 5, 20);
ctx.strokeRect(210, 30, 5, 20);
ctx.strokeRect(240, 38, 5, 20);
ctx.strokeRect(270, 45, 5, 20);
