Describe pigLatin()

Test: it can if the first letter in the word is a vowel or consonat
Code:
  const text = "hello";
  pigLatin(text);
  const text2 = "along";
  pigLatin(text2);
expected output: 
  consonant h
  vowel a


Test: adds "way" to the end of words that begin with a vowel
Code: 
  const text = "hello";
  pigLatin(text);
  const text2 = "along";
  pigLatin(text2);
Expected output:
  hello
  alongway

words that begin with 1 consonant:
  move the first letter to the end
  then add "ay" to the end
  ex: move -> ovemay

words that begin with multiple consonants:
  move the first consonants to the end
  add "ay" to the end
  ex: shake -> akeshay  

if the first consonants include "qu"
  move "q" AND "u"
  ex: quick -> ickquay