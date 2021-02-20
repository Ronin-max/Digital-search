import getNumber from "./unit/getNumber.js";
const run = new getNumber(100);
document.body.onclick = function() {
    if (run.timer) {
        run.stop();
    } else {
        run.start();
    }
}