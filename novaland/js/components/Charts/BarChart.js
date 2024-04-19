class BarChart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._stylesheet = "./js/components/Charts/style.css";
  }

  static get observedAttributes() {
    return [];
  }

  connectedCallback() {
    this._stylesheet = this.getAttribute("stylesheet") || this._stylesheet;
    this.render(); 
  }

  attributeChangedCallback(name, oldValue, newValue) {

    this.render();
  }

  loadStyle() {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', this._stylesheet);
    this.shadowRoot.appendChild(link);
  }

  render() {
    this.shadowRoot.innerHTML = '';
    this.loadStyle();
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="bar-chart-container">
        <div class="bar-chart">
          <div class="ruler">
            <div class="point">
              <span>Level 4</span>
            </div>
            <div class="point">
              <span>Level 3</span>
            </div>
            <div class="point">
              <span>Level 2</span>
            </div>
            <div class="point">
              <span>Level 1</span>
            </div>
          </div>
          <div class="bars-container">
            <div class="bar">
              <span class="bar-label">United States of America</span>
            </div>
            <div class="bar">
              <span class="bar-label">Nigeria</span>
            </div>
            <div class="bar">
              <span class="bar-label">label 3</span>
            </div>
            <div class="bar">
              <span class="bar-label">label 4</span>
            </div>
          </div>
        </div>
        <div class="key"></div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nova-bar-chart', BarChart);