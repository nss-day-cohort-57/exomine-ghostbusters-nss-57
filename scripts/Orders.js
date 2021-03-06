import { getMinerals, getFacilities, getFacilityMaterials, setMineral, purchaseMineral } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMaterials = getFacilityMaterials()

// Event Listener that check for click event on purchase button and 
// calls the purchaseMineral function

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("purchaseButton")) {
             purchaseMineral()
        }
    }
)

//display base html 
//event listener once item chosen =true then display secondary html with amount, material, and facility specifics 

let mineralChosen = false
let mineralFacilityId = null

//fn displays base html unless the event listener is active and the boolean is changed 
export const ordersHTML = () => {
        if (mineralChosen === false) {
            return `<h2>Space Cart</h2>`
        } else {
            return `<h2>Space Cart</h2> <p>${spaceCart(mineralFacilityId)}</p>`
        }
}
//event listener that parses the mineralFacilty id from the selected item and sets 
//mineralFacilty id equal to its value. 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {

            mineralChosen = true

            mineralFacilityId = parseInt(event.target.value)
            
            spaceCart(mineralFacilityId)

            document.dispatchEvent( new CustomEvent("choiceMade"))
        }
    }
)

//fn that finds the corresponding mineral name and facility based on the parsed id from 
//the event listenerserve
const spaceCart = (mineralFacilityId) => {
    let cartHTML = ""
  
    let mineralId = 0
    let facilityId= 0

    facilityMaterials
    .filter( material => material.id === mineralFacilityId)
    .map(material => {
        mineralId = material.mineralId
        facilityId = material.facilityId

    }) 
    
    setMineral(mineralId)

    minerals
    .filter( mineral => mineral.id === mineralId)
    .map(mineral => {
            return cartHTML += `1 ton of ${mineral.name}`
    })

    facilities
    .filter( facility => facility.id === facilityId)
    .map(facility => {
            return cartHTML += ` from ${facility.name}`
    })
    return cartHTML
}
