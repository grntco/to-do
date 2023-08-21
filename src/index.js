import './styles.css';
import { inboxView } from './app/app';
import createNav from './ui/nav';
import { createSidebar } from './ui/sidebar';
import { createViewContainer } from './ui/viewContainer';
import events from './app/events';

const init = (function() {
    createNav();
    createSidebar();
    createViewContainer(inboxView);
})();
