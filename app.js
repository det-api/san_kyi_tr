const SerialPort = require('serialport');

const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

port.on('data', (data) => {
  console.log('Data received:', data.toString());
});

port.on('error', (err) => {
  console.error('Error:', err.message);
});