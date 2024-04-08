class Header extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._shouldShowText = true;
  }

  static get observedAttributes() {
    return ['showHeaderText'];
  }

  connectedCallback() {
    // This is called when the element is inserted into the DOM
    this.loadStyles();

    // Check the initial attribute value
    const showHeaderText = this.getAttribute('showHeaderText');
    this._shouldShowText = showHeaderText !== 'false';

    this.render();
  }

  loadStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './js/components/Header/style.css';
    link.type = 'text/css';
    this.shadowRoot.appendChild(link);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'showHeaderText') {
      this._shouldShowText = newValue;
    }

    this.shadowRoot.innerHTML = '';
    this.loadStyles();
    this.render();
  }

  get showHeaderText() {
    return this._shouldShowText;
  }

  set showHeaderText(value) {
    this._shouldShowText = value;
    this.setAttribute("showHeaderText", value);
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .header {
          padding-top: ${!this._shouldShowText ? '1rem' : '1.5rem'};
          height: ${!this._shouldShowText ? '7rem' : '15rem'};
        }
      </style>
      <header class="header">
        <img src="./img/logo.svg" width="250vh"/>
        ${
          this._shouldShowText ? `
            <h1>Coronavirus (COVID-19)</h1>
            <h4>Government Response to COVID-19</h4>
          ` : ``
        }
      </header>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nova-header', Header);