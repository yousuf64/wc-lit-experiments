import { css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Dialog } from "./dialog"

export interface Task {
    id: number;
    title: string;
    description: string;
    isChecked?: boolean;
    isExpanded?: boolean;
    ctaText: string;
    secondaryCtaText?: string;
}

@customElement("check-list")
export class CheckList extends Dialog {
    @property({ type: Array }) 
    tasks: Task[] = [];

    @property({ type: String })
    headerTitle = "";
    headerDescription = "";

    toggleTask(task: Task, state: boolean) {
        task.isChecked = state;
        this.requestUpdate();        
    }

    toggleDetails(task: Task) {
        task.isExpanded = !task.isExpanded;
        this.requestUpdate();
    }

    async onClickButton(eventName: string, task: Task): Promise<void> {
        this.dispatchEvent(new CustomEvent(eventName + task.id, {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
                task: task
            }
        }));
    }

    renderContent() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter((task: Task) => task.isChecked).length;
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

        return html`
            <div class="checklist-header">
                <div class="checklist-title">
                    <h2>${this.headerTitle}</h2>
                    <button class="checklist-close" @click="${() => this.open = false}"></button>
                </div>
                <p>${this.headerDescription}</p>
            </div>
            <div class="complete-info">                
                <div class="step-info">${completedTasks}/${totalTasks}</div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${progress}%"></div>
                </div>
            </div>    

            <div class="tasks-list">
                ${this.tasks.map((task: Task) => html`
                    <div class="task-item">
                        <div class="task-header" @click="${() => this.toggleDetails(task)}">
                            <div class="task-checkbox">
                                <input 
                                    type="checkbox" 
                                    .checked=${!!task.isChecked}
                                    id=${task.id}
                                />
                                <label for=${task.id}>${task.title}</label>
                            </div>
                            <button class="expand-button">
                                ${task.isExpanded ? 
                                    html`<span class="chevron"></span>` : 
                                    html`<span class="chevron bottom"></span>`}
                            </button>
                        </div>
                        ${task.isExpanded ? html`
                            <div class="task-body">
                                <div class="task-media-placeholder">
                                    <img src=""/>
                                </div>
                                <p>${task.description}</p>
                                <div class="task-actions">
                                    <button class="cta-button" @click=${() => {
                                        this.onClickButton("primary-button-", task)
                                        this.toggleTask(task, true)}
                                    }>${task.ctaText}</button>
                                    ${!!task.secondaryCtaText ? html`
                                        <button class="cta-button secondary" @click=${() => {
                                            this.onClickButton("secondary-button-", task)
                                            this.toggleTask(task, false)}
                                        }>${task.secondaryCtaText}</button>` : nothing
                                    }
                                </div>
                            </div>
                        ` : ''}
                    </div>
                `)}
            </div>
        `;
    }

    static styles = css`
        * {
            box-sizing: border-box;
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

        .checklist-header {
            text-align: left;
            margin-bottom: 24px;
        }

        .checklist-header h2 {
            font-size: 24px;
            color: #151619;
        }

        .checklist-header p {
            font-size: 14px;
            color: #616469;
            text-overflow: clip;
            margin: 0px;
        }

        .checklist-title {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .complete-info {
            display: flex;
            justify-content: start;
            gap: 10px;
            align-items: center;  
            margin-bottom: 24px; 
        }

        .progress-bar {
            height: 10px;
            background-color: #e5f2fe;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 2px;
            width: 100%;
            max-width: 95%;   
        }

        .progress {
            height: 100%;
            background-color: #0571f2;
            border-radius: 4px;
            transition: background-color 0.3s ease, border 0.3s ease; 
        }

        .step-info {
            font-size: 14px;
            font-weight: bold;
            color: #000;
        }

        .task-list {
            margin-top: 24px;
        }

        .task-item {
            margin-bottom: 24px;
            border: 2px solid #edeef0;
            border-radius: 12px;
            padding: 16px;
            background-color: #fff;
            font-family: Arial, sans-serif;
        }

        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }

        .task-header input {
            margin-right: 12px;
        }

        .task-header input, label {
            pointer-events: none
        }

        .task-checkbox {
            display: flex;
            align-items: center;
        }

        .task-checkbox input[type="checkbox"] {
            appearance: none;  
            -webkit-appearance: none;
            width: 28px;  
            height: 28px;
            border-radius: 15px;
            background-color: #fff;
            position: relative;  
            border: 2px solid #edeef0;  
            transition: background-color 0.3s ease, border 0.3s ease; 
        }

        .task-checkbox input[type="checkbox"]:checked {
            background-color: #20d257;  
            border: 2px solid #20d257;  
        }

        .task-checkbox input[type="checkbox"]:checked::before {
            content: '';  
            position: absolute;
            top: 4px;
            left: 9px;
            width: 4px;  
            height: 12px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg); 
        }

        .expand-button {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
        }

        .chevron::before {
            border: solid #32363e;
            border-width: 0.12em 0.12em 0 0;
            content: '';
            display: inline-block;
            height: 0.40em;
            left: 0.15em;
            position: relative;
            top: 0.15em;
            transform: rotate(-45deg);
            vertical-align: top;
            width: 0.45em;
        }
    
        .chevron.bottom:before {
            top: 0;
            transform: rotate(135deg);
        }
        
        .task-body {
           margin-top: 12px;
        }

        .task-media-placeholder {
            width: 100%;
            padding: 15%;
            border-radius: 8px;
            background-color: #f1f2f4;
        }

        .task-body p {
            font-size: 14px;
            color: #32363e;
            text-overflow: clip;
        }

        .task-actions {
            display: flex;
            gap: 12px;
            margin-top: 12px;
        }

        .cta-button {
            padding: 12px 20px;
            background-color: #0571f2;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }

        .cta-button.secondary {
            background-color: #edeef0;
            color: black;
        }

        label {
            font-weight: bold;
        }
    `;
}


declare global {
    interface HTMLElementTagNameMap {
      "check-list": CheckList;
    }
  }