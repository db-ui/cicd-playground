"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[661],{5661:function(e,t,n){n.r(t),n.d(t,{db_pagination:function(){return p}});var i=n(3433),a=n(3878),o=n(9199),r=n(181),l=n(5267);function s(e){return(0,a.Z)(e)||(0,o.Z)(e)||(0,r.Z)(e)||(0,l.Z)()}var c=n(5671),g=n(3144),m=n(5122),h=n(8423),p=function(){function e(t){(0,c.Z)(this,e),(0,m.r)(this,t),this.dbChange=(0,m.c)(this,"dbChange",7),this.currentpage=1,this.pages=2,this.count=2,this.titleprevious="Goto previous page",this.titlenext="Goto next page",this.titlepagination="Page Number",this.textprevious="Previous",this.textnext="Next",this.arialabel="Pagination",this.ariaid="db-"+(0,h.n)()}return(0,g.Z)(e,[{key:"handleChange",value:function(e){this.dbChange.emit(e)}},{key:"watchHandler",value:function(){this.sliceAndSetDefaults()}},{key:"componentWillLoad",value:function(){this.sliceAndSetDefaults()}},{key:"sliceAndSetDefaults",value:function(){var e=s(Array.from(Array(this.pages+1).keys())).slice(1);this.pagesFull=e}},{key:"decorateChild",value:function(e){return e.setAttribute("class","elm-link"),e.getAttribute("data-currentpage")&&(e.setAttribute("aria-current","page"),e.setAttribute("aria-disabled","true")),(0,m.h)("li",{innerHTML:e.outerHTML})}},{key:"paginationButtonFragment",value:function(e){var t=this,n=e.page,i=e.curr,a=e.ariaCurrent,o=e.ariaDisabled,r=e.title,l=e.rel,s=e.tabindex,c=e.disabled,g=e.index;return(0,m.h)("li",{key:g},(0,m.h)("button",Object.assign({class:"elm-link","data-rel":"none"!==l&&"".concat(l),tabindex:!!s&&"-1",title:r+" ".concat(n||""),type:"button"},(n===i||c)&&a,(n===i||c)&&o,{onClick:function(e){return t.handleChange(e)}}),n))}},{key:"navElement",value:function(e){return(0,m.h)("nav",{class:"cmp-pagination",role:"navigation","aria-labelledby":this.ariaid},(0,m.h)("h2",{class:"elm-headline ",id:this.ariaid},this.arialabel.charAt(0).toUpperCase()+this.arialabel.slice(1)),(0,m.h)("ol",null,e))}},{key:"slotChildren",value:function(){var e=Array.from(this.hostElement.children);this.hostElement.innerHTML="";var t=s(e),n=t[0],a=t.slice(1),o=s((0,i.Z)(a).reverse()),r=o[0],l=o.slice(1).reverse(),c=l.findIndex((function(e){return e.getAttribute("data-currentpage")})),g=c>=0?l[c-1].cloneNode(!0):n.cloneNode(!0);g.setAttribute("rel","prev"),g.setAttribute("tabindex","-1");var h=c>=0&&l.length<=c?l[c+1].cloneNode(!0):r.cloneNode(!0);return h.setAttribute("rel","next"),this.navElement((0,m.h)(m.F,null,this.decorateChild(g),this.decorateChild(n),this.ellipsisstart&&(0,m.h)("li",null,"\u2026"),l.map(this.decorateChild),this.ellipsisend&&(0,m.h)("li",null,"\u2026"),this.decorateChild(r),this.decorateChild(h)))}},{key:"goToPreviousPage",value:function(){return this.paginationButtonFragment({page:1===this.currentpage?this.currentpage:this.currentpage-1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"prev",tabindex:!0,disabled:1===this.currentpage,index:"A"})}},{key:"goToNextPage",value:function(){return this.paginationButtonFragment({page:this.currentpage===this.pages+1?this.currentpage:this.currentpage+1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlenext,rel:"next",tabindex:!0,disabled:this.currentpage===this.pages,index:"E"})}},{key:"goToFirstPage",value:function(){return this.paginationButtonFragment({page:this.pagesFull[0],curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:"B"})}},{key:"goToLastPage",value:function(){return this.paginationButtonFragment({page:this.pagesFull.slice(-1),curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:this.currentpage===this.pages,index:"C"})}},{key:"showMiddlePage",value:function(e){return this.paginationButtonFragment({page:e,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:e})}},{key:"showEllipsis",value:function(e){return this.pagesFull.length<8||this.currentpage<4&&"front"===e||this.currentpage>this.pagesFull.length-5&&"back"===e?null:(0,m.h)("li",{key:e},"\u2026")}},{key:"sliceCenterPages",value:function(){if(this.pagesFull.length<8)return this.pagesFull.slice(1,-1);var e=this.currentpage<=3||this.currentpage>=this.pagesFull.length-3?this.count+1:this.count;if(this.currentpage+this.count>=this.pagesFull.length)return this.pagesFull.slice(-e-1,-1);if(this.pagesFull.length-2<=e)return this.pagesFull.slice(1,1+this.pagesFull.length-2);if(this.pagesFull.length-2>e&&this.currentpage<=3)return this.pagesFull.slice(1,1+e);if(this.pagesFull.length-2>this.count&&this.currentpage>3&&this.currentpage+this.count<this.pagesFull.length){var t=this.pagesFull.slice(this.currentpage-1,this.currentpage+e);return t.includes(this.pagesFull.length-1)?t:t.slice(0,-1)}return[]}},{key:"centerPages",value:function(){var e=this;return this.sliceCenterPages().map((function(t){return e.showMiddlePage(t)}))}},{key:"render",value:function(){return Array.from(this.hostElement.children).find((function(e){return"a"===e.tagName.toLowerCase()}))?this.slotChildren():this.navElement((0,m.h)(m.F,null,this.goToPreviousPage(),this.goToFirstPage(),this.showEllipsis("front"),this.pagesFull.length>=3?this.centerPages():null,this.showEllipsis("back"),this.goToLastPage(),this.goToNextPage()))}},{key:"hostElement",get:function(){return(0,m.g)(this)}}],[{key:"watchers",get:function(){return{pages:["watchHandler"],currentpage:["watchHandler"],count:["watchHandler"]}}}]),e}();p.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}.cmp-pagination{color:#282d37;font-size:0.875rem;user-select:none}.cmp-pagination>ol{display:flex}.cmp-pagination .elm-headline{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-pagination li,.cmp-pagination .elm-link{display:inline-flex;justify-content:center;align-items:center}.cmp-pagination li{width:2.25rem;height:2.25rem}.cmp-pagination .elm-link{width:100%;height:100%;color:inherit;text-decoration:none}.cmp-pagination .elm-link[rel=prev],.cmp-pagination .elm-link[rel=next]{padding:0;vertical-align:bottom}.cmp-pagination .elm-link[rel=prev]::before{margin-left:0.6875rem}.cmp-pagination .elm-link[rel=next]::before{margin-right:0.6875rem}.cmp-pagination .elm-link[rel=prev]{font-size:0}.cmp-pagination .elm-link[rel=prev]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:"<";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[rel=prev]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=prev]::before{content:none}}.cmp-pagination .elm-link[rel=prev]::before{--icon-margin-right:0}.cmp-pagination .elm-link[rel=next]{font-size:0}.cmp-pagination .elm-link[rel=next]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:">";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[rel=next]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=next]::before{content:none}}.cmp-pagination .elm-link[rel=next]::before{--icon-margin-right:0}.cmp-pagination .elm-link[aria-current=page]{font-weight:700}.elm-link{display:inline-block;border-radius:0.25rem;text-underline-offset:0.1875rem;text-underline-position:under}@supports (text-underline-offset: 3px){.elm-link{text-underline-position:auto}}.elm-link:active{color:initial}.elm-link[aria-disabled=true]{opacity:0.4;pointer-events:none}.elm-link[aria-disabled=true]::before{color:initial}.elm-link[data-size=small]:not(.is-icon-text-replace){font-size:0.875rem}.elm-link[rel][data-size=small]::before,.elm-link[data-icon][data-size=small]::before,.elm-link[data-icon-before][data-size=small]::before{--icon-font-family:"icons-20-outline", "missing-icons" !important;--icon-font-size:1.25rem}.elm-link[data-icon-after][data-size=small]::after::after{--icon-font-family:"icons-20-outline", "missing-icons" !important;--icon-font-size:1.25rem}.elm-link[rel=configuration]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:"\u2699";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-link[rel=configuration]::before{content:var(--icon-glyph)/""}}@media aural{.elm-link[rel=configuration]::before{content:none}}@media speech{.elm-link[rel=configuration]::before{content:none}}.elm-link[rel=messages]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:"\ud83d\udcac";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-link[rel=messages]::before{content:var(--icon-glyph)/""}}@media aural{.elm-link[rel=messages]::before{content:none}}@media speech{.elm-link[rel=messages]::before{content:none}}.elm-link[rel=account]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:"\ud83d\ude42";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-link[rel=account]::before{content:var(--icon-glyph)/""}}@media aural{.elm-link[rel=account]::before{content:none}}@media speech{.elm-link[rel=account]::before{content:none}}.elm-link[rel=configuration]::before,.elm-link[rel=messages]::before,.elm-link[rel=account]::before{display:inline-block}.cmp-pagination button{border:none;font-size:0.875rem;background-color:inherit;cursor:pointer}.cmp-pagination .elm-link[data-rel=prev]{font-size:0}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:"<";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[data-rel=prev]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-margin-right:0}.cmp-pagination .elm-link[data-rel=next]{font-size:0}.cmp-pagination .elm-link[data-rel=next]::before{--icon-font-family:"icons-24-outline", "missing-icons" !important;--icon-font-size:1.5rem;--icon-margin-right:0.375rem;--icon-glyph:">";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[data-rel=next]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}.cmp-pagination .elm-link[data-rel=next]::before{--icon-margin-right:0}.elm-link[aria-disabled=true][aria-current=page]{opacity:1}'},8423:function(e,t,n){n.d(t,{n:function(){return i}});var i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var i=63&n[e];t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return t}}}]);
//# sourceMappingURL=661.2deb0b0b.chunk.js.map