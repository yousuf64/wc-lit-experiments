import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Dialog } from "./dialog";

@customElement("pricing-model")
export class PricingModel extends Dialog {

    @property({ type: Object })
    pricing = [
        {
            title: "Business",
            data: [
                {
                    description: "Lorem ipsum dolor sit amet, adipi dolor sit amet, adipi dolor sit amet dolor sit amet dolor sit amet",
                    price: "$100",
                    priceSub: "/mo billed annually",
                    btnText: "Start Your 7-Day Free Trial"
                }
            ],
            feature:[
                {
                    title: "Everything in Free, and:",
                    list: [
                        "Unlimited Features",
                        "Custom Templete",
                        "Workflows",
                        "Dedicateed success manager",
                        "API access",
                        "Advance admin analytics"
                    ]
                }
            ]
        },
        {
            title: "Teams",
            data: [
                {
                    description: "Lorem ipsum dolor sit amet, adipi dolor sit amet, adipi dolor sit amet dolor sit amet dolor sit amet",
                    price: "$80",
                    priceSub: "/mo billed annually",
                    btnText: "Start Your 7-Day Free Trial"
                }
            ],
            feature:[
                {
                    title: "Everything in Free, and:",
                    list: [
                        "Unlimited Features",
                        "Custom Templete",
                        "Workflows",
                        "Dedicateed success manager",
                        "API access",
                        "Advance admin analytics"
                    ]
                }
            ]
        },
        {
            title: "Creators",
            data: [
                {
                    description: "Lorem ipsum dolor sit amet, adipi dolor sit amet, adipi dolor sit amet dolor sit amet dolor sit amet",
                    price: "$50",
                    priceSub: "/mo billed annually",
                    btnText: "Start Your 7-Day Free Trial"
                }
            ],
            feature:[
                {
                    title: "Everything in Free, and:",
                    list: [
                        "Unlimited Features",
                        "Custom Templete",
                        "Workflows",
                        "Dedicateed success manager",
                        "API access",
                        "Advance admin analytics"
                    ]
                }
            ]
        }
    ];


    renderDialog() {
        return html`
            <div class = "model ">

                <div class = "container business">
                    <div class = "header">
                       ${this.pricing[0].title}
                    </div>

                    <div class = "description">
                       <span> 
                            ${this.pricing[0].data[0].description}
                        </span> 
                    </div>

                    <div class = "price">
                        <span> 
                            ${this.pricing[0].data[0].price}
                        </span>
                    </div>
                    <div class = "price-sub">
                        <span> 
                            ${this.pricing[0].data[0].priceSub}
                        </span>
                    </div>

                    <div class = "button-container">
                        <button class="btn-busness"> <div class="arrow"></div> ${this.pricing[0].data[0].btnText}</button>
                    </div>

                    <div class = "sub-title">
                        <span> 
                           ${this.pricing[0].feature[0].title}
                        </span>
                    </div>

                    <div class = "list-container">
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[0].feature[0].list[0]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[0].feature[0].list[1]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[0].feature[0].list[2]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[0].feature[0].list[3]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[0].feature[0].list[4]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[0].feature[0].list[5]}</div>
                    </div>
                </div>

                <div class = "container teams">
                    <div class = "header">
                       ${this.pricing[1].title}
                    </div>

                    <div class = "description">
                       <span> 
                            ${this.pricing[1].data[0].description}
                        </span> 
                    </div>

                    <div class = "price">
                        <span> 
                            ${this.pricing[1].data[0].price}
                        </span>
                    </div>
                    <div class = "price-sub">
                        <span> 
                            ${this.pricing[1].data[0].priceSub}
                        </span>
                    </div>

                    <div class = "button-container">
                        <button class="btn-teams"> <div class="arrow"></div>${this.pricing[1].data[0].btnText}</button>
                    </div>

                    <div class = "sub-title">
                        <span> 
                            ${this.pricing[1].feature[0].title}
                        </span>
                    </div>

                    <div class = "list-container">
                    <div class = "list"> <div class="checkmark"></div> ${this.pricing[1].feature[0].list[0]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[1].feature[0].list[1]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[1].feature[0].list[2]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[1].feature[0].list[3]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[1].feature[0].list[4]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[1].feature[0].list[5]}</div>
                    </div>
                </div>

                <div class = "container creators">
                    <div class = "header">
                          ${this.pricing[2].title}
                    </div>

                    <div class = "description">
                       <span> 
                            ${this.pricing[2].data[0].description}
                        </span> 
                    </div>

                    <div class = "price">
                        <span> 
                            ${this.pricing[2].data[0].price}
                        </span>
                    </div>
                    <div class = "price-sub">
                        <span> 
                            ${this.pricing[2].data[0].priceSub}
                        </span>
                    </div>

                    <div class = "button-container">
                        <button class="btn-creators"> <div class="arrow"></div> ${this.pricing[0].data[0].btnText}</button>
                    </div>

                    <div class = "sub-title">
                        <span> 
                           ${this.pricing[2].feature[0].title}
                        </span>
                    </div>

                    <div class = "list-container">
                    <div class = "list"> <div class="checkmark"></div> ${this.pricing[2].feature[0].list[0]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[2].feature[0].list[1]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[2].feature[0].list[2]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[2].feature[0].list[3]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[2].feature[0].list[4]}</div>
                        <div class = "list"> <div class="checkmark"></div> ${this.pricing[2].feature[0].list[5]}</div>
                    </div>
                </div>

            </div>
        `;
    }

