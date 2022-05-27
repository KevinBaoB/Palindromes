exports.palindrome = function (word) {
  word = word
    .toString()
    .toLowerCase()
    .split("")
    .join("")
    .replaceAll(/[^a-z0-9]/gi, "");

  let rev = word.toString().split("").reverse().join("").toLowerCase();

  if (word === rev) {
    return true;
  } else {
    return false;
  }
};

// console.log(palindrome("racecar"));
// console.log(palindrome(434));
// console.log(palindrome("Noon"));
// console.log(palindrome("nice"));
// console.log(palindrome("Sore was I ere I saw Eros."));
// console.log(palindrome("A man, a plan, a canal -- Panama"));
