const socket = io("/")

socket.on("hello", ()=> console.log('hi'))