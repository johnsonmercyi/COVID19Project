class Header extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    // This is called when the element is inserted into the DOM
    this.loadStyles();
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

  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = ``;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nova-header', Header);