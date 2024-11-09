import {html, LitElement, nothing} from "lit";
import {Overlay} from "@spectrum-web-components/overlay";
import {removeSlottableRequest} from "@spectrum-web-components/overlay/src/slottable-request-event.js";
import { query, state } from "lit/decorators.js";
import {cache} from 'lit/directives/cache.js';

export class FastDialog extends LitElement {
    @query("sp-overlay")
    overlay!: Overlay;
    @state()
    private openState: boolean = false;

    // updated(_changedProperties:PropertyValues) {
    //     super.updated(_changedProperties);
    //     this.overlay = this.shadowRoot!.querySelector("sp-overlay") as Overlay | null;
    // }

    private onRequest(event: Event) {
        if (!this.overlay) {
            return;
        }

        // @ts-ignore
        this.openState = event.data !== removeSlottableRequest;

        this.requestUpdate();
    }

    protected renderDialog(): unknown {
        return html``
    }

    async open() {
        if (this.overlay) {
            this.openState = true;
            await this.updateComplete;
            this.overlay.open = true;
        }
    }

    async close(): Promise<void> {
        if (this.overlay) {
            this.overlay.open = false;
        }
        return Promise.resolve();
    }

    render() {
        return html`
            <sp-overlay type="modal" @slottable-request="${(event: Event) => this.onRequest(event)}">
                ${this.openState ? cache(this.renderDialog()) : nothing}
            </sp-overlay>
        `
    }
}