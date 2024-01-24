function isPalindrome(palindrome) {

     const cleanedStr = palindrome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

     const reversedString = cleanedStr.split("").reverse().join("");

     return cleanedStr === reversedString;
}

// output

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
