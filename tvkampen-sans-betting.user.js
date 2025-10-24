// ==UserScript==
// @name         TVKampen Sans Betting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes links and icons for betting sites from TVKampen.com.
// @author       AnBasement
// @match        https://www.tvkampen.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeBettingElements() {
        document.querySelectorAll('div.icons-channels-rt-lilibet').forEach(el => el.remove());
        document.querySelectorAll('div.icons-channels-rt-LiliBet').forEach(el => el.remove());
    }
})();