(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./packages/db-ui-elements-stencil/dist/esm/db-notification.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"db_notification",(function(){return DbNotification}));var _index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-7b41cb22.js");function cov_1r04oom6oe(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-notification.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"dcca71b170396674c7f63c560f37a8434b740873"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-notification.entry.js",statementMap:{0:{start:{line:3,column:26},end:{line:3,column:4218}},1:{start:{line:5,column:23},end:{line:22,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:12,column:4},end:{line:12,column:31}},4:{start:{line:15,column:4},end:{line:17,column:17}},5:{start:{line:20,column:4},end:{line:20,column:211}},6:{start:{line:23,column:0},end:{line:23,column:41}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:13,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:14,column:12},end:{line:18,column:3}},line:14},2:{name:"(anonymous_2)",decl:{start:{line:19,column:2},end:{line:19,column:3}},loc:{start:{line:19,column:11},end:{line:21,column:3}},line:19}},branchMap:{0:{loc:{start:{line:15,column:11},end:{line:17,column:16}},type:"cond-expr",locations:[{start:{line:16,column:8},end:{line:16,column:15}},{start:{line:17,column:8},end:{line:17,column:16}}],line:15},1:{loc:{start:{line:15,column:11},end:{line:15,column:59}},type:"binary-expr",locations:[{start:{line:15,column:11},end:{line:15,column:32}},{start:{line:15,column:36},end:{line:15,column:59}}],line:15},2:{loc:{start:{line:20,column:80},end:{line:20,column:108}},type:"cond-expr",locations:[{start:{line:20,column:92},end:{line:20,column:101}},{start:{line:20,column:104},end:{line:20,column:108}}],line:20}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dcca71b170396674c7f63c560f37a8434b740873"});var actualCoverage=coverage[path];return cov_1r04oom6oe=function(){return actualCoverage},actualCoverage}cov_1r04oom6oe();var dbNotificationCss=(cov_1r04oom6oe().s[0]++,':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}.cmp-notification{background-color:#282d37;padding:1rem;box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-bottom:1rem}section[data-variant=hovering] .cmp-notification{background-color:#fff}section[data-variant=alert] .cmp-notification{color:#fff}section[data-variant=hovering] .cmp-notification{border-radius:0.5rem;border:2px solid transparent;padding:0.875rem 1rem}.cmp-notification>em{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-notification[data-type=success]{background-color:#508b1b}section[data-variant=hovering] .cmp-notification[data-type=success]{border-color:#508b1b}.cmp-notification[data-type=warning]{background-color:#f75f00}section[data-variant=hovering] .cmp-notification[data-type=warning]{border-color:#f75f00}.cmp-notification[data-type=error]{background-color:#ec0016}section[data-variant=hovering] .cmp-notification[data-type=error]{border-color:#ec0016}.cmp-notification[data-type=informative]{background-color:#0087b9}section[data-variant=hovering] .cmp-notification[data-type=informative]{border-color:#0087b9}.cmp-notification[data-icon],.cmp-notification[data-icon-before],.cmp-notification[data-icon-after]{display:flex;align-items:center}.cmp-notification[data-icon]::before,.cmp-notification[data-icon-before]::before{--icon-margin-right:0.625rem}.cmp-notification[data-icon-after]{justify-content:space-between}.cmp-notification[data-icon-after]::after{--icon-margin-left:0.625rem}*[slot=prenotification]{padding-right:10px}*[slot=postnotification]{float:right}');cov_1r04oom6oe().s[1]++;var DbNotification=function(){function DbNotification(hostRef){cov_1r04oom6oe().f[0]++,cov_1r04oom6oe().s[2]++,Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.h)(this,hostRef),cov_1r04oom6oe().s[3]++,this.role=this.getRole()}var _proto=DbNotification.prototype;return _proto.getRole=function getRole(){return cov_1r04oom6oe().f[1]++,cov_1r04oom6oe().s[4]++,cov_1r04oom6oe().b[1][0]++,"error"===this.type||(cov_1r04oom6oe().b[1][1]++,"warning"===this.type)?(cov_1r04oom6oe().b[0][0]++,"alert"):(cov_1r04oom6oe().b[0][1]++,"status")},_proto.render=function render(){return cov_1r04oom6oe().f[2]++,cov_1r04oom6oe().s[5]++,Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("div",{class:"cmp-notification",role:this.role,"data-type":this.type?(cov_1r04oom6oe().b[2][0]++,this.type):(cov_1r04oom6oe().b[2][1]++,null)},Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("slot",{name:"prenotification"}),Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("slot",null),Object(_index_7b41cb22_js__WEBPACK_IMPORTED_MODULE_0__.f)("slot",{name:"postnotification"}))},DbNotification}();cov_1r04oom6oe().s[6]++,DbNotification.style=dbNotificationCss}}]);