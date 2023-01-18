const connect = require("./client");
const conn = connect();
const Input = {
  setupInput: function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", Input.handleUserInput);
    return stdin;
  },
  handleUserInput: function (data) {
    console.log(data);
    if (data === "\u0003") {
      process.exit();
    }
    if (data === "w") {
      // connect.on("data", () => {
      conn.write("Move: up");
      // });
    }
    if (data === "a") {
      // connect.on("data", () => {
      conn.write("Move: left");
      // });
    }
    if (data === "s") {
      // connect.on("data", () => {
      conn.write("Move: down");
      // });
    }
    if (data === "d") {
      // connect.on("data", () => {
      conn.write("Move: rigth");
      // });
    }
    if (data === "e") {
      // connect.on("data", () => {
      conn.write("Say: you suck!");
      // });
    }
    if (data === "q") {
      // connect.on("data", () => {
      conn.write("Say: i'm the best");
      // });
    }
  },
};
Input.setupInput();
module.exports = Input;
