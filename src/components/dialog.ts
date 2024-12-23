import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { cache } from "lit/directives/cache.js";

export class Dialog extends LitElement {
    @property({ type: Boolean})
    open = false;

    renderContent(): unknown {
        return html``
    }

    render() {
        return html`
            <dialog ?open="${this.open}" style="
                padding: 24px;
                background-color: #fff;
                max-width: 500px;
                margin: auto;
                border-radius: 12px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                font-family: Arial, sans-serif;
                border: none;
            ">
                ${cache(this.renderContent())}
            </dialog>
        `;
    }
    
}