(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n);function n(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),closeMenuLnk1:document.querySelector("[link1-menu-close]"),closeMenuLnk2:document.querySelector("[link2-menu-close]"),closeMenuLnk3:document.querySelector("[link3-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",n),t.closeMenuBtn.addEventListener("click",n),t.closeMenuLnk1.addEventListener("click",n),t.closeMenuLnk2.addEventListener("click",n),t.closeMenuLnk3.addEventListener("click",n);function n(){t.menu.classList.toggle("is-hidden")}})();