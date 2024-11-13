// ==UserScript==
// @name         gform
// @namespace    http://tampermonkey.net/
// @version      2024-11-11
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/forms/*
// @grant        none
// ==/UserScript==

const inputField = document.querySelector('input[name="Name"]');
const submitButton = document.querySelector('button[type="submit"]');

const fills = new Map();
fills.set("name", "");
fills.set("roll", "");
fills.set("mail", "");
fills.set("phone","");

function simulateTyping(element, text) {
    // Simulate typing each character
    console.log(text);
    for (let char of text) {
        // Set the input's value for each character
        element.value += char;

        // Simulate keydown and input events
        const keydownEvent = new KeyboardEvent("keydown", { key: char });
        element.dispatchEvent(keydownEvent);

        const inputEvent = new Event("input", { bubbles: true });
        element.dispatchEvent(inputEvent);

        const keyupEvent = new KeyboardEvent("keyup", { key: char });
        element.dispatchEvent(keyupEvent);
    }

    // Simulate the change event at the end
    const changeEvent = new Event("change", { bubbles: true });
    element.dispatchEvent(changeEvent);
}

// Qr7Oae -> question class

// M7eMe -> heading class
// ".whsOnd.zHQkBf" -> entry class
(function() {
    'use strict';
    const elements = document.querySelectorAll(".Qr7Oae");
    for (const element of elements) {
        const header = element.querySelector(".M7eMe");
        const key = header.innerText.toLowerCase();
        const blank = element.querySelector(".whsOnd.zHQkBf");
        console.log(key);
        if(fills.has(key)){
            console.log(fills.get(key));
            simulateTyping(blank,fills.get(key));
        }
        else {
            for(const [k,val] of fills){
                if(key.includes(k)){
                    console.log(val);
                    simulateTyping(blank,fills.get(k));

                }
            }
        }
    }
})();