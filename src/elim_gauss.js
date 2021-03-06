const {
  execFile
} = require("child_process")
const path = require("path")

function solveGauss(input, callback) {
  const child = execFile(path.join(process.cwd(),"bin/elim_gauss/ega.exe"));

  input = input.split("\n").join(" ");
  child.stdin.write(input.toString());
  child.stdin.end();

  const timeout = setTimeout(() => {
    child.kill('SIGTERM')
    let output = "got a to long error";
    console.log("got a to long error");
    callback(output);
  }, 5000);

  child.stdout.on('data', data => {
    let output = data.toString();
    clearTimeout(timeout);
    callback("```\n" + output + "\n```");
  });
}

/*
  example:
 3
 2 -1  4  5
 1  2 -1 -1
 -4 -2  1  4
*/

module.exports = {
  solveGauss
}