// ==UserScript==
// @name         Disable Oneclick Video Buttons
// @namespace    https://github.com/jettnet/monkey-scripts
// @version      1.0
// @description  Disable one click buttons on Amazon
// @author       Jettnet
// @match        https://www.amazon.com/gp/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Just assume oneclick and order of children for now
    for (var e of document.getElementsByClassName("oneclick")) {
        e.children[0].disabled = true;
    }

})();
