const net = require("net");
const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,// PORT number here,
  });


const connect  = require("./client");
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
   console.log("connected"); // code that does something when the connection is first established
  });
  conn.on("data", (data) =>  {
    console.log("server says,", data); // code that does something when the connection is first established
  }); 
  return conn;

console.log("Connecting ...");
connect();

