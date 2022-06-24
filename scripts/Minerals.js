import { getMinerals, getFacilityMaterials } from "./database.js";

const minerals = getMinerals()
const facilityMaterials = getFacilityMaterials()

//listening event for when facility is selected, and passed into materialsByFacility
document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "facility") {
        
    }
}
)

//iterates facilityMaterials to make new array containing only matching facilities
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

export const facilityMaterialsHTML = () => {
    let facilityMaterialsString = `<h2 class="facilityMaterialHeader">Facility Materials</h2>`
    for (const mineral of minerals) {
        if (mineral.id === ) {
            facilityMaterialsString += `
        <li>
            <input type="radio" name="mineral" value="${facilityMaterials.id}" /> ${facilityMaterials.quantity} Tons of ${mineral.name}
        </li>`
        }
    }
    facilityMaterialsString += "</ul>"
    return facilityMaterialsString
}