    static styles = css`
        .model {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 12px;
            padding: 20px;
            background-color: transparent;
            width: 240px;
            height: auto;
            color: #213547;
            border: 1px solid #d6ddea;
            border-radius: 15px;
            box-shadow:0 2px 6px 0 rgba(0,0,0,0.2);
            transition: transform 0.5s ease-in-out;
        }

        .container:hover{
            transform: scale(1.1);
            transition: 0.5s, transform 0.5s ease-in-out
        }
        
        .business{
            background-color: #ecc6ff;
        }
        
        .teams{
            background-color: #ceedfa;
        }

        .creators{
            background-color: #ffeab6;
        }

        .header{
            font-size: 24px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
        }
            
        .description{
            font-size: 12px;
            font-family: 'Poppins', sans-serif;
            text-align: center;
            margin: 10px;          
        }

        .price{
            font-size: 24px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            margin: 10px;
        }

        .price-sub{
            color: #7a7b7d;
            font-size: 14px;
            margin-bottom: 10px;
            font-family: 'Poppins', sans-serif;
        }
        
        .button-container{
            margin: 10px;
            width: 100%;
        }

        button{
            background-color: #4CAF50;
            width: 100%;
            border: none;
            color: white;
            padding: 7px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .btn-busness{
            background-color: #b318ff;
        }
        
        .btn-teams{
            background-color: #2872e1;
        }

        .btn-creators{
            background-color: #fecc29;
            color: #213547;
        }

        .arrow {
            width: 30px;
            height: 30px;
            margin-right:7px;
            background-color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .arrow::after {
            content: '';
            width: 8px;
            height: 8px;
            border-right: 4px solid #213547;
            border-bottom: 4px solid #213547;
            transform: rotate(-45deg);
            position: absolute;
        }

        .sub-title{
            font-size: 14px;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            margin: 10px;
        }

        .list-container{
            margin: 5px;
            font-size: 12px;
            font-family: 'Poppins', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .list{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .checkmark {
            width: 30px; 
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-right: 2px;
        }

        .checkmark::after {
            content: '';
            width: 16px; 
            height: 2px; 
            background-color: black; 
            position: absolute;
            transform: rotate(-45deg);
            top: 51%;
            left: 40%;
        }

        .checkmark::before {
            content: '';
            width: 8px; 
            height: 2px;
            background-color: black; 
            position: absolute;
            transform: rotate(45deg);
            top: 59%;
            left: 30%;
        }

    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'pricing-model': PricingModel
    }
}