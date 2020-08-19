const TEST_AREA = document.querySelector("#test-area");
const BTN_RESET = document.querySelector("#reset");
const ORIGIN_TEXT = document.querySelector("#origin-text p");








/* functions */
function start() {
    // let testAreaLength = TEST_AREA.value.length;
    console.log(testAreaLength);
}
















/* EventListeners */
TEST_AREA.addEventListener("keypress", start, false);