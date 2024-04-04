class Footer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this._socialIconImg = "";
        this._socialIconLink = "#";  
    }

    static get observedAttributes() {
        return ['socialIconImg', 'socialIconLink'];
    }

    connectedCallback() {
        this.loadStyles();
        this._socialIconImg = this.getAttribute('socialIconImg');
        this._socialIconLink = this.getAttribute('socialIconLink');
        this.render();
    }

    loadStyles() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './js/components/footer/style.css';
        link.type = 'text/css';
        this.shadowRoot.appendChild(link);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'socialIconImg') {
            this._socialIconImg = newValue;
        } else if(name === 'socialIconLink') {
            this._socialIconLink = newValue;
        }
    }

    get socialIconImg() {
        return this._socialIconImg;
    }

    set socialIconImg(value) {
        this._socialIconImg = value;
        this.setAttribute('socialIconImg', value);
    }

    get socialIconLink() {
        return this._socialIconLink;
    }

    set socialIconLink(value) {
        this._socialIconLink = value;
        this.setAttribute('socialIconLink', value);
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <a href="${this._socialIconLink}" class="footer-social-icon">
                <img src="${this._socialIconImg}"/>
            </a>
          
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('nova-footer', Footer);