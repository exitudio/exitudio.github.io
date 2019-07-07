var center = { x: 400, y: 400 };
var canvas = document.getElementById("fourier-series");
var context = canvas.getContext("2d");
var numSampling = 16;
var numTerm = 10;
var dt = 1 / numSampling;
let getPoint;

async function startApp() {
  drawPoint({ x: 0, y: 0 });
  // let points = await startGenPoints(canvas, context);
  // points = trimPoints(points);
  let points = [
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
  // for (let i = 0; i < points.length; i++) {
  //   points[i] = [points[i][0] + 100, points[i][1] + 200];
  // }
  getPoint = getPointFactory(points);
  play(playAnimation);
}
startApp();

function trimPoints(points) {
  const newPoints = [];
  for (let i = 0; i < numSampling; i++) {
    const index = parseInt((i / numSampling) * points.length);
    newPoints.push(points[index]);
  }
  return newPoints;
}

function playAnimation(t) {
  var x = 0;
  var y = 0;
  for (var n = 0; n < numTerm; n++) {
    var coefficient = getCoefficient(getPoint, n);
    var nextX;
    var nextY;
    nextX = coefficient.x * Math.cos(n * 2 * Math.PI * t);
    nextY = coefficient.y * Math.sin(n * 2 * Math.PI * t);
    drawTerm(x, y, nextX, nextY);
    x = x + nextX;
    y = y + nextY;
  }
  var point = getPoint(t);
  drawPoint(point);
}

function drawTerm(x1, y1, x2, y2) {
  var radius = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  context.beginPath();
  context.arc(center.x + x1, center.y + y1, radius, 0, 2 * Math.PI);
  context.stroke();

  context.moveTo(center.x + x1, center.y + y1);
  context.lineTo(center.x + x1 + x2, center.y + y1 + y2);
  context.stroke();
}

function getCoefficient(f, n) {
  var coefficient = { x: 0, y: 0 };
  for (var i = 0; i < numSampling; i++) {
    var t = i / numSampling;
    var points = f(t);
    coefficient.x += 2 * points.x * Math.cos(n * 2 * Math.PI * t) * dt;
    coefficient.y += 2 * points.y * Math.sin(n * 2 * Math.PI * t) * dt;
  }
  return coefficient;
}

function drawPoint(point) {
  var x = point.x;
  var y = point.y;
  var pointSize = 3; // Change according to the size of the point.
  context.fillStyle = "#ff2626"; // Red color

  context.beginPath(); //Start path
  context.arc(center.x + x, center.y + y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
  context.fill(); // Close the path and fill.
  console.log("--");
}

function play(callback) {
  var i = 0;
  setInterval(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    callback(i / numSampling);
    i++;
    if (i >= numSampling) i = 0;
  }, 200);
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
