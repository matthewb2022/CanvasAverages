var images = document.getElementsByClassName("comments grade_details assignment_graded");
var fullBar = document.getElementsByClassName("student_assignment assignment_graded editable");
var studentAssignment = document.getElementsByClassName("student_assignment editable");
var count = 0;
var vals = [];
var skipped = [];
var skipcount = 0;
var timer = ms => new Promise(res => setTimeout(res, ms))
    //gathers average data, storing indexes of elements without
    //the what if functionality or the average data
for (var i = 0; i < images.length; i++) {
    if (images[i].getAttribute("tabindex") == null) {
        var text = images[i].getElementsByTagName("td")[1].innerText;
        var res = text.split(" ");
        vals[count] = parseFloat(res[48]);
        count++;
    } else {
        skipped[skipcount] = i;
        skipcount++;
    }
}

//stall function, stalls for 1ms depending on parameter
async function load(time) {
    for (var i = 0; i < time; i++) {
        await timer(1);
    }
}
//clicks score to render html input element
//inserts respective class average in assignment
async function clickScore() {
    alert('Inserting "what-if" scores');
    var origScores = document.getElementsByClassName("assignment_score");
    for (var i = 1; i < origScores.length; i++) {
        if (studentAssignment[i - 1].getAttribute("data-muted").localeCompare("false") == 0) {
            origScores[i].click();
            await load(1);
            origScores = document.getElementsByClassName("assignment_score");
            origScores[i].getElementsByTagName("input")[0].value = vals[i - 1 - skipcount];
            origScores[i + 1].click();
            await load(1);
            origScores = document.getElementsByClassName("assignment_score");
        } else {
            skipcount++;
        }
    }
}
clickScore();