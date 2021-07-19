//Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    //Display the current day
    // $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentDay").text(moment().hours());

    $(".saveBtn").on("click", function () {
        var textEl = $(this).siblings(".description").val()
        console.log(textEl);
    })


    function timeBlocks() {
        var currentHour = moment().hours();
        // console.log(currentHour);

        $(".time-block").each(function () {
            // console.log(this);
            var blockHours = parseInt($(this).attr("id").split("-")[1])
            // console.log(blockHours);

            if (currentHour === blockHours) {
                $(this).addClass("present");
            }
            else if (currentHour < blockHours) {
                $(this).addClass("future");
            }
            else{
                $(this).addClass("past")

            }   


        })
    }

    timeBlocks()

})


