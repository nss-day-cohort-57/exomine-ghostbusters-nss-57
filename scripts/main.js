import { Bureaucracy } from "./Bureaucracy.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Bureaucracy()
}

renderAllHTML()

document.addEventListener("choiceMade", event => {
    console.log("Choice has been made. Regenerating HTML...")
    renderAllHTML()
})

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
