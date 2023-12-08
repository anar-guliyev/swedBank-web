const sloganTemplate = document.createElement("template");
sloganTemplate.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction:column;
    }
    ::slotted(div) {
      background-color: #FBF2EA;
      padding: 25px 10px 20px 10px;
      font-size: 14px;
      flex: 1;
    }

    .head {
      color: #fff;
      font-weight: bold;
      padding: 12px 10px;
      position:relative;
      z-index: 10;
    }
    .head h3 {
      font-size: 16px;
      margin: 0;
    }
    span {
      width: 0; 
      height: 0; 
      border-left: 10px solid transparent;
      border-right: 10px solid transparent; 
      border-top: 15px solid #f00;
      position: absolute;
      bottom: -15px;
      left: 20px;
    }
  </style>
  <div class='head'>
    <h3></h3>
    <span></span>  
  </div>
  <slot name='body'></slot>
`;

class SloganComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(sloganTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const header = this.shadowRoot.querySelector(".head");
    const title = this.getAttribute("title");
    const backgroundColor = this.getAttribute("backgroundColor");

    header.style.backgroundColor = backgroundColor;
    header.querySelector("span").style.borderTopColor = backgroundColor;
    header.querySelector("h3").innerText = title;
  }
}

window.customElements.define("slogan-component", SloganComponent);
