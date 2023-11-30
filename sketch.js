// let serial;
// let portName = "/dev/tty.usbmodem1401"
// let potval = 0
// let activesensor = ""
// let currentSensor = "" //potentiometer, photocell

// let potValue = 0;
// let photoValue = 0;

// function setup() {
//   createCanvas(600, 600)

//   serial = new p5.SerialPort()

//   serial.onList(gotList)
//   serial.list()

//   serial.onOpen(gotOpen)
//   serial.openPort(portName);

//   serial.onData(gotData)

// }

// function gotList(portList) {
//   for (let i = 0; i < portList.length; i++) {
//     console.log(portList[i])
//   }
// }

// function gotOpen() {
//   console.log("Serial port is open on port: ")
// }

// function gotData() {
//   let newData = serial.readLine();
//   if(newData.length <=0) return;
//   console.log(newData);

  // potval = newData/2;

  // if(newData === "potentiometer: " || newData === "Photocell: "){
  //   activesensor = newData;
  // }
  // else{
  //   if(activesensor ==="potentiometer: "){
  //     potval = newData/2
  //   }
  //   if(activesensor === "Photocell: "){
  //     photoValue = newData/4
  //   }
  // }



// let circleSize = 20;
// let canvasSize;
// let isIncreasing = false;
// let serial;

// function setup() {
//   createCanvas(400, 400);
//   canvasSize = width * height;

//   // Open a serial port connection with a specific port name
//   const portName = '/dev/tty.usbmodem1401'; // Replace this with your actual port name
//   serial = new p5.SerialPort();
//   serial.on('connected', serverConnected);
//   serial.on('open', () => portOpen(portName));
//   serial.on('data', serialEvent);
//   serial.on('error', serialError);
//   serial.on('close', portClose);
//   serial.open(portName);

//   // Attach click event to the button
//   document.getElementById('arduinoButton').addEventListener('click', () => {
//     // Toggle the size-changing flag
//     isIncreasing = !isIncreasing;
//   });
// }

// function draw() {
//   background(220);

//   // Increase or decrease circle size based on button press
//   if (isIncreasing) {
//     circleSize += 2;
//   } else {
//     circleSize -= 2;
//   }

//   // Draw the circle
//   fill(0)
//   ellipse(width / 2, height / 2, circleSize, circleSize);

//   // Check if the circle covers the entire canvas
//   if (circleSize >= canvasSize || circleSize <= 0) {
//     // Reset the size and direction
//     circleSize = 20;
//     isIncreasing = false;
//   }
// }

// function gotData() {
  
//   function gotList(portList) {
//     for (let i = 0; i < portList.length; i++) {
//       console.log(portList[i])
//     }
//   }
  
//   function gotOpen() {
//     console.log("Serial port is open on port: ")
//   }
  
//   function gotData() {
//     let newData = serial.readLine();
//     if(newData.length <=0) return;
//     console.log(newData);
//   }


// Functions for handling serial events
// function serverConnected() {
//   console.log('Server Connected');
// }

// function portOpen(portName) {
//   console.log('Serial port opened:', portName);
// }

// function serialEvent() {
//   // You can add code here to handle incoming serial data if needed
// }

// function serialError(err) {
//   console.log('Serial port error: ' + err);
// }

// function portClose() {
//   console.log('Serial port closed');
// }


let serial;
let photoValue = 0;
//let ObjSpeed = 1;
let portName = "/dev/tty.usbmodem1401"

function setup(){
  createCanvas(1000,1000)

  serial = new p5.SerialPort()

  serial.onList(gotList)
  serial.list()

  serial.onOpen(gotOpen)
  serial.openPort(portName);

  serial.onData(gotData)
}

function draw(){

  let sizeObj = map(photoValue, 0, 1023, 1,7);
  console.log("sizeOBJ is: ", sizeObj)

  background('black')
  setCenter(width/2, height/2);
  
  fill('#fff9bd')
  noStroke()
  polarEllipses(6,50,50,100*sizeObj)
  
  push()
  translate(10,10)
  rotate(frameCount/70)
  fill('#ffd678')
  polarEllipses(6,30,30,120*sizeObj)
  
  pop()
  rotate(frameCount*0.001)
  fill('#ff9e42')
  polarTriangles(12, 40, 200*sizeObj);
  
  rotate(frameCount*0.005)
  fill('#F00505')
  polarSquares(12,20,260*sizeObj)
  
  fill('#f75939')
  polarEllipses(12,20,20,200*sizeObj)
  
  
  rotate(frameCount*0.01)
  fill('white')
  polarEllipses(12,5,5,260*sizeObj)
  
}

// function gotData() {
//   let photoValue = Number(serial.read()); // Read the incoming data
//   console.log(photoValue);
// }

function gotList(portList) {
  for (let i = 0; i < portList.length; i++) {
    console.log(portList[i])
  }
}

function gotOpen() {
  console.log("Serial port is open on port: ")
}

function gotData() {
  let newData = serial.readLine();
  if(newData.length <=0) return;
  // console.log("new data is: ",newData);

  photoValue = newData; // Read the incoming data
  // console.log("new photoValue is: ", photoValue);
}