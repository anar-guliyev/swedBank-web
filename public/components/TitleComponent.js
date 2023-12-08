const titleTemplate = document.createElement("template");
titleTemplate.innerHTML = `
  <style>
    h2 {
      color: var(--text-primary);
      padding-left: 22px;
      margin-top: 0;
      margin-bottom: 20px;
    }
  </style>
  <h2></h2>
`;

class TitleComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(titleTemplate.content.cloneNode(true));
    this.header = this.shadowRoot.querySelector("h2");
  }

  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "title") {
      this.header.innerText = newValue;
    }
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    this.header.innerText = title || "Home";
  }
}

window.customElements.define("title-component", TitleComponent);
