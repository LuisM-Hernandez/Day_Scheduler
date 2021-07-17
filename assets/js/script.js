//Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    //Display the current day
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    function hours() {
        var currentHours = moment().hours();
        console.log(currentHours);
        var timeb = $(".time-block")

        $(".time-block").each(function () {
            
        })
    }

    hours()

})


