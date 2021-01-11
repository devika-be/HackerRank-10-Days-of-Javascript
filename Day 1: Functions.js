#Problem Link : https://www.hackerrank.com/challenges/js10-function/problem

#Ans :

/*
 * Create the function factorial here
 */
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}
