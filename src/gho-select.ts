import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('comm-select')
export class Select extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host * {
      box-sizing: border-box;
    }  
  `;

  @property() name?: string = '';
  @property() id: string = '';
  @property({ type: String }) placeholder?: string;
  @property({ type: String }) label?: string;
  @property({ type: Number }) maxlength?: number;
  @property({ type: Boolean }) required: boolean = false;
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: Boolean }) readonly: boolean = false;
  @property({ type: Boolean, reflect: true }) invalid: boolean = false;
  @property({ type: String, reflect: true }) value: string = '';

  @state() focused: boolean = false;
  @state() opened: boolean = false;

  // Render the UI as a function of component state
  render() {
    return html`<p id=${this.id}>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'comm-select': Select;
  }
}
