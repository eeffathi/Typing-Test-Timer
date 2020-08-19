const TEST_AREA = document.querySelector("#test-area");
const BTN_RESET = document.querySelector("#reset");
const ORIGIN_TEXT = document.querySelector("#origin-text p");
const TIMER_TEXTFIELD = document.querySelector(".timer");

var timer = [0,0,0,0];


/* functions */
function timerFunction() {
    // timer++;
    
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
    TIMER_TEXTFIELD.innerHTML = currentTime;

    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function start() {
    let testAreaLength = TEST_AREA.value.length;
    // console.log(testAreaLength);
    // debugger;
    if(testAreaLength == 0) {
        setInterval(timerFunction, 10);
    }
}

function matchTexts() {
    let testAreaValue = TEST_AREA.value;
    console.log(testAreaValue);
}

function clickBtn() {
    console.log("Reset button is clicked!");
}


/* EventListeners */
TEST_AREA.addEventListener("keypress", start, false);
TEST_AREA.addEventListener("keyup", matchTexts, false);
BTN_RESET.addEventListener("click", clickBtn, false);