import {governorHTML} from "./Governors.js"


export const Bureaucracy = () => {
    return `
        <h1>Solar System Mining</h1>
    <div class="topSection">
        <article class="selections">
            <section class="choices__governor options">
                ${governorHTML()}
            </section>
            <section class="choices__facility options">
                
                
            </section>
        </article>

        <article class="colonyMaterials">
                
        </article>
    </div>
        
    <div class="lowerSection"
        <section class="facilityMaterials">
                
             
        </section>

        <section class="spaceCart">
                

            <button id="purchaseButton">Purchase Order</button>
        </section>
    </div>

    `
}