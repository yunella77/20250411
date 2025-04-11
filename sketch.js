let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  for (let i = 0; i < 40; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 100);
    let color = [random(255), random(255), random(255)]; // 隨機鮮豔顏色
    circles.push({ x, y, size, color });
  }
}

function draw() {
  background('#FFAF60'); // 設定背景顏色

  let sizeFactor = map(mouseX, 0, width, 10, 120); // 根據滑鼠 X 軸位置調整大小範圍

  for (let circle of circles) {
    fill(circle.color[0], circle.color[1], circle.color[2]); // 設定圓的顏色
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 100, circle.size * sizeFactor / 100); // 動態調整大小
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}
