// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-11-13
// @description  try to take over the world!
// @author       You
// @match        https://workflow.iitm.ac.in/student/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const autoSubmit = true; // set to false if you don't want to auto submit

(function() {
    'use strict';
    const captcha = document.querySelector("#HiddenCaptcha").value;
    console.log(captcha);
    const blank = document.querySelector("#txtCaptcha");
    if(blank.value == ""){
        blank.value += captcha;
        if(autoSubmit) document.querySelector("#Login").click();
    }
})();