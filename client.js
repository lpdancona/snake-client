const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  conn.on("connect", () => {
    conn.write("Name: Leo");
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};
module.exports = connect;
