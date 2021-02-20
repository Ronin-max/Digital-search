const color = ["#f1952c", "#45f72e", "#2ed9f7", "#2e64f7", "#f72ee6", "#f72e49"];
export function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
export default function getColor() {
    return color[getRandom(0, color.length)];
}