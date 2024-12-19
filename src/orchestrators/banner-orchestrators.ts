import { BannerComponent } from "../componenrs/banner";
import config from './banner.config.json';

export function showBanner(
    title : string = config.title,
    description : string = config.description,
    primaryButtonText : string = config.primaryButtonText,
    secondaryButtonText : string = config.secondaryButtonText, 
) {
    const banner = document.createElement('banner-component') as BannerComponent;
    banner.title = title;
    banner.description = description;
    banner.primaryButtonText = primaryButtonText;
    banner.secondaryButtonText = secondaryButtonText;

    document.querySelector('#host')?.appendChild(banner);

    banner.addEventListener('primary-btn', () => {
        // const customEvent = event as CustomEvent;
        // console.log(customEvent.detail.message);
        alert('Primary Button Clicked');
    });

    banner.addEventListener('secondary-btn', () => {
        // const customEvent = event as CustomEvent;
        // console.log(customEvent.detail.message);
        alert('Secondary Button Clicked');
    })
}

showBanner();