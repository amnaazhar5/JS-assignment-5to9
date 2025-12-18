//----CHAPTER 05----//
//*****QUESTION 01******//
//var num1 = 3;
//var num2 = 5;
//var sum = num1 + num2;

//document.write(" sum of " + num1+ " and "   +  num2 + " is "  +  sum +  "<br><br>");

//--------QUESTION 02---------//

//var subtract = num1 - num2;
//var multiply = num1 * num2;
//var divide = num1 / num2;
//var mod = num1 % num2;


//document.write("Difference of " + num1 + " and " + num2 + " is " + subtract + "<br>");
//document.write("Product of " + num1 + " and " + num2 + " is " + multiply + "<br>");
//document.write("Division of " + num1 + " and " + num2 + " is " + divide + "<br>");
//document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");

//--------QUESTION 03---------//

// a) var value;

// b) document.write(" value after variable deceleration is: " + value + "<br>");

// c) value = 5;

// d) document.write(" initial value: " + value + "<br>")

// e) value++;

//f) document.write(" value after increment is: " + value + "<br>");

//g) value = value + 7;

//h) document.write(" value after addition is: " + value + "<br>");

//i) value--;

//j) document.write(" value of decrement is: " + value + "<br>");

//k) var remainder = value % 3;

//l) document.write(" The remainder is: " + reminder + "<br><br>");

// ----------QUESTION 04--------//

//var ticketPrice = 1000;
//var totalcost = ticketPrice * 5;
//document.write(" Total cost to buy 5 tickets is: " + "PKR<br><br>");

//---------QUESTION 05---------//

//document.write("<h2> Table of 4 </h2>");
//document.write("4 x 1 = 4<br>");
//document.write("4 x 2 = 8<br>");
//document.write("4 x 3 = 12<br>");
//document.write("4 x 4 = 16<br>");
//document.write("4 x 5 = 20<br>");
//document.write("4 x 6 = 24<br>");
//document.write("4 x 7 = 28<br>");
//document.write("4 x 8 = 32<br>");
//document.write("4 x 9 = 36<br>");/document.write("4 x 10 = 40<br>");

//---------QUESTION 06------------//

//var celsius = 25;
//var fahrenheit = (celsius * 9/5) + 32;
//document.write(celsius + " °C is " + fahrenheit + " °F<br>");
//var fahrenheit2 = 70;
//var celsius2 = (fahrenheit2 - 32) * 5/9;
//document.write(fahrenheit2 + " °F is " + celsius2 + " °C<br><br>");

//-----------QUESTION 07-----------//

//document.write("<h2>Shopping Cart</h2>");
//var priceItem1 = 650;
//var qtyItem1 = 2;
//var priceItem2 = 400;
//var qtyItem2 = 1;
//var shipping = 150;
//var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shipping;

//document.write(" Price of item 1 is " + priceItem1 + "<br>");
//document.write(" Quantity of item 1 is " + qtyItem1 + "<br>");
//document.write(" Price of item 2 is " + priceItem2+ "<br>");
//document.write(" Quantity of item 2 is " + qtyItem2 + "<br>");
//document.write(" Shipping Charges " + shipping + "<br><br>");
//document.write(" Total Cost of your order " + totalCost + "<br><br>");

//---------- QUESTION 08------------//

//var totalMarks = 500
//var obtained = 410
//var percentage = (obtained / totalMarks)* 100;
//document.write("Total Marks: " + totalMarks + "<br>");
//document.write("Marks Obtained: " + obtained + "<br>");
//document.write("Percentage: " + percentage + "%<br><br>");

//-------QUESTION 09--------//

//document.write("<h3>CURRENCY IN PKR</h3>");
//var totalPKR = (10 * 104.80) + (25 * 28);
//document.write("TOTAL CURRENCY In PKR: " + totalPKR + "<br><br>");

//--------QUESTION 10-------//

//var result = ((8+5)*10)/2;
//document.write("Final Result: " + result + "<br><br>");

