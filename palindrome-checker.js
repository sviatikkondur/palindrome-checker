function palindrome(str) {
  const correctStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').join('');
  const reversedString = correctStr.split('').reverse().join('');
  return correctStr === reversedString;
}

console.log(palindrome("A man, a plan, a canal. Panama"));