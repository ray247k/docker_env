const prerender = require('prerender');
const server = prerender({
    // unable to find Chrome install. Please specify with chromeLocation
    chromeLocation: "/usr/bin/chromium",
    
    // Chrome connection closed... restarting Chrome
    chromeFlags: [
        "--no-sandbox",
        "--headless",
        "--disable-gpu",
        "--remote-debugging-port=9222",
        "--hide-scrollbars",
        "--disable-dev-shm-usage",
    ],
});

server.use(require('prerender-memory-cache'))

server.start();