//-------QUESTION 11-------//

//document.write("<h3>AGE CALCULATOR</h3>");
//var currentYear = 2025;
//var birthYear = 2010;
//document.write("They are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear) + " year old.<br><br>");

//------QUESTION 12------//

//var radius = 7;
//var pi = 3.142;
//var circum = 2 * pi * radius;
//var area = pi * radius * radius;
//document.write("The Circumference is " + circum + "<br><br>");
//document.write("The Area is " + area + "<br><br>");

//--------QUESTION 13--------//

//var favoriteSnack = "Choco Chips";
//var currentAge = 15;
//var maxAge = 63;
//var amountPerDay = 2;
//var totalSnack = (maxAge - currentAge) * 365 * amountPerDay;
//document.write("You will need " + totalSnack + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

//----- CHAPTER 6-9 --------//
//---- QUESTION 01 ----//

//var a = 10;
//document.write("Result: <br>");
//document.write("The Value of a is: " + a + "<br>");
//document.write("-------------------------------------------------------------<br></br>");

//document.write("The value of ++a is: " + (++a) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");
//document.write("The Value of a++ is: " + (a++) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");
//document.write("The Value of a is: " + (--a) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");
//document.write("The Value of a is: " + (a--) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");

//------QUESTION 02------//
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//document.write(" a is: " + a + "<br>");
//document.write(" b is: " + b + "<b><br>");
//document.write(" result is: " + result + "<br>");

//-------QUESTION 03-------//

//var userName = prompt("Enter Your Name:");
//document.write(" Hello " + userName + ", Welcome!");

//------QUESTION 05-------//

//var number = prompt("Dear math! I don't want to solve your problems I have my own. Please enter your favorite number?",5);
//document.write(number + " x 1 = " + (number * 1) + "<br>");
//document.write(number + " x 2 = " + (number * 2) + "<br>");
//document.write(number + " x 3 = " + (number * 3) + "<br>");
//document.write(number + " x 4 = " + (number * 4) + "<br>");
//document.write(number + " x 5 = " + (number * 5) + "<br>");
//document.write(number + " x 6 = " + (number * 6) + "<br>");
//document.write(number + " x 7 = " + (number * 7) + "<br>");
//document.write(number + " x 8 = " + (number * 8) + "<br>");
//document.write(number + " x 9 = " + (number * 9) + "<br>");
//document.write(number + " x 10 = " + (number * 10) + "<br>");

//------QUESTION 06------//>

//var subject1 =prompt("Enter First subject Name:");
//var subject2 =prompt("Enter Second subject Name:");
//var subject3 =prompt("Enter Third subject Name:");
//var totalMarksPerSubject = 100;
//var marks1 = +prompt("Enter Obtained Marks For " + subject1);
//var marks2 = +prompt("Enter Obtained Marks For " + subject2);
//var marks3 = +prompt("Enter Obtained Marks For " + subject3);
//var totalObtained = marks1 + marks2 + marks3;
//var allTotalMarks = totalMarksPerSubject * 3;
//var percentage = (totalObtained/allTotalMarks) * 100;
//document.write("<table>");
//document.write("<tr> <th>Subject</th> <th>TotalMarks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");

//document.write("<tr> <td>" + subject1 + " </td> <td>100</td> <td> " + marks1 + " </td> <td>" + marks1 + " %</td></tr>");
//document.write("<tr> <td>" + subject2 + " </td> <td>100</td> <td> " + marks2 + " </td> <td>" + marks2 + " %</td></tr>");
//document.write("<tr> <td>" + subject3 + " </td> <td>100</td> <td> " + marks3 + " </td> <td>" + marks3 + " %</td></tr>");
//document.write("<tr><td></td><td><b>300</b></td><td><b>" + totalObtained + " </b></td><td><b>" + percentage.toFixed(1) + "%</b></td></tr>");
//document.write("</table>");

//---(⁠◔⁠‿⁠◔⁠)---END----(⁠•⁠‿⁠•⁠)//