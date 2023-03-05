const intervalId = setInterval(() => {
  console.log("Hey! I'm still here ;)");
}, 1000);

process.on("SIGINT", () => {
  clearInterval(intervalId);
});

process.on("SIGTERM", () => {
  clearInterval(intervalId);
});
