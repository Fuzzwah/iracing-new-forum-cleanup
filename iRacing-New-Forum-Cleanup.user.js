// ==UserScript==
// @namespace     http://www.fuzzwahracing.com/p/new-forum-cleanup.html
// @name          iRacing My Results Highlighter
// @description   Highlights the rows of your, and optionally other selected drivers, in the iRacing event results table
// @include       *://forums.iracing.com/*
// @version       2.21.06.08.02
// @author        fuzzwah
// @copyright     2021+, fuzzwah (https://github.com/fuzzwah)
// @homepageURL   http://www.fuzzwahracing.com/p/results-highlighter.html
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
};

addGlobalStyle('div.Item-Header.CommentHeader {background: #3c3e44 !important; padding: 10px !important; border: 2px !important; border-color: #56565f !important; border-style: solid !important;}');
addGlobalStyle('.Section-Discussion ::after {display: none !important;}');
addGlobalStyle('div.Reactions {display: none !important;}');
