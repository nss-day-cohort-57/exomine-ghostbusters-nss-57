const database = {

    governors: [
        { id: 1, name: "Patricia Purdy", colonyId: 1, active: true },
        { id: 2, name: "Katrina Bahringer", colonyId: 2, active: true },
        { id: 3, name: "Lola Wolff", colonyId: 3, active: true },
        { id: 4, name: "Damon Hartmann", colonyId: 1, active: true },
        { id: 5, name: "Bill Lee", colonyId: 3, active: false }
    ],
    colonies: [
        { id: 1, name: "Mars" },
        { id: 2, name: "Europa" },
        { id: 3, name: "Earth" }
    ],
    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Chromium" },
        { id: 3, name: "Sodium" },
        { id: 4, name: "Molybdenum" },
    ],
    facilities: [
        { id: 1, name: "Ganymede", active: true },
        { id: 2, name: "Titan", active: true },
        { id: 3, name: "Io", active: true },
        { id: 4, name: "Pluto", active: false }
    ],
    colonyMaterials: [
        { id: 1, colonyId: 1, mineralId: 1, quantity: 0 },
        { id: 2, colonyId: 1, mineralId: 2, quantity: 0 },
        { id: 3, colonyId: 1, mineralId: 3, quantity: 2 },
        { id: 4, colonyId: 1, mineralId: 4, quantity: 4 },
        { id: 5, colonyId: 2, mineralId: 1, quantity: 1 },
        { id: 6, colonyId: 2, mineralId: 2, quantity: 5 },
        { id: 7, colonyId: 2, mineralId: 3, quantity: 0 },
        { id: 8, colonyId: 2, mineralId: 4, quantity: 0 },
        { id: 9, colonyId: 3, mineralId: 1, quantity: 7 },
        { id: 10, colonyId: 3, mineralId: 2, quantity: 0 },
        { id: 11, colonyId: 3, mineralId: 3, quantity: 3 },
        { id: 12, colonyId: 3, mineralId: 4, quantity: 6 }
    ],
    facilityMaterials: [
        { id: 1, mineralId: 1, facilityId: 1, quantity: 13 },
        { id: 2, mineralId: 1, facilityId: 2, quantity: 10 },
        { id: 3, mineralId: 1, facilityId: 3, quantity: 76 },
        { id: 4, mineralId: 1, facilityId: 4, quantity: 34 },
        { id: 5, mineralId: 2, facilityId: 1, quantity: 12 },
        { id: 6, mineralId: 2, facilityId: 2, quantity: 65 },
        { id: 7, mineralId: 2, facilityId: 3, quantity: 89 },
        { id: 8, mineralId: 2, facilityId: 4, quantity: 16 },
        { id: 9, mineralId: 3, facilityId: 1, quantity: 54 },
        { id: 10, mineralId: 3, facilityId: 2, quantity: 34 },
        { id: 11, mineralId: 3, facilityId: 3, quantity: 32 },
        { id: 12, mineralId: 3, facilityId: 4, quantity: 57 },
        { id: 13, mineralId: 4, facilityId: 1, quantity: 43 },
        { id: 14, mineralId: 4, facilityId: 2, quantity: 76 },
        { id: 15, mineralId: 4, facilityId: 3, quantity: 48 },
        { id: 16, mineralId: 4, facilityId: 4, quantity: 32 },
    ],
    spaceCart: {}
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

export const getColonyMaterials = () => {
    return database.colonyMaterials.map(colonyMaterial => ({ ...colonyMaterial }))
}

export const getFacilityMaterials = () => {
    return database.facilityMaterials.map(facilityMaterial => ({ ...facilityMaterial }))
}

export const setColony = (id) => {
    database.spaceCart.colonyId = id
}

export const setFacility = (id) => {
    database.spaceCart.facilityId = id
}


export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }

