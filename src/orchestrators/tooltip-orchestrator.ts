import { Tooltip } from '../components/tooltip';
import config from '../orchestrators/tooltip.config.json';

export function showTooltip(
    title: string = config.title,
    message: string = config.message,
    btnTxt: string = config.btnText
) {
    const button = document.querySelector('#btn');
    if (button) {
        const tooltip = document.createElement('tooltip-element') as Tooltip;
        button.appendChild(tooltip);
        tooltip.title = title;
        tooltip.message = message;
        tooltip.btnTxt = btnTxt;

        button.addEventListener('mouseenter', () => {
            tooltip._showTooltip();
        });

        button.addEventListener('mouseleave', () => {
            tooltip._hideTooltip();
        });
    }
}

showTooltip();
