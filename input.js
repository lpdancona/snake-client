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
  },
};
Input.setupInput();
module.exports = Input;
