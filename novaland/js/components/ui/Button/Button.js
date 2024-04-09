import { getDarkerColor, hexToHSL } from "../../../config/utility.mjs";

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._stylesheet = './js/components/ui/Button/style.css';
    this._text = "Button text";
    this._bgcolor = "#009658";
  }

  static get observedAttributes() {
    return ['text', 'bgcolor'];
  }

  connectedCallback() {
    this._stylesheet = this.getAttribute('stylesheet') || this._stylesheet;
    this._text = this.getAttribute('text') || this._text;
    this._bgcolor = this.getAttribute('bgcolor') || this._bgcolor;
    this.render();
  }

  loadStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', this._stylesheet);
    this.shadowRoot.appendChild(link);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "stylesheet") {
      this._stylesheet = newValue;
    } else if (name === "text") {
      this._text = newValue;
    } else if (name === "bgcolor") {
      this._bgcolor;
    }

    this.render();
  }

  get stylesheet() {
    this._stylesheet;
  }

  set stylesheet(stylesheet) {
    this._stylesheet = stylesheet;
    this.setAttribute('stylesheet', stylesheet);
  }

  get text() {
    this._text;
  }

  set text(text) {
    this._text = text;
    this.setAttribute('text', text);
  }

  get bgcolor() {
    this._bgcolor;
  }

  set bgcolor(bgcolor) {
    this._bgcolor = bgcolor;
    this.setAttribute('bgcolor', bgcolor);
  }

  render() {
    this.shadowRoot.innerHTML = '';
    this.loadStyle();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        button {
          background-color: ${hexToHSL(this._bgcolor)};
        }

        button:hover {
          background-color: ${getDarkerColor(hexToHSL(this._bgcolor))};
        }
      </style>
      <button>
        ${String(this._text).toUpperCase()}
      </button>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nova-button', Button);