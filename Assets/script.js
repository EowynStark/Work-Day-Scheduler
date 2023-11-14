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

// adds event listener to the save button
// saves input to local storage by the hour as a string 
document.addEventListener('click', function saveScheduleItem(event) {
    if (event.target.classList.contains('saveBtn')) {
        var scheduleContainer = event.target.closest('.time-block');
        var scheduleItem = scheduleContainer.querySelector('.description').value;
        var scheduleId = scheduleContainer.id;
        localStorage.setItem(scheduleId, JSON.stringify({scheduleItem}));
    }
})

 
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    $(function (){
    });
    
 
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