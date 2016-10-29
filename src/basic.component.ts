
let customElements:any;
const prefix: string = "ce";
const selector: string = "basic";
let customInnerHTML = [
    "<style>", 
    require("./basic.component.scss"), 
    "</style>", 
    require("./basic.component.html")
    ].join(" ");

if(!document.head["createShadowRoot"])
    customInnerHTML = customInnerHTML.replace(":host", `${prefix}-${selector}`);

export class BasicComponent extends HTMLElement {
    constructor() {
        super();

    }

    static get observedAttributes () {
        return ['color'];
    }
    
    private _color:string;

    public set color(value) { 
        this.style.setProperty('--color', value);
        this._color = value; 
    }

    public get color(){ return this._color; }

    connectedCallback() {

        if(document.head["createShadowRoot"]) {
            let shadowRoot = (this as any).attachShadow({mode: 'open'});
            shadowRoot.innerHTML = customInnerHTML;            
        } else {
            this.innerHTML = customInnerHTML;
        }  
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        if (name !== 'color') {
        return;
        }

        this.color = newValue;
    }
}

document.addEventListener("DOMContentLoaded",function() {
    (window as any).customElements.define(`${prefix}-${selector}`,BasicComponent);
});
