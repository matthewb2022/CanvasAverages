
var images = document.getElementsByClassName("comments grade_details assignment_graded");
var fullBar = document.getElementsByClassName("student_assignment assignment_graded editable");
var studentAssignment = document.getElementsByClassName("student_assignment editable");
var count = 0;
var vals = [];
var skipped = [];
var skipcount = 0;
for (var i = 0; i < images.length; i++){
    if (images[i].getAttribute("tabindex") == null){
        //console.log(images[i].getElementsByTagName("td")[1].innerText);     
        var text = images[i].getElementsByTagName("td")[1].innerText;
        var res = text.split(" ");
        
        vals[count] = parseFloat(res[48]);
        

        
        count++;
            
        
        
    }else{
        skipped[skipcount] = i;
        skipcount++;
    }
}
var timer = ms => new Promise(res=> setTimeout(res, ms))
async function load(time){
    for (var i = 0; i < time; i++){
        await timer(1);
    }
}
console.log(studentAssignment[0].getAttribute("data-muted"));
console.log(vals.length);
async function clickScore(){
       
        var clickAway = document.getElementsByClassName("status");
        alert("calculating class average");
        var origScores = document.getElementsByClassName("assignment_score");
        for (var i = 1; i < origScores.length; i++){
            if (studentAssignment[i-1].getAttribute("data-muted").localeCompare("false") == 0){
            origScores[i].click();
            await load(1);
            origScores = document.getElementsByClassName("assignment_score");
            origScores[i].getElementsByTagName("input")[0].value = vals[i - 1 - skipcount];
            await load(1);
            origScores[i + 1].click();
            await load(1);
            origScores = document.getElementsByClassName("assignment_score");
            }else{
                skipcount++;
            }
            
        }
       
        

}
clickScore();


    