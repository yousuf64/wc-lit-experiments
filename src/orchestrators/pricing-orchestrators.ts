import { PricingModel } from "../components/pricing-model";
import pricingConfig from "./pricing.config.json";

export function showElement() {
    const pricingModel = document.createElement('pricing-model') as PricingModel;
    pricingModel.pricing = pricingConfig.pricing;

    document.querySelector('#pricingModel')?.appendChild(pricingModel);
}

showElement(); 