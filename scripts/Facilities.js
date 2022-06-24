import { getGovernors, getColonies, getFacilities, getColonyMaterials, getMinerals, setColony } from "./database.js";

const governors = getGovernors()
const facilities = getFacilities()
const colonies = getColonies()
const minerals = getMinerals()
const colonyMaterials = getColonyMaterials()

// Declares a changeable governorChosen variable to
// determine which HTML should be rendered

let governorChosen = false

let governorId = null

let colonyId = null

// Event listener that checks to see if the governor change
// event has occured and if so calls the setFacility function, changes 
// governorChosen to true, and dispatches a custom event 

document.addEventListener("change", (event) => { 
    if (event.target.id === "governors") {
   
    governorChosen = true

    governorId = parseInt(event.target.value)

    for (const governor of governors) {
        if (governorId === governor.id)
        colonyId = governor.colonyId
    }

    setColony(colonyId)

    document.dispatchEvent(new CustomEvent("choiceMade"))
    }
})

// Function that iterates through colonies and matches
// an id and returns the colony name

const filterColonies = (id) => {
    for (const colony of colonies) {
        if(colonyId === colony.id)
        return colony.name
    }
}

// Function that builds HTML for the facilities dropdown

export const facilitiesHTML = () => {
    let html = "<h2>Facilities</h2>"

    html += '<select id="facility">'
    html += '<option value="0">Select a facility</option>'
    if(governorChosen === true){
    const arrayOfOptions = facilities.map( (facility) => {
        if (facility.active === true){
            return `<option value="${facility.id}">${facility.name}</option>`
            }
        }
    )

    html += arrayOfOptions.join("")}
    html += "</select>"
    return html
}

// Function that filters materials by 
// colonyId and returns an array of colony materials

const filterMaterialsByColony = (id) => {
    let filteredArray = []
    for (const colonyMaterial of colonyMaterials) {
        if (colonyMaterial.colonyId === id){
            filteredArray.push(colonyMaterial)
        }
    }
    return filteredArray
}

// Function that accepts a material object
//  and returns a mineral name

const mineralName = (materialObject) => {
    for (const mineral of minerals) {
        if(materialObject.mineralId === mineral.id){
            return mineral.name
        }
    }
}

// Function that builds HTML for the 
// colony name and inventory display

export const colonyMaterialsHTML = () => {
    let html = `<h2>Colony Minerals</h2>`
    if (governorChosen === true) {
        html = `<h2>${filterColonies(colonyId)} Minerals</h2> <ul>`
        const filteredMaterials = filterMaterialsByColony(colonyId)
        for (const filteredMaterial of filteredMaterials) {
            if (filteredMaterial.quantity > 0){
                html += `<li>${filteredMaterial.quantity} tons of ${mineralName(filteredMaterial)}`
            }
        }
        html += `</ul>`
    }
    return html
}
