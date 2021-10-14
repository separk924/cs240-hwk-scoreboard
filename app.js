/**
 * Scoreboard Homework
 * @Author SeungPark
 */

/**
 * Score boxes
 */
let score1 = document.querySelector("td[name='awayScore0']");
let score2 = document.querySelector("td[name='awayScore1']");
let score3 = document.querySelector("td[name='awayScore2']");
let score4 = document.querySelector("td[name='awayScore3']");
let score5 = document.querySelector("td[name='awayScore4']");
let score6 = document.querySelector("td[name='awayScore5']");
let score7 = document.querySelector("td[name='awayScore6']");
let aTotal = document.querySelector("td[name='awayRuns']");

let hscore1 = document.querySelector("td[name='homeScore0']");
let hscore2 = document.querySelector("td[name='homeScore1']");
let hscore3 = document.querySelector("td[name='homeScore2']");
let hscore4 = document.querySelector("td[name='homeScore3']");
let hscore5 = document.querySelector("td[name='homeScore4']");
let hscore6 = document.querySelector("td[name='homeScore5']");
let hscore7 = document.querySelector("td[name='homeScore6']");
let hTotal = document.querySelector("td[name='homeRuns']");

/** Control Center */

var spot = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1]
];

/**
 * Function for adding to the score boxes
 */
let runsInc = document.querySelector("#up");
runsInc.addEventListener("click", function() {
    let who = document.querySelector("#who");
    let inning = document.querySelector("#inning");
    if(who.value == "away"){
        if(inning.value == 1){
            let theSpot = spot[0][0]++;
            score1.innerHTML = theSpot;
        }if(inning.value == 2){
            let theSpot = spot[0][1]++;
            score2.innerHTML = theSpot;
        }if(inning.value == 3){
            let theSpot = spot[0][2]++;
            score3.innerHTML = theSpot;
        }if(inning.value == 4){
            let theSpot = spot[0][3]++;
            score4.innerHTML = theSpot;
        }if(inning.value == 5){
            let theSpot = spot[0][4]++;
            score5.innerHTML = theSpot;
        }if(inning.value == 6){
            let theSpot = spot[0][5]++;
            score6.innerHTML = theSpot;
        }if(inning.value == 7){
            let theSpot = spot[0][6]++;
            score7.innerHTML = theSpot;
        }
        let total = spot[0][7]++;
        aTotal.innerHTML = total;
    }
    if(who.value == "home"){
        if(inning.value == 1){
            let theSpot = spot[1][0]++;
            hscore1.innerHTML = theSpot;
        }if(inning.value == 2){
            let theSpot = spot[1][1]++;
            hscore2.innerHTML = theSpot;
        }if(inning.value == 3){
            let theSpot = spot[1][2]++;
            hscore3.innerHTML = theSpot;
        }if(inning.value == 4){
            let theSpot = spot[1][3]++;
            hscore4.innerHTML = theSpot;
        }if(inning.value == 5){
            let theSpot = spot[1][4]++;
            hscore5.innerHTML = theSpot;
        }if(inning.value == 6){
            let theSpot = spot[1][5]++;
            hscore6.innerHTML = theSpot;
        }if(inning.value == 7){
            let theSpot = spot[1][6]++;
            hscore7.innerHTML = theSpot;
        }
        let total1 = spot[1][7]++;
        hTotal.innerHTML = total1;
    }
});

/**
 * Function for subtracting to the score boxes
 */
let runsDec = document.querySelector("#down");
runsDec.addEventListener("click", function() {
    let who = document.querySelector("#who");
    let inning = document.querySelector("#inning");
    if(who.value == "away"){
        if(inning.value == 1){
            let theSpot = spot[0][0]--;
            score1.innerHTML = theSpot;
        }if(inning.value == 2){
            let theSpot = spot[0][1]--;
            score2.innerHTML = theSpot;
        }if(inning.value == 3){
            let theSpot = spot[0][2]--;
            score3.innerHTML = theSpot;
        }if(inning.value == 4){
            let theSpot = spot[0][3]--;
            score4.innerHTML = theSpot;
        }if(inning.value == 5){
            let theSpot = spot[0][4]--;
            score5.innerHTML = theSpot;
        }if(inning.value == 6){
            let theSpot = spot[0][5]--;
            score6.innerHTML = theSpot;
        }if(inning.value == 7){
            let theSpot = spot[0][6]--;
            score7.innerHTML = theSpot;
        }
        let total = spot[0][7]--;
        aTotal.innerHTML = total;
    }
    if(who.value == "home"){
        if(inning.value == 1){
            let theSpot = spot[1][0]--;
            hscore1.innerHTML = theSpot;
        }if(inning.value == 2){
            let theSpot = spot[1][1]--;
            hscore2.innerHTML = theSpot;
        }if(inning.value == 3){
            let theSpot = spot[1][2]--;
            hscore3.innerHTML = theSpot;
        }if(inning.value == 4){
            let theSpot = spot[1][3]--;
            hscore4.innerHTML = theSpot;
        }if(inning.value == 5){
            let theSpot = spot[1][4]--;
            hscore5.innerHTML = theSpot;
        }if(inning.value == 6){
            let theSpot = spot[1][5]--;
            hscore6.innerHTML = theSpot;
        }if(inning.value == 7){
            let theSpot = spot[1][6]--;
            hscore7.innerHTML = theSpot;
        }
        let total1 = spot[1][7]--;
        hTotal.innerHTML = total1;
    }
});

/**
 * Plays the effects/music when the effects/music box is clicked
 * Also changes the picture to the right of the scorebaord when either
 * box is clicked
 */
allEffects=["sounds/charge1.mp3","sounds/charge2.mp3","sounds/buildup.mp3"];
allImages=["images/megaphone.png","images/sdchicken.jpg","images/ups.png"];
let effect = document.querySelector("button[name='effects']");
effect.addEventListener("click", function(){
    new Audio(allEffects[Math.floor(Math.random()*allEffects.length)]).play();
    let theImage = allImages[Math.floor(Math.random()*allImages.length)];
    document.getElementById('theImg').src=theImage;
});
let music = document.querySelector("button[name='music']");
music.addEventListener("click", function(){
    new Audio("sounds/chickendance.mp3").play();
    document.getElementById('theImg').src="images/sdchicken.jpg";
});