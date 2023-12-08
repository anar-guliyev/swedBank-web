const tabsTemplate = document.createElement("template");
tabsTemplate.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }
    :host(:hover) .backdrop {
      opacity: 1;
    }

    .tabs {
      width: 100%;
      display:flex;
      align-items:center;
      background-color: #fff;
    }

    .tabs div {
      border-top: 1px solid #ebe7e2;
      width: 50%;
      padding-top: 12px;
      padding-bottom: 9px;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: -1px;
    }

    svg {
      margin-bottom: 4px;
    }

    .tabs div:first-of-type {
      border-right: 1px solid #ebe7e2;
    }

    .tabs div:hover,div.active {
      color: var(--text-primary);
      fill: var(--text-primary); 
    }

    .tabs div:hover {
      background-color: #FDF8F4;
      border-top-color: var(--text-primary);
    }

    .backdrop {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100dvh);
      background-color: #f4d9c396;
      opacity: 0;
      pointer-events: none;
      transition: all 0.15s;
    }

    @media(max-width: 430px) {
      :host {
        display: none;
      }
      
      .tabs {
        flex-direction: column;
        animation: slideDown 0.3s forwards;
        position: absolute;
        top: 75px;
        left: 0;
        z-index: -1;
      }

      .tabs div {
        width: 100%;
        align-items: start;
        font-size: 16px;
        padding-top: 24px;
        padding-bottom: 23px;
        padding-left: 21px;
      }

      svg {
        display: none;
      }

      .backdrop {
        opacity: 1;
        pointer-events: auto;
        z-index: -2;
      }
    }
    @keyframes slideDown {
      0% {
        transform: translateY(-300%)
      }
      100% {
        transform: translateY(0%)
      }
    }
  </style>
  <div class='tabs'>
    <div class='active' data-tab="home">
      <svg
        width="20px"
        height="18px"
        viewBox="0 0 20 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M10,4.737 L17.368,12.106 L17.368,17.895 L12.105,17.895 L12.105,11.58 L7.895,11.58 L7.895,17.895 L2.632,17.895 L2.632,12.106 L10,4.737 L10,4.737 Z M16.315,6.316 L16.315,2.106 L14.211,2.106 L14.211,4.21 L10,0 L0,10.001 L1.579,11.58 L10,3.159 L18.421,11.58 L20,10.001 L16.315,6.316 L16.315,6.316 Z"
        ></path>
      </svg>
      <span>Home</span>
    </div>
    <div data-tab="banking">
      <svg
        width="20px"
        height="19px"
        viewBox="0 0 20 19"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M15,16 L20,16 C20,17.654 18.655,19 17,19 L7.5,19 C6.672,19 6,18.328 6,17.5 L6,8.5 C6,7.672 6.672,7 7.5,7 L17,7 C18.655,7 20,8.346 20,10 L15,10 C13.346,10 12,11.346 12,13 C12,14.654 13.346,16 15,16 L15,16 Z M15,11 L20,11 L20,15 L15,15 C13.896,15 13,14.104 13,13 C13,11.895 13.896,11 15,11 L15,11 Z M15,13 C15,13.553 15.448,14 16,14 C16.552,14 17,13.553 17,13 C17,12.447 16.552,12 16,12 C15.448,12 15,12.447 15,13 L15,13 Z M2,10 L5,10 L5,12 L2,12 C0.896,12 0,11.104 0,10 L0,2 C0,0.896 0.896,0 2,0 L14,0 C15.105,0 16,0.896 16,2 L16,6 L2,6 L2,10 L2,10 Z M2,3 L14,3 L14,2 L2,2 L2,3 Z"
        ></path>
      </svg>
      <span>Everyday Banking</span>
    </div>
  </div>
  <div class="backdrop"></div>
`;

class TabComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(tabsTemplate.content.cloneNode(true));
    this.active = "home";
  }

  static get observedAttributes() {
    return ["show"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "show") {
      this.style.display = newValue ? "block" : "none";
    }
  }

  connectedCallback() {
    const tabs = Array.from([...this.shadowRoot.querySelectorAll(".tabs div")]);
    const backdrop = this.shadowRoot.querySelector(".backdrop");
    const burgerIcon = document.getElementById("hamburger");
    const titleComponent = document.querySelector("title-component");
    const slogans = document.querySelector(".card.slogans");
    const description = document.querySelector(".card.description");
    const homeTabComponent = document.querySelector("home-tab-component");
    const bankingTabComponent = document.querySelector("banking-tab-component");

    tabs.forEach((tab, idx) => {
      const tabName = tab.getAttribute("data-tab");

      tab.addEventListener("click", () => {
        this.active = tabName;
        titleComponent.setAttribute(
          "title",
          tabName === "home" ? "Home" : "Igapäevapangandus"
        );
        if (tabName === "home") {
          slogans.style.display = "grid";
          description.style.display = "none";
          homeTabComponent.style.display = "block";
          bankingTabComponent.style.display = "none";
        } else {
          slogans.style.display = "none";
          description.style.display = "block";
          homeTabComponent.style.display = "none";
          bankingTabComponent.style.display = "block";
        }
        tab.classList.add("active");
        tabs[tabs.length - 1 - idx].classList.remove("active");
        if (window.innerWidth <= 430) {
          this.setAttribute("show", "");
          burgerIcon.classList.remove("opened");
        }
      });
    });

    backdrop.addEventListener("click", () => {
      this.setAttribute("show", "");
      burgerIcon.classList.remove("opened");
    });
  }
}

window.customElements.define("tabs-component", TabComponent);
