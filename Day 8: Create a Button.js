#Problem Link : https://www.hackerrank.com/challenges/js10-create-a-button/problem

#Ans :

#(1)CSS file :

.btnClass {

    width: 96px;

    height: 48px;

    font-size: 24px;

}



#(2)JavaScript file :

var btn = document.createElement("Button");

btn.innerHTML = "0";

btn.id = "btn";

btn.className = "btnClass";



document.body.appendChild(btn);



btn.onclick = function() {

    btn.innerHTML+=2;

}


#(3)HTML file :

<!DOCTYPE html>

<html>

    <head>

        <meta charset="utf-8">

        <title>Button</title>

    </head>

    <body>

    </body>

</html>
