class PageLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._header = '';
    this._links = [];
  }

  static get observedAttributes() {
    return ['header', 'links'];
  }

  get header() {
    return this._header;
  }

  set header(value) {
    this._header = value;
    this.setAttribute('header', value);
  }

  get links() {
    return this._links;
  }

  set links(value) {
    this._links = value;
    this.setAttribute('links', value);
  }

  connectedCallback() {
    // This is called when the element is inserted into the DOM
    this.loadStyles();
    this._header = this.getAttribute('header');
    this._links = this.getAttribute('links');
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'header') {
      this._header = newValue;
    } else if (name === 'links') {
      this._links = newValue;
    }
    this.render();
  }

  loadStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './js/components/PageLink/style.css';
    link.type = 'text/css';
    this.shadowRoot.appendChild(link);
  }

  render() {
    this.shadowRoot.innerHTML = '';
    this.loadStyles();
    const template = document.createElement('template');
    template.innerHTML = `
          <div class="page-link">
            <h3>${this._header}</h3>
            <ol>
              ${this._links?.length ? JSON.parse(this._links).map((link, index) => {
                return `
                  <div class="item">
                    <span>${index+1}</span>
                    <a href="${link.link}" class="sidebar-link">${link.linktext}</a>
                  </div>
                `
              }).join('') : ''
              }
            </ol>
          </div>
        `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }
}
customElements.define('nova-pagelink', PageLink);