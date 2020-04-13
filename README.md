# JS EXercise 3 

1. ## **Exercise on DOM manipulation**
Create a sample application in JavaScript to perform the following task on list of Project object.
Accept the Project details(id, name, description, status) from user and create a list of Project Object
On click of “View Project List” button display all records in a tabular format.
Note : Create a dynamic table on click event using document object and loop
Verify total number of  < tr > tag and size of the list is equal or not and print the message accordingly on click of “CHECK” button.
Note :  count <tr> tag using document object only 

2. ## **Exercise on ES6**
The objective of this challenge is to create a console Object. You should write three working functions inside MyConsole class to complete this challenge:
Create a log() function that takes user arguments and returns them as a string.
Create a history() function that takes an optional range as an argument.
Create a clearHistory() function to remove the history memory.

###### **Example:**
myconsole.log(123) o/p:--> “123”
myconsole.log(true) o/p:--> “true”
myconsole.log({name : Ram})  o/p:--> “{name : Ram}”
myconsole.history() o/p:--> “123\n true\n {name : Ram}”
myconsole.history(1) o/p:--> “123”
myconsole.history(2) o/p:--> “123\n true”
myconsole.clearHistory() o/p:--> true
myconsole.history() o/p:--> “”

###### **Notes**
The history function:
If no argument was passed to history function all history will be shown.
Each history lines (with and without range) have newline at the end except last line.
