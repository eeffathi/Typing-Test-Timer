const TEST_AREA = document.querySelector("#test-area");
const BTN_RESET = document.querySelector("#reset");
const ORIGIN_TEXT = document.querySelector("#origin-text p").innerHTML;
const TIMER_TEXTFIELD = document.querySelector(".timer");
const TEXT_WRAPPER = document.querySelector(".test-wrapper")

var timer = [0,0,0,0];
var interval;
var isFirstTimer = true;

/* functions */
function AddZeroForBelowTen(number) {
    if (number <= 9) {
        return "0" + number;
    }
    return number;
}

function timerFunction() {
    // timer++;
    
    let currentTime = AddZeroForBelowTen(timer[0]) + ":" + AddZeroForBelowTen(timer[1]) + ":" + AddZeroForBelowTen(timer[2]);
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
    if(testAreaLength == 0 && isFirstTimer) {
        isFirstTimer = false;
	    console.log("interval timer has started...");
        interval = setInterval(timerFunction, 10);
    }
}

function matchTexts() {
    let testAreaValue = TEST_AREA.value;
    let originTextSubValue = ORIGIN_TEXT.substring(0, testAreaValue.length);

    // console.log("ORIGIN_TEXT : " + ORIGIN_TEXT);
    // console.log("testAreaValue :" + testAreaValue);
    // console.log("originTextSubValue : " + originTextSubValue);

    if (testAreaValue == ORIGIN_TEXT) {
        // debugger;
        console.log("interval is cleared");
        clearInterval(interval);
        TEXT_WRAPPER.style.borderColor = "green";
    }

    else {
        if (testAreaValue == originTextSubValue) {
            TEXT_WRAPPER.style.borderColor = "blue";
        }
        else {
            TEXT_WRAPPER.style.borderColor = "red";
        }
    }

    
}

function clickBtn() {
    console.log("Reset button is clicked!");

    clearInterval(interval);
    interval = null; //make it 0 for testing purposes
    isFirstTimer = true;
    timer = [0,0,0,0];

    TEST_AREA.value = "";
    TIMER_TEXTFIELD.innerHTML = "00:00:00";
    TEXT_WRAPPER.style.borderColor = "grey";
    
}


/* EventListeners */
TEST_AREA.addEventListener("keypress", start, false);
TEST_AREA.addEventListener("keyup", matchTexts, false);
BTN_RESET.addEventListener("click", clickBtn, false);
