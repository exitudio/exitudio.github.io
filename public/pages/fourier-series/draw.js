function startGenPoints(canvas, context) {
  return new Promise(function(resolve) {
    let x = 0;
    let y = 0;
    let isDrawing = false;
    const rect = canvas.getBoundingClientRect();
    const points = [];

    // const onClick = e => {
    //   drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    //   x = e.clientX - rect.left;
    //   y = e.clientY - rect.top;
    //   points.push([x - center.x, y - center.y]);
    //   if (points.length >= 16) {
    //     canvas.removeEventListener("click", onClick);
    //     resolve(points);
    //   }
    // };
    // canvas.addEventListener("click", onClick);
    canvas.addEventListener("mousedown", e => {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      points.push([x - center.x, y - center.y]);
      isDrawing = true;
    });

    canvas.addEventListener("mousemove", e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
        points.push([x - center.x, y - center.y]);
      }
    });

    canvas.addEventListener("mouseup", e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        isDrawing = false;
        resolve(points);
      }
    });
  });
}

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function _getPoint(t) {
  // circle
  // return {
  //   x: 200 * Math.cos(t * 2 * Math.PI),
  //   y: 200 * Math.sin(t * 2 * Math.PI)
  // };

  // rect
  var arr = [
    [100, 0],
    [100, 50],
    [100, 100],
    [50, 100],
    [0, 100],
    [-50, 100],
    [-100, 100],
    [-100, 50],
    [-100, 0],
    [-100, -50],
    [-100, -100],
    [-50, -100],
    [0, -100],
    [50, -100],
    [100, -100],
    [100, -50]
  ];
  t = parseInt(t * arr.length);
  return {
    x: arr[t][0],
    y: arr[t][1]
  };
}
