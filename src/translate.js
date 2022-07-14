const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    const last = word.substr(index);
    const first = word.substr(0, index);
    return last + first + "ay";
  }
};

module.exports = translate;
