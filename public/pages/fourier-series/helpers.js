function drawTerm(x1, y1, x2, y2, brightness) {
  var radius = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  context.beginPath();
  context.strokeStyle = "rgba(255, 255, 255, .4)";
  context.lineWidth = 1;
  context.arc(center.x + x1, center.y + y1, radius, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.moveTo(center.x + x1, center.y + y1);
  context.lineWidth = 2;
  context.lineTo(center.x + x1 + x2, center.y + y1 + y2);
  context.strokeStyle = "rgba(255, 255, 255, " + brightness + ")";
  context.stroke();
  context.closePath();
  context.globalAlpha = 1;
}

function drawPoint(point, color) {
  var pointSize = 3; // Change according to the size of the point.
  context.fillStyle = color ? color : "#ff2626"; // Red color

  context.beginPath(); //Start path
  context.arc(
    center.x + point.x,
    center.y + point.y,
    pointSize,
    0,
    Math.PI * 2,
    true
  ); // Draw a point using the arc function of the canvas with a point structure.
  context.fill(); // Close the path and fill.
  context.closePath();
}

function drawPoints(points) {
  context.beginPath();
  context.strokeStyle = "#1FA8EC";
  context.lineWidth = 1;
  for (let i = 0; i < points.length; i++) {
    const prev = i > 0 ? points[i - 1] : points[points.length - 1];
    context.moveTo(center.x + prev.x, center.y + prev.y);
    context.lineTo(center.x + points[i].x, center.y + points[i].y);
  }
  context.stroke();
  context.closePath();
}

function play(callback, delay = 30) {
  var i = 0;
  setInterval(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    callback(i / numSampling);
    i++;
    if (i >= numSampling) i = 0;
  }, delay);
}

function getPointFactory(points) {
  return function getPoint(t) {
    t = parseInt(t * points.length);
    return points[t];
  };
}

function trimPoints(points, numSampling) {
  const newPoints = [];
  for (let i = 0; i < numSampling; i++) {
    const index = parseInt((i / numSampling) * points.length);
    newPoints.push(points[index]);
  }
  return newPoints;
}

function moveToCenter(points) {
  const newPoints = [];
  let avgX = 0;
  let avgY = 0;
  for (let i = 0; i < numSampling; i++) {
    avgX += points[i][0];
    avgY += points[i][1];
  }
  avgX = avgX / points.length;
  avgY = avgY / points.length;
  for (let i = 0; i < numSampling; i++) {
    newPoints.push([points[i][0] - avgX, points[i][1] - avgY]);
  }
  return newPoints;
}
