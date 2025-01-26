// ==UserScript==
// @name         DoNotTwitter
// @namespace    https://github.com/impliedgg/donottwitter
// @version      2025-01-26
// @description  Replaces Twitter with a dummy page.
// @author       @impliedgg - github
// @match        https://x.com/*
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // scary magic constant - just html. NEVER TRUST THIS STYLE OF CODE !! ALWAYS DECODE.
    const DATA_DONOTTWITTER = 'PCFET0NUWVBFIEhUTUw+CjwhLS10aGlzIHdhcyBkb25lIGluIG5vdGVwYWQgdyBubyBpbmRlbnRzIHdlIGJhbGwtLT4KPGhlYWQ+Cjx0aXRsZT5Eb05vdFR3aXR0ZXI8L3RpdGxlPgo8c3R5bGU+CmJvZHkgewpiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7CmNvbG9yOiNmZmY7Cn0KPC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KPGgxPkRvTm90VHdpdHRlciBoYXMgYmxvY2tlZCB0aGlzIHBhZ2UgZnJvbSBsb2FkaW5nLjwvaDE+CjxwPjxhIGhyZWY9Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9LVZmWWpQemoxWHciPjxiPkVsb24gaXMgYSBuYXppLjwvYj48L2E+WW91IHNob3VsZCBwcm9iYWJseSB1c2UgPGEgaHJlZj0iaHR0cHM6Ly9ic2t5LmFwcCI+Qmx1ZVNreTwvYT4gaW5zdGVhZC48L3A+CjwvYm9keT4K';

    document.write(atob(DATA_DONOTTWITTER));
    window.stop();
})();
