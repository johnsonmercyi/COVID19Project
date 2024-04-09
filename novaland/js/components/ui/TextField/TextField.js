class TextField extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._placeholder = "Enter text";
    this._value = "";
    this._type = "text";
    this._label = "Label";

    // this.onInputHandler = this.onInputHandler.bind(this);
  }

  loadStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './js/components/ui/TextField/style.css';
    link.type = 'text/css';
    this.shadowRoot.appendChild(link);
  }

  static get observedAttributes() {
    return ['placeholder', 'value', 'type', 'label'];
  }

  connectedCallback() {
    // This is called when the element is inserted into the DOM
    this.loadStyles();
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // This is called when an observed attribute changes
    if (name === "placeholder") {
      this._placeholder = newValue;
    } else if (name === "value") {
      this._value = newValue;
    } else if (name === "type") {
      this._type = newValue;
    } else if (name === "label") {
      this._label = newValue;
    }
  }

  get placeholder() {
    return this._placeholder;
  }

  set placeholder(value) {
    this._placeholder = value;
    this.setAttribute('placeholder', value);
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.setAttribute('value', value);
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
    this.setAttribute('type', value);
  }

  get label() {
    return this._label;
  }

  set label(value) {
    this._label = value;
    this.setAttribute('label', value);
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="input-field-wrapper">
        <label>${this._label}</label>
        <input
          type="${this._type}"
          placeholder="${this._placeholder}" 
          value="${this._value}"/>
      </div>
    `;


    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('input-field', TextField);