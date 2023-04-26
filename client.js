const net = require("net");
const connect = function () {
const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: 50541,// PORT number here,
  });
 conn.setEncoding("utf8");
conn.on("connect", () => {
    console.log("connect");
    conn.write("Name: SHI");
 console.log("Name");
    //setInterval( func = () => { conn.write("Move: up");  }, 500);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;
