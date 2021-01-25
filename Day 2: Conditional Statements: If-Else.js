#Problem Link : https://www.hackerrank.com/challenges/js10-if-else/problem

#Ans :

function getGrade(score) {
    return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}
