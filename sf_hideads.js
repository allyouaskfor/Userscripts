// ==UserScript==
// @name        SourceForge: No search ads.
// @description Removes ads integrated within your search results.
// @namespace   canibeanartist
// @include     http*://sourceforge.net/*
// @version     1.0
// @grant       none
// ==/UserScript==

var ads = document.querySelectorAll('.nel');

for (let i = 0, j = ads.length; i < j; ++i) {
    ads[i].remove();
}

for (var k = 0; k < 10; ++k) {
    if (k === 9) {
        var ads2 = document.querySelectorAll('.sterling');
        for (let l = 0, m = ads2.length; l < m; ++l) {
            ads2[l].remove();
        }
    }
}