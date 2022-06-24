import { getMinerals, getFacilityMaterials, getFacilities, setFacility } from "./database.js";

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMaterials = getFacilityMaterials()

let mineralId = null
let facilityId = null
let chosenFacility = null

//listening event for when facility is selected, and passed into materialsByFacility
document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {

        facilityId = parseInt(event.target.value)

        for (const facility of facilities) {
            if (facilityId === facility.id)
                chosenFacility = facility
        }

        setFacility(facilityId)

        document.dispatchEvent(new CustomEvent("choiceMade"))
    }
})

const filterFacilities = (id) => {
    for (const facility of facilities) {
        if (facilityId === facility.id)
            return facility.name
    }
}

const filterMinerals = (selectedMaterialObject) => {
    for (const mineral of minerals) {
        if (selectedMaterialObject.mineralId === mineral.id)
            return mineral.name
    }
}

//filters all facilityMaterials to make new array containing only matching facilityMaterial with positive stock
const materialsByFacility = (facility) => {
    let filteredFacilityMaterials = []
    for (const facilityMaterial of facilityMaterials) {
        if ((facilityMaterial.facilityId === facility.id) && (facilityMaterial.quantity > 0)) {
            filteredFacilityMaterials.push(facilityMaterial)
        }
    }
    return filteredFacilityMaterials
    //array contains only materials present at selected facility
}

//create HTML string containing minerals associated with chosen facility
//need filtered mineral array by chosen facility
export const facilityMaterialsHTML = () => {
    let facilityMaterialsString = ``
    if (chosenFacility === null) {
        facilityMaterialsString = `<h2 class="facilityMaterialHeader">Facility Materials</h2>`
    } else {
        facilityMaterialsString = `<h2 class="facilityMaterialHeader">Facility Materials for ${filterFacilities(facilityId)}</h2>`
        const selectedMaterials = materialsByFacility(chosenFacility)
        for (const selectedMaterial of selectedMaterials) {
            facilityMaterialsString += `
            <li>
                <input type="radio" name="mineral" value="${selectedMaterial.id}" /> ${selectedMaterial.quantity} tons of ${filterMinerals(selectedMaterial)}
            </li>`
        }
        facilityMaterialsString += "</ul>"
    }
    return facilityMaterialsString
}
