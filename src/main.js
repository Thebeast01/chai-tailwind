// This is our main.js file 
import { chaiClasses } from "./constant/classes";
function applyCustomClasses(element) {
    // "Chai-bg-red chai-text-white"
    // ["chai-bg-red", "chai-text-white"]
    const classList = element.className.split(" ");
    classList.forEach(cls => {
        const style = chaiClasses[cls]
        if (style) {
            // chai-bg-red : 
            // style => {background : 'red'}
            Object.assign(element.style, style)
        }

    }
    )

}
function initChaiTailwind() {
    // Get Saare dom elements ko
    const allElements = document.querySelectorAll("*");
    allElements.forEach(ele => applyCustomClasses(ele))

}
initChaiTailwind()
