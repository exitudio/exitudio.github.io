function startGenPoints(canvas, context) {
  return new Promise(function(resolve) {
    let x = 0;
    let y = 0;
    const rect = canvas.getBoundingClientRect();
    const points = [];

    const mouseMove = e => {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      points.push({ x: x - center.x, y: y - center.y });
    };
    canvas.addEventListener("mousedown", e => {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      points.push({ x: x - center.x, y: y - center.y });
      canvas.addEventListener("mousemove", mouseMove);
    });

    canvas.addEventListener("mouseup", e => {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = 0;
      y = 0;
      canvas.removeEventListener("mousemove", mouseMove);
      resolve(points);
    });
  });
}

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "#1FA8EC";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function _getPoint(t) {
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
