// ==UserScript==
// @namespace     http://www.fuzzwahracing.com/p/new-forum-cleanup.html
// @name          iRacing New Forum Cleanup
// @description   Makes tweaks to the design of the new iRacing forums to improve readablity
// @include       *://forums.iracing.com/*
// @version       2.21.06.08.07
// @author        fuzzwah
// @copyright     2021+, fuzzwah (https://github.com/fuzzwah)
// @license       MIT; https://raw.githubusercontent.com/fuzzwah/iracing-new-forum-cleanup/master/LICENSE
// @homepageURL   http://www.fuzzwahracing.com/p/new-forum-cleanup.html
// @updateURL     https://raw.githubusercontent.com/fuzzwah/iracing-new-forum-cleanup/master/iRacing-New-Forum-Cleanup.user.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('div.Item-Header {background: #3c3e44 !important; padding: 10px !important; border: 2px !important; border-color: #56565f !important; border-style: solid !important;}');
addGlobalStyle('.AuthorInfo {display: inline !important; float: left !important; text-align: right !important; margin-top: -20px !important;}');
addGlobalStyle('.Section-Discussion ::after {display: none !important;}');
addGlobalStyle('div.Reactions {display: none !important;}');
