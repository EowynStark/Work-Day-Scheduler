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


// uses Jquery to run the function on a click 
$(document).on('click', function saveScheduleItem(event){
    // uses targeting to make sure the save button is clicked
    if ($(event.target).hasClass('saveBtn')){
        var scheduleContainer = $(event.target).closest('.time-block');
        var scheduleItem = scheduleContainer.find('.description').val();
        var scheduleId = scheduleContainer.attr('id');
        // saves user information as a string
        localStorage.setItem(scheduleId, JSON.stringify({scheduleItem}));
        console.log(scheduleId, scheduleItem);
    }
});
 
// runs display of time
displayCurrentDay();
// displays current day/time every second
setInterval(displayCurrentDay, 1000);
