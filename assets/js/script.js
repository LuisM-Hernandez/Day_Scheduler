//Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    //Display the current day
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    $(".saveBtn").on("click", function () {
        var blockText = $(this).siblings(".description").val()
        var timeBlock = $(this).parent().attr("id")
        localStorage.setItem(timeBlock, blockText)

    });


    function displayBlocks() {
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


    for (let i = 9; i < 18; i++) {
        var hourId = ("#hour-"+i)
        var storageNum = ("hour-"+i)

        $(hourId + " .description").val(localStorage.getItem(storageNum))
    }

    displayBlocks()

})


