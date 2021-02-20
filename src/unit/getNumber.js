import getColor from "./getColor.js";
import createDom from "./createDom.js";
export default class getNumber {
    constructor(speed = 500) {
        this.speed = speed;
        this.n = 1;
        this.timer = null;
    }
    start() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            //传递数字和随机颜色
            createDom(this.n++, getColor());
        }, this.speed)
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}