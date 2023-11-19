var currentDay = $('#current-day');
var timeblockEl = $('.time-block');


// displays the current date in header with a 24hr time clock).
function displayCurrentDay() {
    var todaysDate = dayjs().format('dddd MMMM DD, YYYY HH:mm:ss');
    currentDay.text(todaysDate);
};

// applies the past, present, or future class + style
// applied to each timeblock based on current time of day user visits 
$(document).ready(function timeblockUpdate() {
    var currentTime = dayjs().hour();
    // loops through each time block by id and updates classes to apply style based on time user visits
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
});

// retrieves locally stored input and updates schedules content accordingly
// uses Jquery to run the function when the rest of the page is loaded
$(document).ready(function retrieveScheduleItem(){
    for (let i = 9; i <= 17; i++){
        var scheduleId = `hour-${i}`;
        var storedScheduleItem = localStorage.getItem(scheduleId);
        if (storedScheduleItem){
            var retrievedScheduleItem = JSON.parse(storedScheduleItem);
            var scheduleContainer = document.getElementById(scheduleId);
            var scheduleTextInput = scheduleContainer.querySelector('.description');
            scheduleTextInput.value= retrievedScheduleItem.scheduleItem;
        }
    }
});

// adds event listener to the save button
// saves input to local storage by the hour as a string 
// uses Jquery to run the function on a click 
// uses targeting to ensure the save button is clicked in order to save
$(document).on('click', function saveScheduleItem(event){
    if ($(event.target).hasClass('saveBtn')){
        var scheduleContainer = $(event.target).closest('.time-block');
        var scheduleItem = scheduleContainer.find('.description').val();
        var scheduleId = scheduleContainer.attr('id');
        localStorage.setItem(scheduleId, JSON.stringify({scheduleItem}));
        console.log(scheduleId, scheduleItem);
    }
});
 
// runs display of time
displayCurrentDay();
// displays current day/time every second
setInterval(displayCurrentDay, 1000);
// runs the update of current time to affect each timeblock accordingly
// window.onload = timeblockUpdate();
