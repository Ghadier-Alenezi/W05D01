function isPalindrome(x) {
  // your code here
  for (i = 0; i < x.length; i++) {
    if (x[i] === x[x.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
