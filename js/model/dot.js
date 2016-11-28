function Dot () {
}

Dot.draw = function(x,y,ctx) {
	ctx.beginPath();
	console.log(x,y);
	ctx.arc(x,y,2,0,2*Math.PI);

	ctx.strokeStyle = "#f00";
	ctx.stroke();
	ctx.closePath();
};
