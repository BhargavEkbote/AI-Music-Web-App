let harry_potter, peter_pan;
let capture;
let canvas;
let poseNet;

// Initialize variables for wrist coordinates
let leftWristX = 0;
let leftWristY = 0;
let rightWristX = 0;
let rightWristY = 0;

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

    // Initialise PoseNet
    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background(200); // Set a background color for the canvas.
    image(capture, 0, 0, width, height); // Draw the webcam video onto the canvas.
    
    // Optional: Add code to visualize wrist coordinates
    fill(255, 0, 0);
    ellipse(leftWristX, leftWristY, 20, 20);
    fill(0, 0, 255);
    ellipse(rightWristX, rightWristY, 20, 20);
}

function modelLoaded() {
    console.log("poseNet is initialized.");
}

function gotPoses(results) {
    if (results.length > 0) {
        // Fetch the x and y coordinates of the left wrist
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        // Fetch the x and y coordinates of the right wrist
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}