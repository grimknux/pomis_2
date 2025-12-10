// src/jqueryPluginWrapper.js
import $ from "jquery";


// Make jQuery global for UMD plugins
window.$ = $;
window.jQuery = $;

// Dynamically load your legacy plugin after jQuery is global
const loadPlugin = async () => {
    await import('/public/assets/dist/js/app.js');

    /*await import('../public/assets/dist/js/app.js');
    await import('../public/assets/dist/js/pages/uiTables.js');
    await import('../public/assets/dist/js/pages/formsComponents.js');
    await import('../public/assets/dist/js/dataTables.buttons.min.js');*/
};

loadPlugin();
