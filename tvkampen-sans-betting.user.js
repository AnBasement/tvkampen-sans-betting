// ==UserScript==
// @name         TVKampen Sans Betting
// @namespace    http://tampermonkey.net/
// @version      0.1.4
// @description  Removes links and icons for betting sites from TVKampen.com.
// @author       AnBasement
// @match        https://www.tvkampen.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Removes icons for betting sites
    function removeBettingIcons() {
        document.querySelectorAll('div.icons-channels-rt-lilibet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-LiliBet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-N1Bet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-n1bet').forEach(el => el.remove());
    }

    // Removes bookmaker wrappers with betting lines
    function removeBookmakerWrapper() {
        document.querySelectorAll('div.match-details-rt__bookmaker-wrapper').forEach(el => el.remove());
    }

    // Run the functions after the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeBettingIcons);
        document.addEventListener('DOMContentLoaded', removeBookmakerWrapper);
    } else {
        removeBettingIcons();
        removeBookmakerWrapper();
    }
})();