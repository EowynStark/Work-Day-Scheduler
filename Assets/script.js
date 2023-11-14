var currentDay = $('#current-day');
var timeblockEl = $('.time-block');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// displays the current date in header with a 24hr time clock).
function displayCurrentDay() {
    var todaysDate = dayjs().format('dddd MMMM DD, YYYY HH:mm:ss');
    currentDay.text(todaysDate);
}

// applies the past, present, or future class + style
// applied to each timeblock based on current time of day user visits 
function timeblockUpdate() {
    var currentTime = dayjs().hour();
    for (let i = 9; i <= 17; i++){
    var timeblockDiv = document.getElementById(`hour-${i}`);
    if (i < currentTime){
        timeblockDiv.classList.add('past');
    } else if (i === currentTime){
        timeblockDiv.classList.add('present');
    } else {
        timeblockDiv.classList.add('future');
    }
    }
}

$(function (){
});

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
 
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?


    
 
// runs display of time
displayCurrentDay();
// displays current day/time every second
setInterval(displayCurrentDay, 1000);
// runs the update of current time to affect each timeblock accordingly
window.onload = timeblockUpdate;

// GIVEN I am using a daily planner to create a schedule


// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist