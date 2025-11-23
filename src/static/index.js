const io = require("io")

console.log(3)
io("/")
io.on("hello", fn());
function fn () {
    return console.log(34)
}