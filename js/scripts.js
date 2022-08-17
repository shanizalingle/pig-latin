function pigLatin(text) {
  const textArray = text.split("");
  const vowelArray = ["a", "e", "i", "o", "u"];
  let pigLatinWord;
  if (vowelArray.includes(textArray[0])) {
    console.log("vowel " + textArray[0]);
    pigLatinWord = textArray.join("") + "way";
  } else {
    console.log("consonant " + textArray[0]);
    pigLatinWord = textArray.join("");
  };
  return pigLatinWord;
}

