(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{164:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),l=t(166),r=t(170),c=t(186),m=t(167);var o=function(a){var e=a.metadata,t=e.previousPage,n=e.nextPage;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};e.default=function(a){var e=a.metadata,t=a.items,n=Object(l.a)().siteConfig.title,m="/"===e.permalink?n:"Blog";return i.a.createElement(r.a,{title:m,description:"Blog"},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((function(a){var e=a.content;return i.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null))})),i.a.createElement(o,{metadata:e})))))}}}]);