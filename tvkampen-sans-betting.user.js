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

    function removeBettingIcons() {
        document.querySelectorAll('div.icons-channels-rt-lilibet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-LiliBet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-N1Bet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-n1bet').forEach(el => el.remove());
    }

    function removeBookmakerWrapper() {
        document.querySelectorAll('div.match-details-rt__bookmaker-wrapper').forEach(el => el.remove());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeBettingIcons);
        document.addEventListener('DOMContentLoaded', removeBookmakerWrapper);
    } else {
        removeBettingIcons();
        removeBookmakerWrapper();
    }
})();