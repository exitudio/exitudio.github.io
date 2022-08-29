function dft(x) {
  const TWO_PI = 2 * Math.PI;
  const X = [];
  const N = x.length;
  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;
    for (let n = 0; n < N; n++) {
      const phi = (TWO_PI * k * n) / N;
      re += x[n].x * Math.cos(phi) + x[n].y * Math.sin(phi);
      im -= x[n].x * Math.sin(phi) - x[n].y * Math.cos(-phi);
    }
    re = re / N;
    im = im / N;

    let freq = k;
    let amp = Math.sqrt(re * re + im * im);
    let phase = Math.atan2(im, re);
    X[k] = { re, im, freq, amp, phase };
  }
  return X;
}
