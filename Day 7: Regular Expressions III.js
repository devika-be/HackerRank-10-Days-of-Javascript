#Problem Link : https://www.hackerrank.com/challenges/js10-regexp-3/problem

#Ans :

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    var re = RegExp('\\d+', 'g');
    return re;
    /*
     * Do not remove the return statement
     */
    return re;
}
