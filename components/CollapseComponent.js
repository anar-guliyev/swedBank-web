const collapseTemplate = document.createElement("template");
collapseTemplate.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;
    }
    ::slotted(h5) {
      margin: 0;
      margin-bottom: 10px;
      font-size: 16px;
    }

    ::slotted(ul) {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 14px;
      line-height: 2.2;
    }

    .collapse-head {
      display:flex;
      align-items:center;
      justify-content: space-between;
    }

    .collapse-head svg {
      width: 16px;
      fill: var(--text-primary);
      display: none;
    }

    @media (max-width:430px) {
      :host {
        width: 100%;
        border-top: 1px solid #DDCDC4;
      }
      ::slotted(ul) {
        display: none;
        padding: 0 20px;
        padding-bottom: 15px
      }

      ::slotted(h5) {
        margin-bottom: 0 !important;
      }

      .collapse-head {
        padding: 19px 20px;
      }

      .collapse-head svg {
        display: block;
      }
    }
  </style>
  <div class='collapse-head'>
    <slot name="title">Default Title</slot>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	    viewBox="0 0 185.344 185.344" xml:space="preserve">
		    <path d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
			    c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
		  	  c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"/>
    </svg>
  </div>
  <div id="content" part="content">
      <slot name="content"></slot>
  </div>
`;

class CollapseComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(collapseTemplate.content.cloneNode(true));
  }
  connectedCallback() {
    const head = this.shadowRoot.querySelector(".collapse-head");
    const content = this.querySelector("ul");

    head.addEventListener("click", () => {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
  }
}

// Define the custom element
window.customElements.define("collapse-component", CollapseComponent);
