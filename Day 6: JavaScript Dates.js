#Problem Link : https://www.hackerrank.com/challenges/js10-date/problem

#Ans :

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

function getDayName(dateString) {
    const date = new Date(dateString);

    const options = {
      weekday: 'long'
    };
  
    return new Intl.DateTimeFormat('en-Us', options).format(date);
}


