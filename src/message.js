const { DiscordAPIError } = require("discord.js");
const { generateMessage,pickRandom } = require("./generator");
const { solveEquation } = require("./equation")

const emojis = [
  ":cat:",
  ":black_cat:",
  ":crying_cat_face:",
  ":pouting_cat:",
  ":pouting_cat:",
  ":pouting_cat:",
  ":pouting_cat:",
  ":smirk_cat:"
]

function handleMessage(message) {
  if (message.content.match(/^.*[Mm]{1}anu[\?]*$/) || message.content.match(/^[Mm]{1}anu/)) {
    const text = generateMessage() + " " + message.author.username +
      " " + pickRandom(emojis);
    message.channel.send(text);
  } else if (message.content.match(/^mwork\s([0-9\.]+\s)+/)) {
    const eIn = message.content.substr(5);
    message.channel.send(`Your answear ${message.author.username}\n` +
      solveEquation(eIn));
  }
}

module.exports = {
  handleMessage
};