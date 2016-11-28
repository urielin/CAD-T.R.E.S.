function writeMessage(canvas, message) {
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, 600, 40);
  context.font = '18pt Calibri';
  context.fillStyle = 'black';
  context.moveTo(0,40);
  context.lineTo(600,40);
  context.strokeStyle = "blue";
  context.stroke();
  context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt,x,y) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: parseInt(evt.clientX - rect.left),
    y: parseInt((rect.top+canvas.height)-evt.clientY)


  };

}
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  var message ='X = '+ mousePos.x + ' , ' + 'Y=' + mousePos.y;
  var coordinates=document.getElementById('coordinates');
  coordinates.textContent= message;
}, false);
