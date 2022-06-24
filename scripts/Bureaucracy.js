import { governorHTML } from "./Governors.js";
import { facilitiesHTML, colonyMaterialsHTML } from "./Facilities.js";
import { ordersHTML } from "./Orders.js"


import { facilityMaterialsHTML } from "./Minerals.js"

export const Bureaucracy = () => {
    return `
        <h1>Solar System Mining</h1>
    <div class="topSection">
        <article class="selections">
            <section class="choices__governor options">
                ${governorHTML()}
            </section>
            <section class="choices__facility options">
                ${facilitiesHTML()}
            </section>
        </article>

        <article class="colonyMaterials">
                ${colonyMaterialsHTML()}
        </article>
    </div>
        
    <div class="lowerSection"
        <section class="facilityMaterials">
             ${facilityMaterialsHTML()}
        </section>

        <section class="spaceCart">
            ${ordersHTML()}

            <button id="purchaseButton">Purchase Order</button>
        </section>
    </div>

    `
}