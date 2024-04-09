class Content extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._pagesubject = [];
    }   

    static get observedAttributes() {
        return ['pagesubject'];
    }

    get pagesubject() {
        return this._pagesubject;
    }

    set pagesubject(pagesubject) {
        this._pagesubject = pagesubject;
        this.setAttribute('pagesubject', pagesubject);
    }

    connectedCallback() {
        this._pagesubject = this.getAttribute('pagesubject');
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'pagesubject') {
            this._pagesubject = newValue;
        }
        this.render();
    }

    loadStyles() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', this._stylesheet);
        this.shadowRoot.appendChild(link);
    }

    render() {
        this.shadowRoot.innerHTML = '';
        this.loadStyles();
        const template = document.createElement('template');
        template.innerHTML = `
            ${
                this._pagesubject?.length ? JSON.parse(this._pagesubject).map(page => {
                    return `
                        <div class="content">
                            <h2>${page.header}</h2>
                            <p>${page.body}</p>
                        </div>
                    `
                }).join('') : ''
            }
            
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('nova-content', Content);