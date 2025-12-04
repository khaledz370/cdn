// Create namespace once
window.utils = window.utils || {};

/* ===============================
    LocalStorage Helper
================================*/
window.utils.updateLocalStorageObject = (key, newValues) => {
    const existing = localStorage.getItem(key);
    let data = existing ? JSON.parse(existing) : {};
    Object.assign(data, newValues);
    localStorage.setItem(key, JSON.stringify(data));
};

/* ===============================
    Cookie Helper
================================*/
window.utils.setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
};

/* ===============================
    Video Helpers
================================*/
window.utils.findVideo = () => document.querySelector("video");

window.utils.enableVideoSkipControls = (rewindSeconds = 5, forwardSeconds = 5) => {
    document.addEventListener("keydown", (e) => {
        const vid = window.utils.findVideo();
        if (!vid) return;

        if (e.key === "ArrowLeft") {
            vid.currentTime = Math.max(0, vid.currentTime - rewindSeconds);
            e.preventDefault();
        }

        if (e.key === "ArrowRight") {
            vid.currentTime = Math.min(vid.duration, vid.currentTime + forwardSeconds);
            e.preventDefault();
        }
    }, true);
};


/* ===============================
    click when exists
================================*/
window.utils.clickWhenExists = (selector, options = { once: true }) => {
    const tryClick = () => {
        const el = document.querySelector(selector);
        if (!el) return false;

        el.click();

        if (options.once) observer.disconnect();
        return true;
    };

    // If button already exists, click immediately
    if (tryClick()) return;

    const observer = new MutationObserver(() => tryClick());
    observer.observe(document.body, { childList: true, subtree: true });
};


/* ===============================
    click by text
================================*/
window.utils.clickButtonByText = (text, interval = 300) => {
    const checkInterval = setInterval(() => {
        const buttons = document.querySelectorAll("button");

        const btn = Array.from(buttons).find(b =>
            b.textContent.trim().toLowerCase().includes(text.toLowerCase())
        );

        if (btn) {
            btn.click();
            clearInterval(checkInterval);
        }
    }, interval);

    return checkInterval; // optional: allows manual cancellation
};


