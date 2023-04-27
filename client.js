const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: SHI");
	  setInterval( func = () => { conn.write("Move: up"); }, 500);
  });

 conn.on('data', data => {
  console.log(data);
 });

  return conn;
};

module.exports = { connect };
