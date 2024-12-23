import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Dialog } from "./dialog";

@customElement('banner-component')
export class BannerComponent extends Dialog {
    @property({type:Boolean})
    ShowDOM = true;

    @property({type:String})   
    title = '';
    description = '';
    primaryButtonText = '';
    secondaryButtonText = '';
   
    async onButtonClick(eventName : string): Promise<void> {
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            composed: true,
            detail: {}
        }));
    }

    renderDialog() {
        return html`
            ${this.ShowDOM ? html`
                <div class="banner">
                    <div class="contant-container">
                        <div class="title">
                            <span>${this.title}</span>
                        </div>
                        <div class="description">
                            <span>${this.description}</span>
                        </div>
                    </div>
                    <div class="button-container">
                        <button class="primary" @click = '${() => this.onButtonClick('primary-btn')}'>${this.primaryButtonText}</button>
                        <button class="secondary" @click = '${() => this.onButtonClick('secondary-btn')}'>${this.secondaryButtonText}</button>
                        <button class="checklist-close" @click = '${() => this.ShowDOM = false}'></button>
                    </div>
                </div>
            ` : html``}
        `;
    }

    static styles = css`
        .banner{
            background-color: #ffffff;
            color: black;
            padding: 10px;
            justify-content: center;
            margin: 0;
            width:1000px;
            height:auto;
            border: 1px solid #d6ddea;
            box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);
            border-radius: 9px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .contant-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            max-width: 80%;
            padding:20px;
        }

        .button-container{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            display: flex;
            align-items: center;
            gap: 10px;
            padding:15px;
        }
        .checklist-close {
            margin: 0;
            padding: 0;
            border: 0;
            background: none;
            position: relative;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        
        .checklist-close::before, .checklist-close::after {
            content: "";
            position: absolute;
            top: 9px;
            left: 0;
            right: 0;
            height: 2px;
            background: #32363e;
            border-radius: 4px;
        }
        
        .checklist-close::before {
            transform: rotate(45deg);
        }
        
        .checklist-close::after {
            transform: rotate(-45deg);
        }

        .title{
            font-size: 22px;
            font-weight: bolder;
            font-family: Arial, sans-serif;
            color:#242424;
        }
        .description{
            font-size: 15px;
            font-family: Arial, sans-serif;
            color:#4c5057;
        }

        button{
            width: 110px;
            height: 40px;
            border: none;
            border-radius: 9px;
            font-family: Arial, sans-serif;
            font-weight: bold;
            cursor: pointer;
        }
        button.secondary{
            background-color: #007bff;
            color: white;
        }
        button.secondary:hover{
            background-color: #0056b3;
        }

        button.primary{
            color: #242424;
        }
        button.primary:hover{
            color:#0056b3;
        }

    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'banner-component': BannerComponent
    }
}