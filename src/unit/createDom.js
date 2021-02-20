import { getRandom } from "./getColor.js";
const container = document.getElementById("container");
//创建dom元素
export default function createDom(n, color) {
    const span = document.createElement("span");
    span.innerText = n;
    num.innerText = n;
    //判断是否是素数
    if (isPrime(n)) {
        const div = document.createElement("div");
        span.style.color = color;
        container.appendChild(span);

        div.style.color = color;
        div.className = "item";
        div.innerText = n;
        document.body.appendChild(div);
        getComputedStyle(div).left; //只要读取某个元素的位置或尺寸信息，就会导出触发重绘（reflow)
        div.style.transform = `translate(${getRandom(-200, 200)}px,${getRandom(-200, 200)}px)`;
        div.style.opacity = "0";
        div.ontransitionend = tEnd;
    } else {
        container.appendChild(span);
    }
}

//动画结束
function tEnd() {
    document.body.removeChild(this);
}

//判断是否是素数
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}