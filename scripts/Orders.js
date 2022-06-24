import { getMinerals, getFacilities, getFacilityMaterials, setMineral } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMaterials = getFacilityMaterials()


//display base html 
//event listener once item chosen =true then display secondary html with amount, material, and facility specifics 

let mineralChosen = false
let cartHTML = ""

export const ordersHTML = () => {
        if (mineralChosen === false) {
            return `<h2>Space Cart</h2>`
        } else {
            return `<h2>Space Cart</h2> ${cartHTML}`
        }
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "container") {

            mineralChosen = true

            setMineral(parseInt(event.target.value))

            let mineralFacilityId = parseInt(event.target.value)
            
            spaceCart(mineralFacilityId)

            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

const spaceCart = (mineralFacilityId) => {
  
    let mineralId = 0
    let facilityId= 0

    facilityMaterials
    .filter( material => material.id === mineralFacilityId)
    .map(material => {
        mineralId = material.mineralId
        facilityId = material.facilityId

    }) 
    
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
