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

let gg = true
while (gg = true) {
  port.on('open', () => {
    const data = Buffer.from([0x01, 0x30, 0x31, 0x02, 0x54, 0x51, 0x03, 0x05]);
    port.write(data, (err) => {
      if (err) {
        console.error('Error sending data: ', err);
      } else {
        console.log('Data sent successfully');
      }
    });
  });
}