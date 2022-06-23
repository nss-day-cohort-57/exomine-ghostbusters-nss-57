import { getGovernors } from "./database.js"

const governors = getGovernors()

export const governorHTML = () => {
    let governorString = `<h2>Governors</h2>`
    governorString += `<select id="governors">`
    governorString += `<option value="0">Select a governor...</option>`
    for (const governor of governors) {
        if (governor.active === true) {
            governorString += `<option name="governor" value="${governor.id}">${governor.name}</option>`
        } 
    }
    governorString += "</select>"

    return governorString
}

