// Array of objects representing a todo list.
// Modify this array to contain your own list.
const cartoonArray = [
  {title: 'Chowder', aired: 2007, seasons: 2},
  {title: 'Regular Show', aired: 2009, seasons: 8},
  {title: 'Adventure Time', aired: 2010, seasons: 9},
  {title: 'Courage the Cowardly Dog', aired: 1996, seasons: 4},
  {title: 'Steven Universe', aired:2013, seasons: 5},
  {title: 'The Grim Adventures of Billy and Mandy', aired: 2001, seasons: 6},
  {title: 'Codename: Kids Next Door', aired: 2002, seasons: 6},
  {title: 'We Bare Bears', aired: 2015, seasons: 4},
  {title: 'Samurai Jack', aired: 2001, seasons: 5},
  {title: 'Teen Titans', aired: 2003, seasons: 5},
  {title: 'Fosters Home for Imaginary Friends', aired: 2004, seasons: 6},
  {title: 'Star Wars: The Clone Wars', aired: 2008, seasons: 7},
  {title: 'Ben 10', aired: 2005, seasons: 4},
  {title: 'The Amazing World of Gumball', aired: 2011, seasons: 6},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  cartoonArray.sort((a, b) => compare(a.title, b.title));

  loadTable();
  loadEarliestAirTime();
}

// Adds a task to the array and reloads the page content.
function addNewCartoon() {
  const newCartoonTitle = document.getElementById('title-input').value;
  const newCartoonAirdate = document.getElementById('aired-input').value;
  const newCartoonSeasons = document.getElementById('seasons-input').value;
  const newTask = {title: newCartoonTitle, aired: newAirdate, seasons: newCartoonSeasons};
  cartoonArray.push(newCartoon);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Label'));
  headerRowElement.appendChild(createElement('th', 'Time'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.label));
    rowElement.appendChild(createElement('td', task.time));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.time < shortestTask.time) {
      shortestTask = task;
    }
  }
  document.getElementById('shortest-task').innerText = shortestTask.label;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
