function isPalindrome(word) {
  newWord = "";
  for (let i = word.length -1; i >= 0; i--) {
    newWord += word[i]
  }

  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  create an algorithym that iterates through a string 
  test if the string is the same backwards as it is forwards
  use a for loop to iterate through the string from end to begining
  assign each letter to a new string value from beging to end , reversing the original string
  use an if else statement to return true if word are the same 
  and return false if words are not the same 

*/

/*
  i created a for loop that would iterate through the string backwards, and a assign each letter to a new string variable
  i used an if state to check if both strings were the same 
  and return true if the strings were the same or return false if the strings are not the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("engage"));
}

module.exports = isPalindrome;
