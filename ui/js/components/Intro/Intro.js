class Intro extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._textHeader = '';
        this._textBody = '';
    }

    static get observedAttributes() {
        return ['textHeader', 'textBody'];
    }

    get textHeader() {
        return this._textHeader;
    }

    set textHeader(value) {
        this._textHeader = value;
        this.setAttribute('textHeader', value);
    }

    get textBody() {
        return this._textBody;
    }

    set textBody(value) {
        this._textBody = value;
        this.setAttribute('textBody', value);
    }

    connectedCallback() {
        // This is called when the element is inserted into the DOM
        this.loadStyles();
        this._textHeader = this.getAttribute('textHeader');
        this._textBody = this.getAttribute('textBody');
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'textHeader') {
            this._textHeader = newValue;
        } else if (name === 'textBody') {
            this._textBody = newValue;
        }

        this.shadowRoot.innerHTML = '';
        this.loadStyles();
        this.render();
    }

    loadStyles() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './js/components/Intro/style.css';
        link.type = 'text/css';
        this.shadowRoot.appendChild(link);
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
          <div class="intro">
            <h1>${this._textHeader}</h1>
            <p>${this._textBody}</p>
          </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('nova-intro', Intro);