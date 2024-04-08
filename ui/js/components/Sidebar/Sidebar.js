class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._header = '';
        this._link = [];
    }

    static get observedAttributes() {
        return ['header', 'link'];
    }

    get header() {
        return this._header;
    }

    set header(value) {
        this._header = value;
        this.setAttribute('header', value);
    }

    get link() {
        return this._link;  
    }

    set link(value) {
        this._link = value;
        this.setAttribute('link', value);
    }

    connectedCallback() {
        // This is called when the element is inserted into the DOM
        this.loadStyles();
        this._header = this.getAttribute('header');
        this._link = this.getAttribute('link');
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'header') {
            this._header = newValue;
        } else if (name === 'link') {
            this._link = newValue;
        }

        this.shadowRoot.innerHTML = '';
        this.loadStyles();
        this.render();
    }

    loadStyles() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './js/components/Sidebar/style.css';
        link.type = 'text/css';
        this.shadowRoot.appendChild(link);
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
          <div class="page-link">
            <h1>${this._header}</h1>
            <ol>
              ${
                this._link?.length ? JSON.parse(this._link).map(link => {
                  return `
                    <li>
                      <a href="${link.link}">${link.header}</a>
                    </li>
                  `
                }).join('') : ''
              }
            </ol>
          </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

}
customElements.define('sidebar', Sidebar);