
let customElements:any;
let customInnerHTML = "<style> " + require("./basic.component.scss") + "</style>" + require("./basic.component.html");

if(!document.head["createShadowRoot"])
    customInnerHTML = customInnerHTML.replace(":host", "ce-basic");

export class BasicComponent extends HTMLElement {
    constructor() {
        super();

    }
    
    connectedCallback() {
        try {
            let shadowRoot = (this as any).attachShadow({mode: 'open'});
            shadowRoot.innerHTML = customInnerHTML;
        } catch (e){
            this.innerHTML = customInnerHTML;
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
