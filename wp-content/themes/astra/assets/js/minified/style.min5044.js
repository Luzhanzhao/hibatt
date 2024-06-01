var astraGetParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)t&&!e.matches(t)||a.push(e);return a},getParents=function(e,t){console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),astraGetParents(e,t)},astraToggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},toggleClass=function(e,t){console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),astraToggleClass(e,t)},astraTriggerEvent=(function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(e,t){var a=new CustomEvent(t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});e.dispatchEvent(a)});astraSmoothScroll=function(e,t){e.preventDefault(),window.scrollTo({top:t,left:0,behavior:"smooth"})},astScrollToTopHandler=function(e,t){var a=getComputedStyle(t).content,n=t.dataset.onDevices,a=a.replace(/[^0-9]/g,"");"both"==n||"desktop"==n&&"769"==a||"mobile"==n&&""==a?(n=window.pageYOffset||document.body.scrollTop,e&&e.length?n>e.offsetHeight+100?t.style.display="block":t.style.display="none":300<window.pageYOffset?t.style.display="block":t.style.display="none"):t.style.display="none"},function(){function e(){var e=document.querySelector("body").style.overflow,t=(document.querySelector("body").style.overflow="hidden",window.innerWidth),a=(document.querySelector("body").style.overflow=e,astra.break_point),n=document.querySelectorAll(".main-header-bar-wrap");if(0<n.length)for(var s=0;s<n.length;s++)"DIV"==n[s].tagName&&n[s].classList.contains("main-header-bar-wrap")&&(a<t?(null!=r[s]&&r[s].classList.remove("toggled"),document.body.classList.remove("ast-header-break-point"),document.body.classList.add("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-enabled")):(document.body.classList.add("ast-header-break-point"),document.body.classList.remove("ast-desktop"),astraTriggerEvent(document.body,"astra-header-responsive-disabled")))}for(var t,a,n,s,o,r=document.querySelectorAll(".main-header-menu-toggle"),l={},i=(e(),AstraToggleSubMenu=function(){for(var e,t=this.parentNode,a=(t.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&(this.classList.contains("ast-menu-toggle")||""===(e=t.querySelector("a").getAttribute("href"))&&"#"===e||(window.location=e)),t.querySelectorAll(".menu-item-has-children")),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");var s=a[n].querySelector(".sub-menu, .children");null!==s&&(s.style.display="none")}for(var o=t.parentNode.querySelectorAll(".menu-item-has-children"),n=0;n<o.length;n++)if(o[n]!=t){o[n].classList.remove("ast-submenu-expanded");for(var r=o[n].querySelectorAll(".sub-menu"),l=0;l<r.length;l++)r[l].style.display="none"}t.classList.contains("menu-item-has-children")&&(astraToggleClass(t,"ast-submenu-expanded"),t.classList.contains("ast-submenu-expanded")?t.querySelector(".sub-menu").style.display="block":t.querySelector(".sub-menu").style.display="none")},AstraNavigationMenu=function(e){console.warn("AstraNavigationMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future.")},AstraToggleMenu=function(e){if(console.warn("AstraToggleMenu() function has been deprecated since version 1.6.5 or above of Astra Theme and will be removed in the future. Use AstraToggleSubMenu() instead."),0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("click",AstraToggleSubMenu,!1)},AstraToggleSetup=function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<r.length)for(var t,a=0;a<r.length;a++)if(r[a].setAttribute("data-index",a),l[a]||(l[a]=r[a],r[a].addEventListener("click",astraNavMenuToggle,!1)),void 0!==e[a]&&0<(t=document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")?e[a].querySelectorAll(".ast-header-break-point .main-header-menu .menu-item-has-children > .menu-link, .ast-header-break-point ul.main-header-menu .ast-menu-toggle"):e[a].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuToggle=function(e){e.preventDefault();var e=document.querySelectorAll(".main-header-bar-navigation"),t=this.getAttribute("data-index");if(void 0===e[t])return!1;for(var a=e[t].querySelectorAll(".menu-item-has-children"),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");for(var s=a[n].querySelectorAll(".sub-menu"),o=0;o<s.length;o++)s[o].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[t],"toggle-on"),astraToggleClass(r[t],"toggled"),e[t].classList.contains("toggle-on")?(e[t].style.display="block",document.body.classList.add("ast-main-header-nav-open")):(e[t].style.display="",document.body.classList.remove("ast-main-header-nav-open")))},document.body.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),n=0;n<a.length;n++)a[n].style.display="";for(var s=e[t].getElementsByClassName("children"),o=0;o<s.length;o++)s[o].style.display="";for(var r=e[t].getElementsByClassName("ast-search-menu-icon"),l=0;l<r.length;l++)r[l].classList.remove("ast-dropdown-active"),r[l].style.display=""}},!1),window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&(e(),AstraToggleSetup())}),document.addEventListener("DOMContentLoaded",function(){var e,t;for(AstraToggleSetup(),e=document.querySelectorAll(".navigation-accessibility"),t=0;t<=e.length-1;t++)e[t]&&!function(e){if(e){var t=e.getElementsByTagName("button")[0];if(void 0!==t||void 0!==(t=e.getElementsByTagName("a")[0])){var a=e.getElementsByTagName("ul")[0];if(void 0===a)t.style.display="none";else{a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),t.onclick=function(){-1!==e.className.indexOf("toggled")?(e.className=e.className.replace(" toggled",""),t.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(e.className+=" toggled",t.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))};for(var n=a.getElementsByTagName("a"),s=a.getElementsByTagName("ul"),o=0,r=s.length;o<r;o++)s[o].parentNode.setAttribute("aria-haspopup","true");for(o=0,r=n.length;o<r;o++)n[o].addEventListener("focus",m,!0),n[o].addEventListener("blur",g,!0),n[o].addEventListener("click",d,!0)}}}}(e[t])}),a=(t=navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(a[1])?h=/\brv[ :]+(\d+)/g.exec(t)||[]:"Chrome"===a[1]&&null!=(h=t.match(/\bOPR|Edge\/(\d+)/))||(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(h=t.match(/version\/(\d+)/i))&&a.splice(1,1,h[1]),t=document.body,"Safari"===a[0]&&a[1]<11&&t.classList.add("ast-safari-browser-less-than-11")),document.getElementsByClassName("astra-search-icon")),c=0;c<i.length;c++)i[c].onclick=function(e){var t;this.classList.contains("slide-search")&&(e.preventDefault(),(t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active")?(""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active")):(t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200)))};function d(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(!document.body.classList.contains("ast-header-break-point")||document.querySelector("header.site-header").classList.contains("ast-menu-toggle-link")&&t.classList.contains("menu-item-has-children"))for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement;else{document.querySelector(".main-header-menu-toggle").classList.remove("toggled");(t=document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"),t.style.display="none";var t=document.querySelector(".menu-below-header-toggle"),a=document.querySelector(".ast-below-header"),n=document.querySelector(".ast-below-header-actual-nav"),t=(t&&a&&n&&(t.classList.remove("toggled"),a.classList.remove("toggle-on"),n.style.display="none"),document.querySelector(".menu-above-header-toggle")),a=document.querySelector(".ast-above-header"),n=document.querySelector(".ast-above-header-navigation");t&&a&&n&&(t.classList.remove("toggled"),a.classList.remove("toggle-on"),n.style.display="none"),astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked")}}}function u(e,t){for(;-1===e.className.indexOf(t);)"li"===e.tagName.toLowerCase()&&(e.classList.contains("focus")?e.classList.remove("focus"):e.classList.add("focus")),e=e.parentElement}function m(){u(this,"nav-menu")}function g(){var e=this||"";String(e).includes("#")&&document.body.classList.contains("ast-mouse-clicked")||u(e,"nav-menu")}if(document.querySelectorAll(".search-field").forEach(e=>{e.addEventListener("focus",function(e){var t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");astraToggleClass(t,"ast-dropdown-active")}),e.addEventListener("blur",function(e){var t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");t.classList.remove("ast-dropdown-active"),astraToggleClass(t,"ast-dropdown-active")})}),document.body.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===astraGetParents(e.target,".ast-search-menu-icon").length&&0===astraGetParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},"querySelector"in document&&"addEventListener"in window&&((n=document.body).addEventListener("mousedown",function(){n.classList.add("ast-mouse-clicked")}),n.addEventListener("keydown",function(){n.classList.remove("ast-mouse-clicked")})),astra.is_scroll_to_id){let t=[];var h=document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([href*="uagb-tab"]):not(.uagb-toc-link__trigger):not(.skip-link):not(.nav-links a):not([href*="tab-"])');if(h)for(const f of h)f.href.split("#")[0]!==location.href.split("#")[0]?t.push({hash:f.hash,url:f.href.split("#")[0]}):""!==f.hash&&f.addEventListener("click",v);function v(e){let t=0;var a=document.querySelector(".site-header");a&&((a=a.querySelectorAll("div[data-stick-support]"))&&a.forEach(e=>{t+=e.clientHeight}),a=this.hash)&&(a=(a=document.querySelector(a))&&a.offsetTop-t)&&astraSmoothScroll(e,a)}window.addEventListener("DOMContentLoaded",e=>{for(var a of t)if(window.location.href.split("#")[0]===a.url){var n=document.querySelector(".site-header");let t=0;(n=n.querySelectorAll("div[data-stick-support]"))&&n.forEach(e=>{t+=e.clientHeight}),(n=document.querySelector(a.hash))&&(a=n.offsetTop-t)&&astraSmoothScroll(e,a)}})}astra.is_scroll_to_top&&(s=document.querySelector("#page header"),o=document.getElementById("ast-scroll-top"),astScrollToTopHandler(s,o),window.addEventListener("scroll",function(){astScrollToTopHandler(s,o)}),o.onclick=function(e){astraSmoothScroll(e,0)})}();