// ------------------CHAPTER 6-----------------------

// task01
// var a = 20;
// document.write("Result: <br> The value a is: " + a + "<br> ---------------------------------<br><br>" );

// document.write("The value of ++a is: " + ++a + "<br> Now the value of a is: " + a + "<br> <br>");
// document.write("The value of a++ is: " + a++ + "<br> Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + --a + "<br> Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a-- + "<br> Now the value of a is: " + a + "<br><br>");


// task02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a + "<br>b is: " + b + "<br>result is: " + result + "<br><br>");

// task03
//  var userName = prompt("Enter your name");
//  alert("Welcome " + userName);

// task05
// var num = prompt("Enter Number: ", 5);
// document.write("<h1>Table of " + num + "</h1><br>");

// document.write(num + " * " + " 1 = " + num*1 +"<br>"  );
// document.write(num + " * " + " 2 = " + num*2 +"<br>"  );
// document.write(num + " * " + " 3 = " + num*3 +"<br>"  );
// document.write(num + " * " + " 4 = " + num*4 +"<br>"  );
// document.write(num + " * " + " 5 = " + num*5 +"<br>"  );
// document.write(num + " * " + " 6 = " + num*6 +"<br>"  );
// document.write(num + " * " + " 7 = " + num*7 +"<br>"  );
// document.write(num + " * " + " 8 = " + num*8 +"<br>"  );
// document.write(num + " * " + " 9 = " + num*9 +"<br>"  );
// document.write(num + " * " + " 10 = " + num*10 +"<br>"  );

// task06
var subject1 = prompt("Enter name of Subject");
var subject2 = prompt("Enter name of Subject");
var subject3 = prompt("Enter name of Subject");

var maxMarks = 100;
var totalMarks = maxMarks*3;

var obtainMarksSubject1 = prompt("Enter obtained marks of " + subject1 + " out of 100 ");
var obtainMarksSubject2 = prompt("Enter obtained marks of " + subject2 + " out of 100 ");
var obtainMarksSubject3 = prompt("Enter obtained marks of " + subject3 + " out of 100 ");
var totalObtainMarks = ((parseFloat(obtainMarksSubject1)) + (parseFloat(obtainMarksSubject2)) + (parseFloat(obtainMarksSubject3)));

var percentageSubject1 = (obtainMarksSubject1/maxMarks)*100;
var percentageSubject2 = (obtainMarksSubject2/maxMarks)*100;
var percentageSubject3 = (obtainMarksSubject3/maxMarks)*100;
var totalpercentage = (totalObtainMarks/totalMarks) *100;


document.write("<table border = 1 cellpadding = 5 cellspacing = 0> <tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr> ");
document.write("<tr><td>" + subject1 + "</td>" +  "<td>" + maxMarks + "</td>" + "<td>" + obtainMarksSubject1 +"</td>" + "<td>" + percentageSubject1 + "%</td>"  );
document.write("<tr><td>" + subject2 + "</td>" +  "<td>" + maxMarks + "</td>" + "<td>" + obtainMarksSubject2 +"</td>" + "<td>" + percentageSubject2 + "%</td>" );
document.write("<tr><td>" + subject3 + "</td>" +  "<td>" + maxMarks + "</td>" + "<td>" + obtainMarksSubject3 +"</td>" + "<td>" + percentageSubject3 + "%</td>"  );
document.write("<tr><td> <b>Total</b> </td>" +  "<td>" + totalMarks + "</td>" + "<td>" + totalObtainMarks +"</td>" + "<td>" + totalpercentage + "%</td>" + "</table> <br> ");
