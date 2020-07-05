!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function n(e,t,o,n){this.title=e,this.description=t,this.dueDate=o,this.project=n}function l(e,t){this.name=e,this.todoList=t}function r(){const e=document.getElementsByClassName("collapse");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");c(this).forEach(e=>{"none"===e.style.display?e.style.display="inline-block":e.style.display="none"})}))}function i(){const e=document.getElementsByClassName("collapseProj");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{e.target.classList.toggle("active");const t=e.target.nextElementSibling.nextElementSibling;"none"===t.style.display?t.style.display="block":t.style.display="none"})}function c(e){let t=[],o=e.parentNode.firstChild;for(;o;)o!==e&&o.nodeType===Node.ELEMENT_NODE&&t.push(o),o=o.nextElementSibling||o.nextSibling;return t}function a(){r(),i(),document.querySelector("#newProj").addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector("#projName"),o=t.value.trim();""!=o&&(p(o,[]),t.value="",f())}),document.querySelector("#newTodo").addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector("#todoName"),o=t.value.trim(),n=document.querySelector("#todoDesc"),l=n.value.trim(),r=document.querySelector("#todoDueDate"),i=r.value.trim(),c=document.querySelector("#projectDropDown"),a=c.value.trim();""!=o&&(m(o,l,i,a),t.value="",n.value="",r.value="",c.value="",f())}),function(){let e=document.getElementsByClassName("rmv");Array.prototype.slice.call(e).forEach(e=>{e.addEventListener("click",()=>{!function(e){const t=e.previousSibling.textContent,o=e.parentNode.parentNode.previousSibling.previousSibling.previousSibling.textContent,n=d.findIndex(e=>e.name===o);for(let e=0;e<d[n].todoList.length;e++)if(d[n].todoList[e].title===t){d[n].todoList.splice(e,1),localStorage.setItem("projects",JSON.stringify(d));break}0===d[n].todoList.length&&(d.splice(n,1),localStorage.setItem("projects",JSON.stringify(d)));u()}(e)})})}(),s()}function s(){!function(){const e=document.getElementsByTagName("option");if(e.length>0){let t=Array.prototype.slice.call(e);for(let e=t.length-1;e>=0;e--)t[e].remove()}}();const e=document.querySelector("#projectDropDown"),t=f();for(let o=0;o<t.length;o++){const n=document.createElement("option");n.value=t[o].name,n.innerHTML=t[o].name,e.appendChild(n)}}function u(){!function(){let e=document.querySelector("#container").children,t=Array.prototype.slice.call(e);for(let e=t.length-1;e>=0;e--)t[e].remove()}(),f().forEach(e=>{let t=document.querySelector("#container"),o=document.createElement("ul");o.className="row";let n=document.createElement("h1");n.className="projName",n.textContent=e.name;let l=document.createElement("button");l.className="collapseProj",l.innerHTML="Collapse";let r=document.createElement("br");t.appendChild(n),t.appendChild(l),t.appendChild(r),function(e,t){for(let o=0;o<e.todoList.length;o++){const n=document.createElement("ul");n.className="todo";for(const t in e.todoList[o])if("title"===t){let l=document.createElement("button");l.className+="collapse",l.innerHTML=e.todoList[o][t],n.appendChild(l);let r=document.createElement("button");r.className+="rmv",r.innerHTML="Remove To-do",n.appendChild(r)}else{if("project"===t)continue;{let l=t.charAt(0).toUpperCase()+t.slice(1),r=document.createElement("li");r.textContent=`${l} : \n              ${e.todoList[o][t]}`,r.className="rows",n.appendChild(r)}}t.appendChild(n)}}(e,o),t.appendChild(o)}),a()}o.r(t);let d=[];localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify(d));function p(e,t){let o=new l(e,t);d.push(o),localStorage.setItem("projects",JSON.stringify(d)),i(),u(),s()}function m(e,t,o,l){let i=new n(e,t,o,l);d.filter(e=>e.name===l)[0].todoList.push(i),localStorage.setItem("projects",JSON.stringify(d)),r(),u()}function f(){return d}JSON.parse(localStorage.getItem("projects")).forEach(e=>{p(e.name,e.todoList)}),0===JSON.parse(localStorage.getItem("projects")).length&&(p("Miscellaneous",[]),m("Click to-do names (ME) to collapse","When all to-do items are removed from a project, the project will be deleted. Try it out!","05/31/2000","Miscellaneous"),m("TIP","Be sure to select the project you want to add your to-do item to from the dropdown menu when creating it!","06/15/2019","Miscellaneous")),u()}]);