const MAX_DRAW = 100;
const NUM_POINTS = 400;
const center = { x: 400, y: 400 };
const canvas = document.getElementById("fourier-series");
const context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);

startImageApp();
document.getElementById("draw-btn").addEventListener("click", startDrawApp);
document.getElementById("image-btn").addEventListener("click", startImageApp);
async function startImageApp() {
  stop();
  let points = getImagePoints();
  points = moveToCenter(points);
  fourierStart(points);
}
async function startDrawApp() {
  stop();
  drawPoint({ x: 0, y: 0 });
  try {
    let points = await startGenPoints(canvas, context);
    fourierStart(points);
  } catch (e) {}
}
function fourierStart(actualPoints) {
  let points = actualPoints;
  if (points.length > NUM_POINTS) {
    points = trimPoints(actualPoints, NUM_POINTS);
  }
  const fourier = dft(points);
  fourier.sort((a, b) => b.amp - a.amp);
  play(playAnimation(fourier, points, actualPoints), points.length, 33);
}

function playAnimation(fourier, points, actualPoints) {
  const historyPoints = [];
  return function(t) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < fourier.length; i++) {
      const freq = fourier[i].freq;
      const radius = fourier[i].amp;
      const phase = fourier[i].phase;
      const time = t * 2 * Math.PI;
      nextX = radius * Math.cos(freq * time + phase);
      nextY = radius * Math.sin(freq * time + phase);
      drawTerm(
        x,
        y,
        nextX,
        nextY,
        0.4 + (fourier[i].amp / fourier[0].amp) * 0.3
      );
      x += nextX;
      y += nextY;
    }
    drawPoint({ x, y }, "#0000ff");
    drawPoint(points[parseInt(t * points.length)]);
    drawPoints(actualPoints);

    historyPoints.push({ x, y });
    if (historyPoints.length > MAX_DRAW) {
      historyPoints.shift();
    }
    drawHistory(historyPoints);
  };
}
