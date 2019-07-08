

function drawTerm(x1, y1, x2, y2) {
  var radius = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  context.beginPath();
  // context.arc(center.x + x1, center.y + y1, radius, 0, 2 * Math.PI);
  context.moveTo(center.x + x1, center.y + y1);
  context.lineTo(center.x + x1 + x2, center.y + y1 + y2);
  context.stroke();
  context.closePath();
}

function drawPoint(point, color) {
  var x = point.x;
  var y = point.y;
  var pointSize = 3; // Change according to the size of the point.
  context.fillStyle = color?color:"#ff2626"; // Red color

  context.beginPath(); //Start path
  context.arc(center.x + x, center.y + y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
  context.fill(); // Close the path and fill.
}

function play(callback) {
  var i = 0;
  setInterval(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    callback(i / numSampling);
    i++;
    if (i >= numSampling) i = 0;
  }, 1000);
}

function getPointFactory(points) {
  return function getPoint(t) {
    t = parseInt(t * points.length);
    return {
      x: points[t][0],
      y: points[t][1]
    };
  };
}

function trimPoints(points) {
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