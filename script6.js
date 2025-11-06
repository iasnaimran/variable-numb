

  var number = 10;

  document.write("Initial value: " + number + "<br>");


  number++;
  document.write("Value after increment is: " + number + "<br>");


  number = number + 7;
  document.write("Value after addition is: " + number + "<br>");

  number--;
  document.write("Value after decrement is: " + number + "<br>");


  var remainder = number % 3;
  document.write("The remainder is: " + remainder);





  var userName = prompt("Please enter your name:")


  document.write("Hello, " + userName + "! Welcome to our website ");






  var number = prompt("Enter a number to display its multiplication table:");

  if (number === "" || number === null) {
    number = 5;
  }

  document.write("<h2>Multiplication Table of " + number + "</h2>");

  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }


        let subject3Marks = prompt("Enter obtained marks for Subject 3:");
        let subject4Marks = prompt("Enter obtained marks for Subject 4:");

        // Showing the values in browser
        document.write("<p>Marks for Subject 3: " + subject3Marks + "</p>");
        document.write("<p>Marks for Subject 4: " + subject4Marks + "</p>");





