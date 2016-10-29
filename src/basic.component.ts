
let customElements:any;
const template = require("./basic.component.html");
const styles = require("./basic.component.css");
let customInnerHTML = "<style> " + styles + "</style>" + template;

if(!document.head.createShadowRoot)
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
