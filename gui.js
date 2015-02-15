function draw(data, canvas, start){
  var context = canvas.getContext('2d');
  var wid = data.length;
  var heit = data[0].length;

  cwid = 2 * wid * radius;
  cheit = 2 * heit * radius;
  //canvas.width = cwid;
  //canvas.height = cheit;

  clear(c);

  rectangle(workplace, sheetW * radius * 2, sheetH * radius * 2);

  for (var i = 0; i < wid; i++){
    for (var j = 0; j < heit; j++){
      if (data[i][j] != 0) {
        drawTile(start[0] + i * 2 * radius + radius, start[1] + j * 2 * radius + radius, Math.abs(data[i][j]), context);
      }
    }
  }
};

function drawTile(x, y, im, cc) {
  cc.drawImage(images[im], x - radius, y - radius); 
}
