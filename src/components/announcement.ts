import { css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Dialog } from './dialog';

@customElement('announcement-component')
export class AnnouncementPlugin extends Dialog {

  @property({ type: Number })
  time = 5000;

  @property({ type: String })
  title = '';
  content = '';
  SecondarybuttonText = '';
  PrimarybuttonText = '';

  @state()
  ShowDOM = true;

  async onButtonClick(eventName: string): Promise<void> {
    this.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: {}
    }));
  }

  renderDialog() {
    return this.ShowDOM ? html`
    <div class = "mainContainer">
      <div class="header">
        <span>${this.title}</span>
      </div>

      <div class="content">
       ${this.content}
      </div>
      
      <div class="container">
      </div>

      <div class="button-section">
        <button class="secondary" @click=${() => this.onButtonClick('primary-button-click')}>${this.PrimarybuttonText}</button>
        <button class="primary" @click=${() => this.onButtonClick('secondary-button-click')}>${this.SecondarybuttonText}</button>
      </div>
      </div>
    ` : html``
  }

  static styles = css`
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
  
    .mainContainer {
      width: 350px;
      margin: 0 auto;
      text-align: center;
      background-color:#ffffff;
      padding: 30px;
      border: 1px solid #d6dde9;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease-in-out;
    }
    .mainContainer:hover {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
        transition: 0.5s, transform 0.5s ease-in-out
    }
    .header {
       font-size: 24px; 
       font-weight: bold;
      padding-bottom: 14px;
    }
    .content {
        font-size: 16px;
        font-weight: normal;
        padding-bottom: 14px;
        color: #919294;
    }

    .container{
        margin-top: 10px;
        justify-content: center;
        align-items: center;
        background-color: #f1f2f4;
        width: 100%;
        height: 200px;
        border-radius: 25px;
        display: flex;
    }

    .button-section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
    }

    button {
      padding: 13px 20px;
      width: 100%;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    button.primary {
        background-color: #0056f1;
        border: 1px solid transparent;
    }

    button.secondary {
        background-color: #f1f2f4;
        color: #335592;
        border: 1px solid #d6dde9;
    }
    button.secondary:hover {
        color: #0056f1;
        border: 1px solid #d2d4da;
       
    }
    button.primary:hover {
        background-color:#10306f;
    }
  `

}

declare global {
  interface HTMLElementTagNameMap {
    'announcement-component': AnnouncementPlugin
  }
}

