function setup() {
    var canvas = createCanvas(750, 500);
    canvas.parent('sketch-holder');
    frameRate(30);
}

function draw() {
    background(0); // Black background for a cyber look

    // Draw a grid
    drawGrid();

    // Draw a neon ellipse that follows the mouse
    drawNeonEllipse(mouseX, mouseY);
}

function drawGrid() {
    stroke(0, 255, 255); // Neon cyan color for the grid
    strokeWeight(1);
    for (let x = 0; x < width; x += 50) {
        line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += 50) {
        line(0, y, width, y);
    }
}

function drawNeonEllipse(x, y) {
    noStroke();
    fill(255, 0, 255, 200); // Neon magenta color, semi-transparent
    ellipse(x, y, 10, 10); // Follows the mouse, 10px diameter

    // Add a glow effect
    for (let i = 0; i < 5; i++) {
        let alpha = pow(0.8, i) * 200; // Decrease alpha to create a glow effect
        fill(255, 0, 255, alpha);
        ellipse(x, y, 10 + i * 8, 10 + i * 8); // Increasing diameter for the glow
    }
}