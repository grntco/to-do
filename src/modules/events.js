import { d } from "./mainView";
import changeTheme from "./changeTheme";

const events = (function() {
    d.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.contains('fa-moon')) {
            changeTheme();
        }
    })
})();

export default events