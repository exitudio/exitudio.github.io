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
  for (let i = 0; i < points.length; i++) {
    points[i] = [points[i][0] + 100, points[i][1] + 200];
  }
  points = moveToCenter(points);
  getPoint = getPointFactory(points);
  play(playAnimation);
}
startApp();

function playAnimation(t) {
  var x = 0;
  var y = 0;
  for (var n = 0; n < numTerm; n++) {
    var coefficient = getCoefficient(getPoint, n);
    var nextX;
    var nextY;
    nextX = coefficient.an * Math.cos(n * 2 * Math.PI * t);
    nextY = coefficient.bn * Math.sin(n * 2 * Math.PI * t);
    drawTerm(x, y, nextX, nextY);
    x = x + nextX;
    y = y + nextY;
  }
  drawPoint({x,y}, "#0000ff")
  var point = getPoint(t);
  drawPoint(point);
}

function getCoefficient(f, n) {
  var coefficient = { a0: 0, an: 0, bn: 0 };
  for (var i = 0; i < numSampling; i++) {
    var t = i / numSampling;
    var points = f(t);
    coefficient.an += 2 * points.x * Math.cos(n * 2 * Math.PI * t) * dt;
    coefficient.bn += 2 * points.y * Math.sin(n * 2 * Math.PI * t) * dt;
  }
  return coefficient;
}

