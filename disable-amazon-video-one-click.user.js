// ==UserScript==
// @name         Disable Oneclick Video Buttons
// @namespace    https://github.com/jettnet/monkey-scripts
// @version      1.1
// @description  Disable one click buttons on Amazon
// @author       Jettnet
// @match        https://www.amazon.com/gp/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    for (var e of document.getElementsByClassName("js-purchase-button")) {
        for (var i of e.getElementsByTagName("input")) {
            i.disabled = true;
        }
        e.disabled = true;
    }

})();
