class Select extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._options = '[]';
    this._placeholder = "Select";
    this._value = "";
    this._name = "";
    this._label = "Label";
    this._showlabel = "true";
    this._stylesheet = "./js/components/ui/Select/style.css";
  }

  static get observedAttributes() {
    return ['options', 'placeholder', 'value', 'name', 'label', 'showlabel', 'stylesheet'];
  }

  connectedCallback() {
    this._options = this.getAttribute('options') || this._options;
    this._placeholder = this.getAttribute('placeholder') || this._placeholder;
    this._name = this.getAttribute('name') || this._name;
    this._label = this.getAttribute('type') || this._label;
    const showLabel = this.getAttribute('showlabel') || this._showlabel;
    this._showlabel = showLabel !== 'false';
    this._stylesheet = this.getAttribute('stylesheet') || this._stylesheet
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'options') {
      this._options = newValue;
    } if (name === "placeholder") {
      this._placeholder = newValue;
    } else if (name === "value") {
      this._value = newValue;
    } else if (name === "name") {
      this._name = newValue;
    } else if (name === "label") {
      this._label = newValue;
    } else if (name === "showlabel") {
      this._showlabel = newValue;
    } else if (name === 'stylesheet') {
      this._stylesheet = newValue;
    }

    this.render();
  }

  loadStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', this._stylesheet);
    this.shadowRoot.appendChild(link);
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
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.setAttribute('name', value);
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
    this.loadStyle();
    const options = JSON.parse(this._options);
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="input-field-wrapper">
        ${
          this._showlabel ?
          `<label>${this._label}</label>` : ''
        }
        <select
          name="${this._name}"
          placeholder="${this._placeholder}">

          ${
            options.length ? options.map(option => `
              <option value="${option.value}">${option.label}</option
            `).join(" ") 
            : `<option value=''>${this._label}</option>`
          }
        </select>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nova-select', Select)