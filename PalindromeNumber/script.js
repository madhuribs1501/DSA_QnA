var isPalindrome_Num=function(x)
{
    // return num < 0 ? false : num === +num.toString().split("").reverse().join("");
    return x<0?false:x===+x.toString().split("").reverse().join("")
}
console.log(isPalindrome_Num(123));
//output:false
console.log(isPalindrome_Num(121));
// output: true