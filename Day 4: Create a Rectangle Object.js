#Problem Link : https://www.hackerrank.com/challenges/js10-objects/problem

#Ans :

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
}
