import { Bureaucracy } from "./Bureaucracy.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Bureaucracy()
}

renderAllHTML()
