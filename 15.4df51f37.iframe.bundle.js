(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./packages/db-ui-elements-stencil/dist/esm/db-toggle.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"db_toggle",(function(){return DbToggle}));var _index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-7b41cb22.js"),_index_browser_33b78992_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index.browser-33b78992.js");function cov_b0sa7cr9y(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-toggle.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"96c81af912f6bc2ba8681451bea07e58d1f14567"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-toggle.entry.js",statementMap:{0:{start:{line:4,column:20},end:{line:4,column:3878}},1:{start:{line:6,column:17},end:{line:21,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:53}},4:{start:{line:13,column:4},end:{line:13,column:35}},5:{start:{line:16,column:4},end:{line:16,column:30}},6:{start:{line:19,column:4},end:{line:19,column:285}},7:{start:{line:19,column:180},end:{line:19,column:204}},8:{start:{line:22,column:0},end:{line:22,column:29}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:14,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:15,column:2},end:{line:15,column:3}},loc:{start:{line:15,column:22},end:{line:17,column:3}},line:15},2:{name:"(anonymous_2)",decl:{start:{line:18,column:2},end:{line:18,column:3}},loc:{start:{line:18,column:11},end:{line:20,column:3}},line:18},3:{name:"(anonymous_3)",decl:{start:{line:19,column:169},end:{line:19,column:170}},loc:{start:{line:19,column:180},end:{line:19,column:204}},line:19}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"96c81af912f6bc2ba8681451bea07e58d1f14567"});var actualCoverage=coverage[path];return cov_b0sa7cr9y=function(){return actualCoverage},actualCoverage}cov_b0sa7cr9y();var dbToggleCss=(cov_b0sa7cr9y().s[0]++,':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-toggle{appearance:none;width:3rem;height:1.5rem;display:inline-block;position:relative;border-radius:0.75rem;border:none;background-color:#646973;transition:background-color 0.3s ease}@media (prefers-reduced-motion: reduce){.elm-toggle{transition-duration:0.01s !important}}.elm-toggle+.elm-label{vertical-align:top}.elm-toggle::before{content:"";display:block;position:absolute;left:0.125rem;top:0.125rem;width:1.25rem;height:1.25rem;background-color:#ffffff;border-radius:0.625rem;box-shadow:0 5px 30px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.15);transition:border-color, left 0.3s cubic-bezier(0.3, 1.5, 0.7, 1)}@media (prefers-reduced-motion: reduce){.elm-toggle::before{transition-duration:0.01s !important}}.elm-toggle:hover::before{background-color:#f7f7f7}.elm-toggle:active::before{width:1.5rem;transition:width 0.3s cubic-bezier(0.3, 1.5, 0.7, 1)}@media (prefers-reduced-motion: reduce){.elm-toggle:active::before{transition-duration:0.01s !important}}.elm-toggle:checked{background-color:#131821}.elm-toggle:checked::before{left:unset;right:0.125rem}.elm-toggle:disabled,.elm-toggle:disabled+label{opacity:0.5}:host{display:block}.elm-toggle::before{box-sizing:inherit}');cov_b0sa7cr9y().s[1]++;var DbToggle=function(){function DbToggle(hostRef){cov_b0sa7cr9y().f[0]++,cov_b0sa7cr9y().s[2]++,Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)(this,hostRef),cov_b0sa7cr9y().s[3]++,this.dbChange=Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"dbChange",7),cov_b0sa7cr9y().s[4]++,this.htmlid="db-"+Object(_index_browser_33b78992_js__WEBPACK_IMPORTED_MODULE_1__.a)()}var _proto=DbToggle.prototype;return _proto.handleChange=function handleChange(event){cov_b0sa7cr9y().f[1]++,cov_b0sa7cr9y().s[5]++,this.dbChange.emit(event)},_proto.render=function render(){var _this=this;return cov_b0sa7cr9y().f[2]++,cov_b0sa7cr9y().s[6]++,Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.b,null,Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("input",{type:"checkbox",role:"switch",class:"elm-toggle",disabled:this.disabled,checked:this.checked,id:this.htmlid,onChange:function onChange(event){return cov_b0sa7cr9y().f[3]++,cov_b0sa7cr9y().s[7]++,_this.handleChange(event)}}),Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("label",{class:"elm-label",htmlFor:this.htmlid},Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("slot",null)))},DbToggle}();cov_b0sa7cr9y().s[8]++,DbToggle.style=dbToggleCss},"./packages/db-ui-elements-stencil/dist/esm/index.browser-33b78992.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function cov_6l7wl2o5i(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/index.browser-33b78992.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4d50354c12c387860b200d418dd45aae3bd71f5e"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/index.browser-33b78992.js",statementMap:{0:{start:{line:1,column:13},end:{line:17,column:1}},1:{start:{line:2,column:11},end:{line:2,column:13}},2:{start:{line:3,column:14},end:{line:3,column:58}},3:{start:{line:4,column:2},end:{line:15,column:3}},4:{start:{line:5,column:15},end:{line:5,column:31}},5:{start:{line:6,column:4},end:{line:14,column:5}},6:{start:{line:7,column:6},end:{line:7,column:30}},7:{start:{line:8,column:11},end:{line:14,column:5}},8:{start:{line:9,column:6},end:{line:9,column:51}},9:{start:{line:10,column:11},end:{line:14,column:5}},10:{start:{line:11,column:6},end:{line:11,column:16}},11:{start:{line:13,column:6},end:{line:13,column:16}},12:{start:{line:16,column:2},end:{line:16,column:11}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:28},end:{line:17,column:1}},line:1}},branchMap:{0:{loc:{start:{line:1,column:14},end:{line:1,column:23}},type:"default-arg",locations:[{start:{line:1,column:21},end:{line:1,column:23}}],line:1},1:{loc:{start:{line:6,column:4},end:{line:14,column:5}},type:"if",locations:[{start:{line:6,column:4},end:{line:14,column:5}},{start:{line:8,column:11},end:{line:14,column:5}}],line:6},2:{loc:{start:{line:8,column:11},end:{line:14,column:5}},type:"if",locations:[{start:{line:8,column:11},end:{line:14,column:5}},{start:{line:10,column:11},end:{line:14,column:5}}],line:8},3:{loc:{start:{line:10,column:11},end:{line:14,column:5}},type:"if",locations:[{start:{line:10,column:11},end:{line:14,column:5}},{start:{line:12,column:11},end:{line:14,column:5}}],line:10}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0},b:{0:[0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4d50354c12c387860b200d418dd45aae3bd71f5e"});var actualCoverage=coverage[path];return cov_6l7wl2o5i=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,"a",(function(){return nanoid})),cov_6l7wl2o5i(),cov_6l7wl2o5i().s[0]++;var nanoid=function nanoid(size){void 0===size&&(cov_6l7wl2o5i().b[0][0]++,size=21),cov_6l7wl2o5i().f[0]++;var id=(cov_6l7wl2o5i().s[1]++,""),bytes=(cov_6l7wl2o5i().s[2]++,crypto.getRandomValues(new Uint8Array(size)));for(cov_6l7wl2o5i().s[3]++;size--;){var _byte=(cov_6l7wl2o5i().s[4]++,63&bytes[size]);cov_6l7wl2o5i().s[5]++,_byte<36?(cov_6l7wl2o5i().b[1][0]++,cov_6l7wl2o5i().s[6]++,id+=_byte.toString(36)):(cov_6l7wl2o5i().b[1][1]++,cov_6l7wl2o5i().s[7]++,_byte<62?(cov_6l7wl2o5i().b[2][0]++,cov_6l7wl2o5i().s[8]++,id+=(_byte-26).toString(36).toUpperCase()):(cov_6l7wl2o5i().b[2][1]++,cov_6l7wl2o5i().s[9]++,_byte<63?(cov_6l7wl2o5i().b[3][0]++,cov_6l7wl2o5i().s[10]++,id+="_"):(cov_6l7wl2o5i().b[3][1]++,cov_6l7wl2o5i().s[11]++,id+="-")))}return cov_6l7wl2o5i().s[12]++,id}}}]);