const center = { x: 400, y: 400 };
const canvas = document.getElementById("fourier-series");
const context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);

const numSampling = 500;
const numTerm = 10;
let getPoint;
let fourier;

startApp();
async function startApp() {
  drawPoint({ x: 0, y: 0 });
  let points = await startGenPoints(canvas, context);
  points = trimPoints(points, numSampling);
  getPoint = getPointFactory(points);
  fourier = dft(points);
  fourier.sort((a, b) => b.amp - a.amp);
  play(playAnimation(fourier, points), 33);
}

function playAnimation(fourier, points) {
  console.log(fourier.length);
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
      // if (fourier[i].amp < 1) break;
    }
    drawPoint({ x, y }, "#0000ff");
    drawPoint(getPoint(t));
    drawPoints(points);

    // drawTerm(200, -300, 100, 100, .5);
    // drawTerm(-200, 300, 200, 200, 0.3);
  };
}
