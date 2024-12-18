import { AnnouncementPlugin } from '../components/announcement';
import config from './announcement.config.json';

// Function to show the announcement with optional overrides
export function showAnnouncement(
    title: string = config.title,
    content: string = config.content,
    primaryButtonText: string = config.primaryButtonText,
    secondaryButtonText: string = config.secondaryButtonText,
    time: number = config.time
) {
    const announcement = document.createElement('announcement-component') as AnnouncementPlugin;
    announcement.title = title;
    announcement.content = content;
    announcement.PrimarybuttonText = primaryButtonText;
    announcement.SecondarybuttonText = secondaryButtonText;
    announcement.time = time;

    document.querySelector('#host')?.appendChild(announcement);

    announcement.addEventListener('primary-button-click', (event: Event) => {
        const customEvent = event as CustomEvent;
        console.log(customEvent.detail.message);
        // Add your custom logic for primary button click here
        alert('Primary button clicked');
    });

    announcement.addEventListener('secondary-button-click', (event: Event) => {
        const customEvent = event as CustomEvent;
        console.log(customEvent.detail.message);
        // Add your custom logic for secondary button click here

        alert('Secondary button clicked');
    });

    setTimeout(() => {
        announcement.ShowDOM = false;
    }, time);
}

// Function to hide the announcement
export function hideAnnouncement() {
    const announcement = document.querySelector('announcement-component') as AnnouncementPlugin;
    if (announcement) {
        announcement.ShowDOM = false;
    }
}

showAnnouncement();