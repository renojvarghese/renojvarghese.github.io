!function(t){var o={};function n(i){if(o[i])return o[i].exports;var s=o[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,o,i){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)n.d(i,s,function(o){return t[o]}.bind(null,s));return i},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=0)}([function(t,o,n){"use strict";n(1);var i=function(t){return t&&t.__esModule?t:{default:t}}(n(3));n(4);if(!("IntersectionObserver"in window)){var s=document.createElement("script");s.src="https://raw.githubusercontent.com/w3c/IntersectionObserver/master/polyfill/intersection-observer.js",document.getElementsByTagName("head")[0].appendChild(s)}window.onload=function(){var t=(0,i.default)();t.observe(),document.querySelectorAll(".lozad").forEach(function(o,n){t.triggerLoad(o)}),document.querySelectorAll(".video-ctrl").forEach(function(t){var o=t.getAttribute("target"),n=document.getElementById(o);t.onclick=function(){n.paused?(n.play(),t.innerHTML="stop video"):(n.pause(),t.innerHTML="play video")},n.autoplay?t.innerHTML="stop video":t.innerHTML="play video"}),document.querySelectorAll(".animate").forEach(function(t){t.classList.add("in")})}},function(t,o,n){},,function(t,o,n){
/*! lozad.js - v1.14.0 - 2019-10-19
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load:function(o){if("picture"===o.nodeName.toLowerCase()){var n=document.createElement("img");t&&o.getAttribute("data-iesrc")&&(n.src=o.getAttribute("data-iesrc")),o.getAttribute("data-alt")&&(n.alt=o.getAttribute("data-alt")),o.append(n)}if("video"===o.nodeName.toLowerCase()&&!o.getAttribute("data-src")&&o.children){for(var i=o.children,s=void 0,e=0;e<=i.length-1;e++)(s=i[e].getAttribute("data-src"))&&(i[e].src=s);o.load()}if(o.getAttribute("data-src")&&(o.src=o.getAttribute("data-src")),o.getAttribute("data-srcset")&&o.setAttribute("srcset",o.getAttribute("data-srcset")),o.getAttribute("data-background-image"))o.style.backgroundImage="url('"+o.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(o.getAttribute("data-background-image-set")){var c=o.getAttribute("data-background-image-set").split(","),g=c[0].substr(0,c[0].indexOf(" "))||c[0];g=-1===g.indexOf("url(")?"url("+g+")":g,1===c.length?o.style.backgroundImage=g:o.setAttribute("style",(o.getAttribute("style")||"")+"background-image: "+g+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}o.getAttribute("data-toggle-class")&&o.classList.toggle(o.getAttribute("data-toggle-class"))},loaded:function(){}};function n(t){t.setAttribute("data-loaded",!0)}var i=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var t,s,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},g=Object.assign({},o,c),p=g.root,r=g.rootMargin,a=g.threshold,u=g.load,m=g.loaded,f=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(f=new IntersectionObserver((t=u,s=m,function(o,e){o.forEach(function(o){(0<o.intersectionRatio||o.isIntersecting)&&(e.unobserve(o.target),i(o.target)||(t(o.target),n(o.target),s(o.target)))})}),{root:p,rootMargin:r,threshold:a})),{observe:function(){for(var t=function(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:o.querySelectorAll(t)}(e,p),o=0;o<t.length;o++)i(t[o])||(f?f.observe(t[o]):(u(t[o]),n(t[o]),m(t[o])))},triggerLoad:function(t){i(t)||(u(t),n(t),m(t))},observer:f}}}()},function(t,o,n){var i={"./docs/Renoj_Varghese_Resume2.pdf":5,"./docs/VargheseRenoj2021.pdf":6,"./docs/civics/renoj_varghese_resume.pdf":7,"./docs/dating-app-research.pdf":8,"./docs/gaship-dmd-renoj.pdf":9,"./docs/gaship-tgs-supplemental.pdf":10,"./docs/linkedin-renoj.pdf":11,"./docs/renoj_varghese_resume.pdf":12,"./docs/renoj_varghese_resume_product_ux.pdf":13,"./docs/renoj_varghese_transcript.pdf":14,"./docs/resume copy 10.pdf":15,"./docs/resume politics.pdf":16,"./docs/resume_renoj_k_varghese.pdf":17,"./docs/resume_renoj_varghese-2.pdf":18,"./docs/transcript-renoj-varghese.pdf":19,"./docs/transcript_renoj_varghese.pdf":20,"./img/chatbots/chatbot-main.png":21,"./img/chatbots/icon.png":22,"./img/chatbots/pizzabot-mock.png":23,"./img/chatbots/pizzabot.mp4":24,"./img/chatbots/pizzabot.png":25,"./img/chatbots/triviabot-mock.png":26,"./img/chatbots/triviabot.mp4":27,"./img/chatbots/triviabot.png":28,"./img/govcontact/briana-message.png":29,"./img/govcontact/briana-terry-flow.png":30,"./img/govcontact/briana.png":31,"./img/govcontact/briana_terry_flow.png":32,"./img/govcontact/competitive-analysis-2.png":33,"./img/govcontact/competitive-analysis.png":34,"./img/govcontact/current-design-2.png":35,"./img/govcontact/current-design.png":36,"./img/govcontact/deep-dive-feed.png":37,"./img/govcontact/deep-dive-message.png":38,"./img/govcontact/deep-dive-rep.png":39,"./img/govcontact/final-feed.png":40,"./img/govcontact/final-rep.png":41,"./img/govcontact/first-prototype.png":42,"./img/govcontact/gc-feed.mp4":43,"./img/govcontact/gc-hero-large.png":44,"./img/govcontact/gc-hero-small.png":45,"./img/govcontact/gc-mess-1.mp4":46,"./img/govcontact/gc-rep.mp4":47,"./img/govcontact/icon.png":48,"./img/govcontact/learning-flow-2.png":49,"./img/govcontact/learning-flow.png":50,"./img/govcontact/onboarding-flow.png":51,"./img/govcontact/onboarding.png":52,"./img/govcontact/rep-profile.png":53,"./img/govcontact/rep-profiles-2.png":54,"./img/govcontact/results.png":55,"./img/govcontact/second-prototype.png":56,"./img/govcontact/single-page-layout.png":57,"./img/govcontact/sol-1.png":58,"./img/govcontact/sol-2.png":59,"./img/govcontact/sol-3.png":60,"./img/govcontact/terry-message.png":61,"./img/govcontact/terry.png":62,"./img/govcontact/title.mov":63,"./img/govcontact/title_1.mov":64,"./img/govcontact/user-flow.png":65,"./img/govcontact/user-stories.png":66,"./img/govcontact/visual-design.png":67,"./img/govcontact/visual_design.png":68,"./img/govcontact/wireframe.png":69,"./img/govcontact/wireframes.png":70,"./img/husky/color palette.png":71,"./img/husky/complete-module-study.jpg":72,"./img/husky/contact-nurses.jpg":73,"./img/husky/design.png":74,"./img/husky/green.png":75,"./img/husky/information architecture_v1.png":76,"./img/husky/information_architecture.png":77,"./img/husky/mockup.png":78,"./img/husky/orange.png":79,"./img/husky/original-ui.png":80,"./img/husky/profile/ejm.jpg":81,"./img/husky/profile/jb.jpg":82,"./img/husky/profile/ne.jpg":83,"./img/husky/profile/rv.jpg":84,"./img/husky/profile/sb.png":85,"./img/husky/profile/sm.png":86,"./img/husky/profile/tm.jpg":87,"./img/husky/profile/yh.jpg":88,"./img/husky/user-flow.png":89,"./img/husky/user-flow–goal-activity.png":90,"./img/husky/user-flow–goal-checkin.png":91,"./img/husky/visual-design.jpg":92,"./img/husky/visual-exploration.png":93,"./img/jobhunting/final-stills.png":94,"./img/jobhunting/icon.png":95,"./img/jobhunting/jh-colors.png":96,"./img/jobhunting/jh-storyboard.png":97,"./img/jobhunting/jh-typography.png":98,"./img/jobhunting/storyboard-1.png":99,"./img/jobhunting/storyboard-2.png":100,"./img/jobhunting/storyboards.png":101,"./img/jobhunting/style-frame.png":102,"./img/jobhunting/wireframe-style.png":103,"./img/subconscious/ab-test.png":104,"./img/subconscious/donate-grid copy.png":105,"./img/subconscious/donate-grid.png":106,"./img/subconscious/donate-percent.png":107,"./img/subconscious/donate-wire-1.png":108,"./img/subconscious/donate-wire-2.png":109,"./img/subconscious/donations-original.png":110,"./img/subconscious/get-help.png":111,"./img/subconscious/home copy.png":112,"./img/subconscious/home-mural.png":113,"./img/subconscious/home-search-original.png":114,"./img/subconscious/home-search.png":115,"./img/subconscious/home-wire-1.png":116,"./img/subconscious/home-wire-2.png":117,"./img/subconscious/icon.png":118,"./img/subconscious/mockups.png":119,"./img/subconscious/mural-header.png":120,"./img/subconscious/our-story-copy-2.png":121,"./img/subconscious/our-story-copy.png":122,"./img/subconscious/persona-journey-map-subsconsious.pdf":123,"./img/subconscious/personas-maps.png":124,"./img/subconscious/results.png":125,"./img/subconscious/sketches.png":126,"./img/subconscious/sol-1.png":127,"./img/subconscious/sol-2.png":128,"./img/subconscious/sol-3.png":129,"./img/subconscious/story.png":130,"./img/subconscious/test-a.png":131,"./img/subconscious/test-b.png":132};function s(t){var o=e(t);return n(o)}function e(t){var o=i[t];if(!(o+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o}s.keys=function(){return Object.keys(i)},s.resolve=e,t.exports=s,s.id=4},function(t,o,n){t.exports=n.p+"static/docs/Renoj_Varghese_Resume2.pdf"},function(t,o,n){t.exports=n.p+"static/docs/VargheseRenoj2021.pdf"},function(t,o,n){t.exports=n.p+"static/docs/civics/renoj_varghese_resume.pdf"},function(t,o,n){t.exports=n.p+"static/docs/dating-app-research.pdf"},function(t,o,n){t.exports=n.p+"static/docs/gaship-dmd-renoj.pdf"},function(t,o,n){t.exports=n.p+"static/docs/gaship-tgs-supplemental.pdf"},function(t,o,n){t.exports=n.p+"static/docs/linkedin-renoj.pdf"},function(t,o,n){t.exports=n.p+"static/docs/renoj_varghese_resume.pdf"},function(t,o,n){t.exports=n.p+"static/docs/renoj_varghese_resume_product_ux.pdf"},function(t,o,n){t.exports=n.p+"static/docs/renoj_varghese_transcript.pdf"},function(t,o,n){t.exports=n.p+"static/docs/resume copy 10.pdf"},function(t,o,n){t.exports=n.p+"static/docs/resume politics.pdf"},function(t,o,n){t.exports=n.p+"static/docs/resume_renoj_k_varghese.pdf"},function(t,o,n){t.exports=n.p+"static/docs/resume_renoj_varghese-2.pdf"},function(t,o,n){t.exports=n.p+"static/docs/transcript-renoj-varghese.pdf"},function(t,o,n){t.exports=n.p+"static/docs/transcript_renoj_varghese.pdf"},function(t,o,n){t.exports=n.p+"static/img/chatbots/chatbot-main.png"},function(t,o,n){t.exports=n.p+"static/img/chatbots/icon.png"},function(t,o,n){t.exports=n.p+"static/img/chatbots/pizzabot-mock.png"},function(t,o,n){t.exports=n.p+"static/img/chatbots/pizzabot.mp4"},function(t,o,n){t.exports=n.p+"static/img/chatbots/pizzabot.png"},function(t,o,n){t.exports=n.p+"static/img/chatbots/triviabot-mock.png"},function(t,o,n){t.exports=n.p+"static/img/chatbots/triviabot.mp4"},function(t,o,n){t.exports=n.p+"static/img/chatbots/triviabot.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/briana-message.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/briana-terry-flow.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/briana.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/briana_terry_flow.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/competitive-analysis-2.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/competitive-analysis.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/current-design-2.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/current-design.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/deep-dive-feed.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/deep-dive-message.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/deep-dive-rep.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/final-feed.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/final-rep.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/first-prototype.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/gc-feed.mp4"},function(t,o,n){t.exports=n.p+"static/img/govcontact/gc-hero-large.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/gc-hero-small.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/gc-mess-1.mp4"},function(t,o,n){t.exports=n.p+"static/img/govcontact/gc-rep.mp4"},function(t,o,n){t.exports=n.p+"static/img/govcontact/icon.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/learning-flow-2.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/learning-flow.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/onboarding-flow.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/onboarding.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/rep-profile.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/rep-profiles-2.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/results.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/second-prototype.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/single-page-layout.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/sol-1.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/sol-2.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/sol-3.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/terry-message.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/terry.png"},function(t,o){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},function(t,o){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},function(t,o,n){t.exports=n.p+"static/img/govcontact/user-flow.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/user-stories.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/visual-design.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/visual_design.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/wireframe.png"},function(t,o,n){t.exports=n.p+"static/img/govcontact/wireframes.png"},function(t,o,n){t.exports=n.p+"static/img/husky/color palette.png"},function(t,o,n){t.exports=n.p+"static/img/husky/complete-module-study.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/contact-nurses.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/design.png"},function(t,o,n){t.exports=n.p+"static/img/husky/green.png"},function(t,o,n){t.exports=n.p+"static/img/husky/information architecture_v1.png"},function(t,o,n){t.exports=n.p+"static/img/husky/information_architecture.png"},function(t,o,n){t.exports=n.p+"static/img/husky/mockup.png"},function(t,o,n){t.exports=n.p+"static/img/husky/orange.png"},function(t,o,n){t.exports=n.p+"static/img/husky/original-ui.png"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/ejm.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/jb.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/ne.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/rv.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/sb.png"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/sm.png"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/tm.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/profile/yh.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/user-flow.png"},function(t,o,n){t.exports=n.p+"static/img/husky/user-flow–goal-activity.png"},function(t,o,n){t.exports=n.p+"static/img/husky/user-flow–goal-checkin.png"},function(t,o,n){t.exports=n.p+"static/img/husky/visual-design.jpg"},function(t,o,n){t.exports=n.p+"static/img/husky/visual-exploration.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/final-stills.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/icon.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/jh-colors.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/jh-storyboard.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/jh-typography.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/storyboard-1.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/storyboard-2.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/storyboards.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/style-frame.png"},function(t,o,n){t.exports=n.p+"static/img/jobhunting/wireframe-style.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/ab-test.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/donate-grid copy.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/donate-grid.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/donate-percent.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/donate-wire-1.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/donate-wire-2.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/donations-original.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/get-help.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/home copy.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/home-mural.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/home-search-original.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/home-search.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/home-wire-1.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/home-wire-2.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/icon.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/mockups.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/mural-header.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/our-story-copy-2.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/our-story-copy.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/persona-journey-map-subsconsious.pdf"},function(t,o,n){t.exports=n.p+"static/img/subconscious/personas-maps.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/results.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/sketches.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/sol-1.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/sol-2.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/sol-3.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/story.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/test-a.png"},function(t,o,n){t.exports=n.p+"static/img/subconscious/test-b.png"}]);