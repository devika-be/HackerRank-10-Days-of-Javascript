#Problem Link : https://www.hackerrank.com/challenges/js10-regexp-2/problem

#Ans :

function regexVar() {
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');
    return re;
}
