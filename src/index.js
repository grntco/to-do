import './styles.css';
import { inboxView } from './modules/app';
import createNav from './modules/nav';
import { createSidebar } from './modules/sidebar';
import { createViewContainer } from './modules/viewContainer';
import events from './modules/events';

const init = (function() {
    createNav();
    createSidebar();
    createViewContainer(inboxView);
})();
