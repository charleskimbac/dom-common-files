/*  v2025.5.2 from https://github.com/charleskimbac/dom-common-files
    whenever url changes, send "locationchange" event.
    
    add `"world": "MAIN"` in the content_script key in your manifest.json. this is to access the "history" world object.
*/

(() => {
    const oldPushState = history.pushState;
    history.pushState = function(...args) {
        const old = oldPushState.apply(this, args);
        window.dispatchEvent(new Event("locationchange"));
        return old;
    };

    const oldReplaceState = history.replaceState;
    history.replaceState = function(...args) {
        const old = oldReplaceState.apply(this, args);
        window.dispatchEvent(new Event("locationchange"));
        return old;
    };

    if (!window._locationChangeListenerAttached) {
        window.addEventListener("popstate", () => {
            window.dispatchEvent(new Event("locationchange"));
        });
        window._locationChangeListenerAttached = true;
    }
})();