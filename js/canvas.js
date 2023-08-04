var drawing = false;
// 
var before_x = 0;
var before_y = 0;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', draw_canvas);
// 
canvas.addEventListener('mousedown', function(e) {
  drawing = true;
  var rect = e.target.getBoundingClientRect();
  before_x = e.clientX - rect.left;
  before_y = e.clientY - rect.top;
});
// 
canvas.addEventListener('mouseup', function() {
  drawing = false;
});

// 
function draw_canvas(e) {
// 
if (!drawing){
  return
};
var rect = e.target.getBoundingClientRect();
var x = e.clientX - rect.left;
var y = e.clientY - rect.top;
var w = document.getElementById('width').value;
var color = document.getElementById('color').value;
var r   = parseInt(color.substring(1,3), 16);
var g = parseInt(color.substring(3,5), 16);
var b  = parseInt(color.substring(5,7), 16);
// 
ctx.lineCap = 'round';
ctx.strokeStyle = 'rgb('+ r + ',' + g + ',' + b + ')';
ctx.lineWidth = w;
ctx.beginPath();
ctx.moveTo(before_x, before_y);
ctx.lineTo(x, y);
ctx.stroke();
ctx.closePath();
// 
before_x = x;
before_y = y;
}

// 
// 
function delete_canvas(){
ret = confirm('색칠 초기화');
// 
if (ret == true){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
}

var pen = document.getElementById('pencil');
var era = document.getElementById('eraser');
// 

function tool(btnNum){
// 
if (btnNum == 1){
  ctx.globalCompositeOperation = 'source-over';
  pen.className = 'active';
  era.className = '';
}
// 
else if (btnNum == 2){
  ctx.globalCompositeOperation = 'destination-out';
  pen.className = '';
  era.className = 'active';
}
}
