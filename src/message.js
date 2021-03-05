const { DiscordAPIError } = require("discord.js");
const { generateMessage,pickRandom } = require("./generator");

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
  if (message.content.match(/^.*[Mm]{1}anu[\?]*$/) || message.content.match(/^[Mm]{1}anu.*/)) {
    const text = generateMessage() + " " + message.author.username +
      " " + pickRandom(emojis);
    message.channel.send(text);
  }
}

module.exports = {
  handleMessage
};