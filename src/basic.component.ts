
let customElements:any;
const template = require("./basic.component.html");

export class BasicComponent extends HTMLElement {
    constructor() {
        super();

    }
    
    connectedCallback() {

        /* shadow dom only support in Chrome Canary */
        
        try {
            let shadowRoot = (this as any).attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        } catch (e){
            this.innerHTML = template;
        }   
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define("ce-basic",BasicComponent);
});
