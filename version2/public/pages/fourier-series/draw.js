let removeDrawListener = () => {};
function startGenPoints(canvas, context) {
  return new Promise(function(resolve, reject) {
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
    const mouseDown = e => {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      points.push({ x: x - center.x, y: y - center.y });
      canvas.addEventListener("mousemove", mouseMove);
    };
    const mouseUp = e => {
      x = 0;
      y = 0;
      canvas.removeEventListener("mousemove", mouseMove);
      resolve(points);
    };

    canvas.addEventListener("mousedown", mouseDown);

    removeDrawListener = () => {
      canvas.removeEventListener("mousedown", mouseDown);
      canvas.removeEventListener("mousemove", mouseMove);
      canvas.removeEventListener("mouseUp", mouseUp);
      reject();
    };

    canvas.addEventListener("mouseup", mouseUp);
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
