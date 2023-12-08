const bankingTabTemplate = document.createElement("template");
bankingTabTemplate.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }

    :host {
      display: none;
    }

    ::slotted(div) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .holder {
      background-color: #fff;
      border-radius: 3px;
      padding: 20px;
      margin-bottom: 20px;
      color: #512b2b;
    }

    .tabs {
      display:flex;
      align-items: center;
    }

    .tabs div {
      background-color: #F7F5F3;
      padding: 20px 22px;
      cursor: pointer;
      font-size: 14px;
      color: #785F5F;
    }

    .tabs div:nth-of-type(1) {
      border-top-left-radius: 3px;
    }

    .tabs div:nth-of-type(2) {
      border-top-right-radius: 3px;
    }

    .tabs div.active {
      background-color: #fff;
    }

    input,select {
      background-color: #EBF8F2;
      border: 1px solid #BCD8DB;
      padding: 10px;
      width: 300px;
      height: 39px;
      border-radius: 3px;
      outline: none;
    }

    input {
      background-color: #fff;
    }

    input[name='amount'] {
      width: 200px;
    }

    select[name='currency'] {    
      margin-left: 6px;
      width: 90px;
    }

    label {
      margin-right: 10px;
      text-align: right;
      width: 118px;
    }

    .payment-tab {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .payment-tab form {
      padding-top: 20px;
    }

    .form-group {
      display:flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .calculator-tab {
      display: none;
    }

    .calculator-tab form {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items:center;
      border-right: 1px solid #E3E3E3;
      padding: 50px 0; 
    }

    .calculator-tab .result {
      flex: 1;
      padding: 25px 0 0 20px;
    }

    .calculator-tab .result div {
      border-bottom: 1px solid #E3E3E3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 15px;
    }

    .calculator-tab span {
      font-size: 20px;
      color: var(--text-primary);
    }

    .slider {
      -webkit-appearance: none;
      height: 10px;
      border-radius: 5px;
      background: #EADED7;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      border: none;
      padding: 0;
    }

    .slider-container {
      position: relative;
      margin-bottom: 15px;
    }

    .slider-container::after,
    .slider-container::before {
      content: '32000';
      position: absolute;
      bottom: -15px;
      left: 0;
      font-size: 12px;
      color: var(--text-primary);
    }

    .slider-container::after {
      content: '320000';
      left: unset;
      right: 0;
    }

    .slider-container span {
      position: absolute;
      left: 0;
      top: -15px;
      font-weight: bold;
      font-size: 14px;
      color: var(--text-primary);
    }
    
    .slider:hover {
      opacity: 1;
    }
    
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #EE7023;
      cursor: pointer;
    }
    
    .slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #04AA6D;
      cursor: pointer;
    }

    .calculator-tab span b{
      font-size: 10px;
      font-weight: ligth;
      color: #785F5F;
    }

    .calculator-tab h4 {
      margin: 0;
    }

    @media (max-width: 430px) {
      .form-group {
        flex-direction: column;
        align-items: start;
        margin-bottom: 15px;
      }

      .form-group div {
        width: 100%;
      }

      label {
        width: auto;
        margin-bottom: 10px;
      }

      .payment-tab form {
        padding-top: 0;
        width: 100%;
      }

      input,select {
        width: 100%;
      }

      input[name='amount'],select[name='currency'] {
        width: 100%;
        margin-left: 0;
      }

      input[name='amount'] {
        margin-bottom: 10px;
      }

      .calculator-tab {
        flex-direction: column;
      }

      .calculator-tab form {
        padding: 0;
      }

      .calculator-tab form, .calculator-tab form .form-group {
        width: 100%;
        border-right: none;
      }

      .result {
        padding: 10px 0 !important;
      }
    }
  </style>
  <div class="tabs">
    <div class='active' data-tab='payment'>Payment</div>
    <div data-tab='calculator'>Calculator</div>
  </div>
  <div class='holder'>
    <div class="payment-tab">
      <form>
        <div class="form-group">
          <label for="account">Account</label>
          <select name="account" value="1">
            <option value="1">Account name 1</option>
            <option value="2">Account name 2</option>
            <option value="3">Account name 3</option>
            <option value="4">Account name 4</option>
            <option value="5">Account name 5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="saved_payment">Saved payments</label>
          <select name="saved_payment" value="1">
            <option value="1">Saved payment 1</option>
            <option value="2">Saved payment 2</option>
            <option value="3">Saved payment 3</option>
            <option value="4">Saved payment 4</option>
            <option value="5">Saved payment 5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <div>
            <input name="amount" type="number" />
            <select name="currency" value="eur">
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" name="description" />
        </div>
      </form>
    </div>
    <slot name='payment-btns'></slot>
    <div class="calculator-tab">
      <form>
        <div class="form-group">
          <label for="loan_size">Loan size</label>
          <div class='slider-container'>
            <span>32000</span>
            <input type="range" value='32000' class='slider' min='32000' max='320000' name="loan_size" />
          </div>
        </div>
        <div class="form-group">
          <label for="period">Period</label>
          <select name="period" value="1">
            <option value="10">10 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
        <div class="form-group">
          <label for="interest">Interest</label>
          <select name="interest" value="1">
            <option value="2">2%</option>
            <option value="3">3%</option>
            <option value="4">4%</option>
            <option value="4.5">4.5%</option>
            <option value="8">8%</option>
          </select>
        </div>
      </form>
      <div class="result">
        <div>
          <h4>Monthly payment</h4>
          <span><span>000.00</span><b>EUR</b></span>
        </div>
        <slot name='calc-btn'></slot>
      </div>
    </div>
  </div>
