import {css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {FastDialog} from "./FastDialog.ts";

@customElement("pl-cookies")
export class Cookies extends FastDialog {
    static styles = css`
        sp-alert-dialog {
            max-width: 600px;
        }
    `

    @property({
        type: Object
    })
    policies = [{
        title: "Strictly Necessary",
        policies: [
            {title: "Policy #1", checked: true},
            {title: "Policy #2", checked: true},
            {title: "Policy #3", checked: false},
        ]
    }, {
        title: "Performance and Analytics",
        policies: [
            {title: "Policy #4", checked: true},
            {title: "Policy #5", checked: false},
        ]
    }, {
        title: "YouTube",
        policies: [
            {title: "Policy #6", checked: true},
            {title: "Policy #7", checked: false}
        ]
    }];

    firstUpdated() {
        // const overlay: Overlay = this.shadowRoot!.querySelector("#overlay");
        // overlay!.addEventListener("slottable-request", (event: Event) => {
        //     // @ts-ignore
        //     if (event.data === removeSlottableRequest) {
        //         this.innerHTML = '';
        //     } else {
        //         overlay.innerHTML = `
        //         <sp-popover>
        //             <p>This content will display within the Overlay and <em>only</em> be on the DOM when the Overlay is open.</p>
        //         </sp-popover>
        //         `;
        //     }
        // });
        //
    }

    onPolicyChecked(policy: { title: string, checked: boolean }): void {
        policy.checked = !policy.checked;
        this.requestUpdate("policies");
    }

    async onAcceptAll(): Promise<void> {
        this.dispatchEvent(new CustomEvent("accept-all", {
            bubbles: true,
            composed: true,
        }));
        await this.close();
    }

    async onAcceptCurrentSelection(): Promise<void> {
        this.dispatchEvent(new CustomEvent("accept-current-selection", {
            bubbles: true,
            composed: true,
            detail: {
                policies: this.policies
                    .flatMap(item => item.policies)
                    .filter(policy => policy.checked)
            }
        }));
        await this.close();
    }

    async onReject(): Promise<void> {
        this.dispatchEvent(new CustomEvent("reject", {
            bubbles: true,
            composed: true
        }));
        await this.close();
    }

    renderDialog() {
        return html`
            <sp-dialog-wrapper dismissable underlay>
                <sp-alert-dialog variant="information">
                    <h2 slot="heading">Manage cookie preferences</h2>

                    <h4>Your privacy choices</h4>

                    <span style="display: block; margin-bottom: 30px">
                            In this panel you can express some preferences related to the processing of your personal information.
                            You may review and change expressed choices at any time by resurfacing this panel via the provided link.
                            To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.
                       </span>

                    <sp-accordion allow-multiple>
                        ${
                                this.policies.map(item => html`
                                    <sp-accordion-item label="${item.title}">
                                        <sp-field-group>
                                            ${
                                                    item.policies.map(policy => html`
                                                        <sp-checkbox size="m" ?checked="${policy.checked}"
                                                                     @click="${() => this.onPolicyChecked(policy)}">
                                                            ${policy.title}
                                                        </sp-checkbox>
                                                    `)
                                            }
                                        </sp-field-group>
                                    </sp-accordion-item>
                                `)
                        }
                    </sp-accordion>

                    <sp-button-group slot="button" class="footer">
                        <sp-button
                                variant="primary"
                                treatment="solid"
                                @click="${this.onAcceptAll}"
                        >
                            Accept all
                        </sp-button>
                        <sp-button
                                variant="secondary"
                                treatment="outline"
                                @click="${this.onReject}"
                        >
                            Reject all
                        </sp-button>
                    </sp-button-group>

                    <sp-button
                            slot="button"
                            variant="primary"
                            treatment="outline"
                            @click="${this.onAcceptCurrentSelection}"
                    >
                        Accept current selection
                    </sp-button>
                </sp-alert-dialog>
            </sp-dialog-wrapper>
        `
    }
}

// const x = `<sp-dialog-wrapper>
//                     <sp-alert-dialog variant="information">
//                         <h2 slot="heading">Manage cookie preferences</h2>
//
//                         <h4>Your privacy choices</h4>
//
//                         <span style="display: block; margin-bottom: 30px">
//                             In this panel you can express some preferences related to the processing of your personal information.
//                             You may review and change expressed choices at any time by resurfacing this panel via the provided link.
//                             To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.
//                         </span>
//
//                         <sp-accordion allow-multiple>
//                             ${
//     this.policies.map(item => html`
//                                         <sp-accordion-item label="${item.title}">
//                                             <sp-field-group>
//                                                 ${
//         item.policies.map(policy => html`
//                                                             <sp-checkbox size="m" ?checked="${policy.checked}"
//                                                                          @click="${() => this.onPolicyChecked(policy)}">
//                                                                 ${policy.title}
//                                                             </sp-checkbox>
//                                                         `)
//     }
//                                             </sp-field-group>
//                                         </sp-accordion-item>
//                                     `)
// }
//                         </sp-accordion>
//
//                         <sp-button-group slot="button" class="footer">
//                             <sp-button
//                                     variant="primary"
//                                     treatment="solid"
//                                     @click="${this.onAcceptAll}"
//                             >
//                                 Accept all
//                             </sp-button>
//                             <sp-button
//                                     variant="secondary"
//                                     treatment="outline"
//                                     @click="${this.onReject}"
//                             >
//                                 Reject all
//                             </sp-button>
//                         </sp-button-group>
//
//                         <sp-button
//                                 slot="button"
//                                 variant="primary"
//                                 treatment="outline"
//                                 @click="${this.onAcceptCurrentSelection}"
//                         >
//                             Accept current selection
//                         </sp-button>
//                     </sp-alert-dialog>
//                 </sp-dialog-wrapper>`

declare global {
    interface HTMLElementTagNameMap {
        'pl-cookies': Cookies
    }
}