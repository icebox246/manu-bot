const path = require("path");

let lastHello = 0;
const helloTimeout = 1000;
const sempaiList = [
  "551359031025991690",
  "223497963576492033",
  "432552397550780446",
  "336921078138011650",
  "527576633880608838"
]

async function handleVCChange(oldState, newState) {
  if (sempaiList.includes(oldState.member.user.id) && oldState.member.voice.channel && Date.now() - lastHello > helloTimeout) {
    lastHello = Date.now();
    const connection = await oldState.member.voice.channel.join();
    const dispacher = connection.play(path.join(__dirname, "../res/hewwo.mp3"));
    dispacher.setVolume(2);
    dispacher.on('finish', () => {
      oldState.member.voice.channel.leave();
      dispacher.destroy();
    })
  }
}

module.exports = {
  handleVCChange
}