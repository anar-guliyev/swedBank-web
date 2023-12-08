const homeTabTemplate = document.createElement("template");
homeTabTemplate.innerHTML = `
  <style>
    .holder {
      background-color: #fff;
      border-radius: 3px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .subtitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .subtitle h5 {
      margin: 0;
      font-size: 15px;
    }
    
    .actions {
      display: flex;
    }

    .actions div {
      display: flex;
      align-items: center;
      margin-left: 10px;
      color: #31A3AE;
      font-size: 12px;
    }
    
    .actions div img {
      margin-right: 5px;
    }

    table {
      width: 100%;
      text-align: right;    
      border-collapse: collapse;
      font-size: 14px;
    }

    table tr td {
      padding: 12px 10px;
    }

    tr td:first-of-type {
      text-align: left;
    }

    table thead tr {
      background-color: #E9F7FB;
    }

    tbody tr:not(:last-of-type) {
      border-bottom: 1px solid #EBE7E2;
    }

    tbody tr:last-of-type td:last-of-type {
      font-size: 20px;
    }

    @media (max-width: 430px) {
      table {
        font-size: 13px;
      }

      table tr td:nth-of-type(2),
      table tr td:nth-of-type(3),
      table tr td:nth-of-type(4) {
        display: none;
      }

      tbody tr:last-of-type td:last-of-type {
        font-size: 16px;
      }
    }
  </style>
  <div class='holder'>
    <div class="subtitle">
      <h5>Your Swedbank overview</h5>
        <div class="actions">
          <div>
            <img src="/assets/icons/pdf.svg" alt="pdf-icon" />
            <span>PDF</span>
          </div>
          <div>
            <img src="/assets/icons/pdf.svg" alt="pdf-icon" />
            <span>XSL</span>
          </div>
        </div>
    </div>
    <table>
      <thead>
        <tr>
          <td>Account</td>
          <td>Balance</td>
          <td>Credit</td>
          <td>Reserved</td>
          <td>Available</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">Siim Tamm</a> EE752200221057734534</td>
          <td>3 342 000.00</td>
          <td>20.00</td>
          <td>725.00</td>
          <td>900.56 EUR</td>
        </tr>
          <tr>
            <td><a href="#">Marju Lepik</a> EE752200221057734534</td>
            <td>50.90</td>
            <td>2 000.00</td>
            <td></td>
            <td>3 000.00 EUR</td>
          </tr>
          <tr>
            <td><a href="#">Liina Roosipõld</a> EE752200221057734534</td>
            <td>12 041.00</td>
            <td>20.00</td>
            <td></td>
            <td>1300.12 EUR</td>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td><b>5456.56</b></td>
            <td><b>456.56</b></td>
            <td></td>
            <td><b>456.56 EUR</b></td>
          </tr>
      </tbody>
    </table>
  </div>
`;

class HomeTabComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(homeTabTemplate.content.cloneNode(true));
  }
}

window.customElements.define("home-tab-component", HomeTabComponent);
