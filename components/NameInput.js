class NameInput extends HTMLElement {
 constructor() {
     console.log("hola mundo")
    super();
    this.attachShadow({ mode: "open" });
 }

 static get styles() {
   return /* css */ `
     :host{

    }
  `;
  }

 connectedCallback() {
    this.render();
 }

 render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${NameInput.styles}</style>
    <div>
    </div>`;
 }
}

customElements.define("name-input", NameInput);