`;

class BankingTabComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(bankingTabTemplate.content.cloneNode(true));
    this.tab = "payment";
  }

  static get observedAttributes() {
    return ["tab"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const paymentTab = this.shadowRoot.querySelector(".payment-tab");
    const calculatorTab = this.shadowRoot.querySelector(".calculator-tab");
    const paymentBtns = this.shadowRoot.querySelector(
      "slot[name='payment-btns']"
    );
    const calcBtn = this.shadowRoot.querySelector("slot[name='calc-btn']");

    if (name == "tab") {
      if (newValue === "payment") {
        paymentTab.style.display = "flex";
        paymentBtns.style.display = "block";
        calculatorTab.style.display = "none";
        calcBtn.style.display = "none";
      } else {
        paymentTab.style.display = "none";
        paymentBtns.style.display = "none";
        calculatorTab.style.display = "flex";
        calcBtn.style.display = "block";
      }
    }
  }

  calculateMonthlyPayment(years, interestRate, amount) {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = years * 12;
    const monthlyPayment =
      (amount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    return monthlyPayment.toFixed(2);
  }

  connectedCallback() {
    const tabs = this.shadowRoot.querySelectorAll(".tabs div");

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("active")) return;
        const tabName = tab.getAttribute("data-tab");

        this.tab = tabName;
        this.setAttribute("tab", tabName);
        tab.classList.add("active");
        tabs[tabs.length - 1 - idx].classList.remove("active");
      });

      const amount = this.shadowRoot.querySelector("input[type='range']");
      const years = this.shadowRoot.querySelector("select[name='period']");
      const interest = this.shadowRoot.querySelector("select[name='interest']");
      const result = this.shadowRoot.querySelector(".result span span");
      const amountBox = this.shadowRoot.querySelector(".slider-container span");

      amount.addEventListener("change", () => {
        amountBox.textContent = amount.value;
        result.textContent = this.calculateMonthlyPayment(
          years.value,
          interest.value,
          amount.value
        );
      });
      years.addEventListener("change", () => {
        result.textContent = this.calculateMonthlyPayment(
          years.value,
          interest.value,
          amount.value
        );
      });
      interest.addEventListener("change", () => {
        result.textContent = this.calculateMonthlyPayment(
          years.value,
          interest.value,
          amount.value
        );
      });
    });
  }
}

window.customElements.define("banking-tab-component", BankingTabComponent);
