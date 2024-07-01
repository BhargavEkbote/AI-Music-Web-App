let harry_potter, peter_pan;
let capture;
let canvas;

function preload() {
    harry_potter = loadSound("music.mp3");
    peter_pan = loadSound("music2.mp3");
}

function setup() {
    // Create a canvas and center it on the screen.
    canvas = createCanvas(640, 480);
    canvas.parent('musicCanvasContainer');
    
    // Access the webcam.
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide(); // Hide the extra component created by p5.js for the webcam live view.
}

function draw() {
    background(200); // Set a background color for the canvas.
    image(capture, 0, 0, width, height); // Draw the webcam video onto the canvas.
}
