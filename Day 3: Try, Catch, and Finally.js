#Problem Link : https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

#Ans :

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
    function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    }
    catch(e) {
        console.log(e.message);
    }
    finally {
        console.log(s);
    }
}


