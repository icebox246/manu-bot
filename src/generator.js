const beginnings = [
  "well",
  "oh",
  "right so,",
]

const adverbs1 = [
  "definitelly",
  "totally",
  "probably",
  "possibly",
  "positively",
  "doubtfully",
]

const answear = [
  "yes",
  "no",
  "maybe",
  "nope",
]


function generateMessage() {
  let text = "";
  if (Math.random() > 0.7) text += pickRandom(beginnings) + " ";
  if (Math.random() > 0.4) text += pickRandom(adverbs1) + " ";
  text += pickRandom(answear);
  
  return text;
}

function pickRandom(array) {
  return array[Math.trunc(Math.random() * (array.length-1))];
}

module.exports = {
  generateMessage,
  pickRandom
}