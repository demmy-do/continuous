import{g as r}from"./p-af480238.js";let n;const t=()=>{if(!n){const r=window;r.Ionicons=r.Ionicons||{},n=r.Ionicons.map=r.Ionicons.map||new Map}return n},s=r=>{const n=t();Object.keys(r).forEach(t=>n.set(t,r[t]))},i=r=>{let n=u(r.src);if(n)return n;if(n=o(r.name,r.icon,r.mode,r.ios,r.md))return e(n);if(r.icon){if(n=u(r.icon))return n;if(n=u(r.icon[r.mode]))return n}return null},e=n=>{return t().get(n)||r(`svg/${n}.svg`)},o=(r,n,t,s,i)=>(t="ios"===(t&&f(t))?"ios":"md",s&&"ios"===t?r=f(s):i&&"md"===t?r=f(i):(r||!n||l(n)||(r=n),a(r)&&(r=f(r))),a(r)&&""!==r.trim()?""!==r.replace(/[a-z]|-|\d/gi,"")?null:r:null),u=r=>a(r)&&(r=r.trim(),l(r))?r:null,l=r=>r.length>0&&/(\/|\.)/.test(r),a=r=>"string"==typeof r,f=r=>r.toLowerCase();export{s as a,o as b,i as g,a as i};