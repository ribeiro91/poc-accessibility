import test from "./test.html?raw";

import "./css/critical.css";
import "./css/dynamic-fetcher.css";
import "./css/print.css";
import "./css/modal.css";
import "./css/title.css";
import "./css/promo.css";
import "./css/breadcrumbs.css";
import "./css/sticky-bar.css";
import "./css/footer.css";
// import './style.css';

import "./js/dynamic-fetcher.js";
import "./js/header.js";
import "./js/container.js";

document.querySelector("#app").innerHTML = test;

// document.querySelector('.cmp-header').addEventListener('focusout', (e) => {
//   console.log(e)
// })


