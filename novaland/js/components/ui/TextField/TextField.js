class TextField extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._placeholder = "Enter text";
    this._value = "";
    this._name = "";
    this._type = "text";
    this._label = "Label";
    this._showlabel = "true";
    this._stylesheet = "./js/components/ui/TextField/style.css";

    // this.onInputHandler = this.onInputHandler.bind(this);
  }

  loadStyles() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', this._stylesheet);
    this.shadowRoot.appendChild(link);
  }

  static get observedAttributes() {
    return ['placeholder', 'value', 'name', 'type', 'label', 'showlabel', 'stylesheet'];
  }

  connectedCallback() {
    this._placeholder = this.getAttribute('placeholder') || this._placeholder;
    this._value = this.getAttribute('value') || this._value;
    this._name = this.getAttribute('name') || this._name;
    this._type = this.getAttribute('type') || this._type;
    this._label = this.getAttribute('type') || this._label;
    const showLabel = this.getAttribute('showlabel') || this._showlabel;
    this._showlabel = showLabel !== 'false';
    this._stylesheet = this.getAttribute('stylesheet') || this._stylesheet;
    
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // This is called when an observed attribute changes
    if (name === "placeholder") {
      this._placeholder = newValue;
    } else if (name === "value") {
      this._value = newValue;
    } else if (name === "name") {
      this._name = newValue;
    } else if (name === "type") {
      this._type = newValue;
    } else if (name === "label") {
      this._label = newValue;
    } else if (name === "showlabel") {
      this._showlabel = newValue;
    } else if (name === "stylesheet") {
      this._stylesheet = newValue;
    }

    this.render();
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

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.setAttribute('name', value);
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

  get showlabel() {
    return this._showlabel;
  }

  set showlabel(value) {
    this._showlabel = value;
    this.setAttribute("showlabel", value);
  }

  get stylesheet() {
    return this._stylesheet;
  }

  set stylesheet(value) {
    this._stylesheet = value;
    this.setAttribute("stylesheet", value);
  }

  render() {
    this.shadowRoot.innerHTML = '';
    this.loadStyles();
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="input-field-wrapper">
        ${
          this._showlabel ? 
          `<label>${this._label}</label>` : ''
        }
        
        <input
          type="${this._type}"
          placeholder="${this._placeholder}" 
          value="${this._value}"/>
      </div>
    `;


    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nova-field', TextField);