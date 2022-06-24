import { ordersHTML } from "./Orders.js"



export const Bureaucracy = () => {
    return `
        <h1>Solar System Mining</h1>
    <div class="topSection">
        <article class="selections">
            <section class="choices__governor options">
                
                
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
            ${ordersHTML()}

            <button id="purchaseButton">Purchase Order</button>
        </section>
    </div>

    `
}