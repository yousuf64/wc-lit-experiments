import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Dialog } from './dialog';

@customElement('tooltip-element')
export class Tooltip extends Dialog {

    @property({ type: String })
    title = 'Default Title';
    message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.onsectetur adipiscing elit consectetur';
    btnTxt = 'Ok';

    @property({ type: Boolean })
    showTooltip = false;

    private _hideTimeout: number | undefined;

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mouseenter', this._showTooltip);
        this.addEventListener('mouseleave', this._hideTooltip);
    }

    disconnectedCallback() {
        this.removeEventListener('mouseenter', this._showTooltip);
        this.removeEventListener('mouseleave', this._hideTooltip);
        super.disconnectedCallback();
    }

    _showTooltip() {
        this.showTooltip = true;
        this._positionTooltip();
    }

    _hideTooltip() {
        this.showTooltip = false;
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = undefined;
        }
    }

    _positionTooltip() {
        const parent = this.parentElement;
        if (parent) {
            const rect = parent.getBoundingClientRect();
            this.style.top = `${rect.bottom + window.scrollY}px`;
            this.style.left = `${rect.left + window.scrollX}px`;
        }
    }

    renderDialog() {
        return html`
            <div class="tooltip" ?hidden="${!this.showTooltip}">
                <div class="arrow"></div>

                <div class="content">
                    <div class = "title">
                        <span>${this.title}</span>
                    </div>

                    <div class = "message">
                        <span>${this.message}</span>
                    </div>
                </div>

                <div class="btn-container">
                    <button @click="${this._hideTooltip}">${this.btnTxt}</button>
                </div>

            </div>
        `;
    }

    static styles = css`
        .tooltip {
            background: #ffffff;
            filter: drop-shadow(0 0 3em #646cffaa);
            border-radius: 9px;
            padding: 10px;
            margin-top: 15px;
            position: absolute;
            z-index: 1000;
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
        }
        .tooltip::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            border-radius: 8px; 
            padding: 2px; 
            background: linear-gradient(to right, #877bf5, #584d86, #66b4e9, #945af0, #79abf7);
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        }
        .tooltip[hidden] {
            opacity: 0;
            transform: translateY(-20px);
        }
        .tooltip:not([hidden]) {
            opacity: 1;
            transform: translateY(0);
        }
        .arrow {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #877bf5;
            position: absolute;
            top: -5px;
            left: 10px;
        }
        .content {
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start; 
            justify-content: flex-start;
            font-family: Arial, sans-serif;
            max-width: 300px;
        }

        .title, .message {
            text-align: left;
        }

        .title {
            font-size: 20px;
            color:#213547;
            font-weight: bold;
            margin-bottom: 8px;
        }
        .message{
            font-size:15px;
            color:#5a5c5e;
        }

        .btn-container {
            padding: 8px;
            display: flex;
            justify-content: flex-end;
        }

        button{
            background: #0056f1;
            color: white;
            font-weight:600;
            border: none;
            padding: 10px 18px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover{
            background-color:#10306f;
        }

    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'tooltip-element': Tooltip;
    }
}