function pigLatin(text) {
  const textArray = text.split("");
  const vowelArray = ["a", "e", "i", "o", "u"];
  if (vowelArray.includes(textArray[0])) {
    console.log("vowel " + textArray[0]);
  } else {
    console.log("consonant " + textArray[0]);
  };
}
