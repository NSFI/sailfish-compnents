(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1375:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=_interopRequireDefault(r(0)),o=_interopRequireDefault(r(6)),i=_interopRequireDefault(r(1)),a=_interopRequireDefault(r(1363)),l=r(1376),c=_interopRequireDefault(r(1377));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _construct(e,n,r){return(_construct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var t=[null];t.push.apply(t,n);var o=new(Function.bind.apply(e,t));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _toConsumableArray(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _possibleConstructorReturn(e,n){return!n||"object"!==_typeof(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _defineProperty(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var s=function(e){function Canvas(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Canvas),(n=_possibleConstructorReturn(this,_getPrototypeOf(Canvas).call(this,e))).playerId="".concat(parseInt(1e9*Math.random()).toString(36)),n.document=n.props.children.match(/([^]*)\n?(```[^]+```)/),n.description=(0,a.default)(n.document[1]),n.source=n.document[2].match(/```(.*)\n?([^]+)```/),n.state={showBlock:!1},n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}(Canvas,t.default.Component),function(e,n,r){n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r)}(Canvas,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"blockControl",value:function(){this.setState({showBlock:!this.state.showBlock})}},{key:"renderSource",value:function(e){var n=this;r.e(13).then(r.t.bind(null,1392,7)).then(function(e){var r=["context","React","ReactDOM"],i=[n,t.default,o.default];for(var a in e)r.push(a),i.push(e[a]);return{args:r,argv:i}}).then(function(r){var t,o=r.args,i=r.argv;t=/class.*extends React.Component/.test(e)?(0,l.transform)("\n        ".concat(e,"\n        ReactDOM.render(<Demo {...context.props} />, \n        document.getElementById('").concat(n.playerId,"'))\n      "),{presets:["react","stage-1"]}).code:(0,l.transform)("\n        class Demo extends React.Component {\n          ".concat(e,"\n        }\n        ReactDOM.render(<Demo {...context.props} />, \n        document.getElementById('").concat(n.playerId,"'))\n      "),{presets:["react","stage-1"]}).code,o.push(t),_construct(Function,_toConsumableArray(o)).apply(null,i),n.source[2]=e}).catch(function(e){0})}},{key:"render",value:function(){var e=this;return t.default.createElement("div",{className:"demo-block demo-box demo-".concat(this.props.name)},t.default.createElement("div",{className:"source",id:this.playerId}),this.state.showBlock&&t.default.createElement("div",{className:"meta"},this.description&&t.default.createElement("div",{ref:"description",className:"description",dangerouslySetInnerHTML:{__html:this.description}}),t.default.createElement(c.default,{value:this.source[2],onChange:function(n){return e.renderSource(n)}})),t.default.createElement("div",{className:"demo-block-control",onClick:this.blockControl.bind(this)},this.state.showBlock?t.default.createElement("span",null,t.default.createElement("i",{className:"el-icon-caret-top"}),this.props.locale.hide):t.default.createElement("span",null,t.default.createElement("i",{className:"el-icon-caret-bottom"}),this.props.locale.show)))}}]),Canvas}();n.default=s,_defineProperty(s,"propTypes",{locale:i.default.object,name:i.default.string,children:i.default.node}),_defineProperty(s,"defaultProps",{locale:{hide:"隐藏代码",show:"显示代码"}})},1377:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};t.get||t.set?Object.defineProperty(n,r,t):n[r]=e[r]}return n.default=e,n}(r(0)),o=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(1349));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _possibleConstructorReturn(e,n){return!n||"object"!==_typeof(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}r(1378),r(1381),r(1384),r(1385),r(1387);var a=function(e){function Editor(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Editor),_possibleConstructorReturn(this,_getPrototypeOf(Editor).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}(Editor,t.Component),function(e,n,r){n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r)}(Editor,[{key:"componentDidMount",value:function(){var e=this,n=this.props,r=n.onChange,t=n.value;this.cm=(0,i.default)(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(t),this.cm.on("changes",function(n){r&&(clearTimeout(e.timeout),e.timeout=setTimeout(function(){r(n.getValue())},300))})}},{key:"render",value:function(){var e=this;return t.default.createElement("div",{className:"editor",ref:function(n){return e.editor=n}})}}]),Editor}();n.default=a,a.propTypes={onChange:o.default.func,value:o.default.string}},1385:function(e,n,r){var t=r(1386);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(8)(t,o);t.locals&&(e.exports=t.locals)},1386:function(e,n,r){(e.exports=r(7)(!1)).push([e.i,"/* BASICS */\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n/* PADDING */\n.CodeMirror-lines {\n  padding: 4px 0;\n  /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px;\n  /* Horizontal padding of content */\n}\n.CodeMirror-scrollbar-filler,\n.CodeMirror-gutter-filler {\n  background-color: white;\n  /* The little square between H and V scrollbars */\n}\n/* GUTTER */\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n.CodeMirror-guttermarker {\n  color: black;\n}\n.CodeMirror-guttermarker-subtle {\n  color: #999;\n}\n/* CURSOR */\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  50% {\n    background-color: transparent;\n  }\n}\n@-webkit-keyframes blink {\n  50% {\n    background-color: transparent;\n  }\n}\n@keyframes blink {\n  50% {\n    background-color: transparent;\n  }\n}\n/* Can style cursor different in overwrite (non-insert) mode */\n.cm-tab {\n  display: inline-block;\n  text-decoration: inherit;\n}\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -50px;\n  bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n}\n/* DEFAULT THEME */\n.cm-s-default .cm-header {\n  color: blue;\n}\n.cm-s-default .cm-quote {\n  color: #090;\n}\n.cm-negative {\n  color: #d44;\n}\n.cm-positive {\n  color: #292;\n}\n.cm-header,\n.cm-strong {\n  font-weight: bold;\n}\n.cm-em {\n  font-style: italic;\n}\n.cm-link {\n  text-decoration: underline;\n}\n.cm-strikethrough {\n  text-decoration: line-through;\n}\n.cm-s-default .cm-keyword {\n  color: #708;\n}\n.cm-s-default .cm-atom {\n  color: #219;\n}\n.cm-s-default .cm-number {\n  color: #164;\n}\n.cm-s-default .cm-def {\n  color: #00f;\n}\n.cm-s-default .cm-variable-2 {\n  color: #05a;\n}\n.cm-s-default .cm-variable-3,\n.cm-s-default .cm-type {\n  color: #085;\n}\n.cm-s-default .cm-comment {\n  color: #a50;\n}\n.cm-s-default .cm-string {\n  color: #a11;\n}\n.cm-s-default .cm-string-2 {\n  color: #f50;\n}\n.cm-s-default .cm-meta {\n  color: #555;\n}\n.cm-s-default .cm-qualifier {\n  color: #555;\n}\n.cm-s-default .cm-builtin {\n  color: #30a;\n}\n.cm-s-default .cm-bracket {\n  color: #997;\n}\n.cm-s-default .cm-tag {\n  color: #170;\n}\n.cm-s-default .cm-attribute {\n  color: #00c;\n}\n.cm-s-default .cm-hr {\n  color: #999;\n}\n.cm-s-default .cm-link {\n  color: #00c;\n}\n.cm-s-default .cm-error {\n  color: #f00;\n}\n.cm-invalidchar {\n  color: #f00;\n}\n.CodeMirror-composing {\n  border-bottom: 2px solid;\n}\n/* Default styles for common addons */\ndiv.CodeMirror span.CodeMirror-matchingbracket {\n  color: #0b0;\n}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {\n  color: #a22;\n}\n.CodeMirror-matchingtag {\n  background: rgba(255, 150, 0, 0.3);\n}\n.CodeMirror-activeline-background {\n  background: #e8f2ff;\n}\n/* STOP */\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n.CodeMirror-scroll {\n  overflow: scroll !important;\n  /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px;\n  margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none;\n  /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar,\n.CodeMirror-hscrollbar,\n.CodeMirror-scrollbar-filler,\n.CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0;\n  left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0;\n  bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0;\n  bottom: 0;\n}\n.CodeMirror-gutters {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection {\n  background-color: transparent;\n}\n.CodeMirror-gutter-wrapper ::-moz-selection {\n  background-color: transparent;\n}\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px;\n  /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0;\n  border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 0;\n}\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px;\n  /* Force widget margins to stay inside of the container */\n}\n.CodeMirror-rtl pre {\n  direction: rtl;\n}\n.CodeMirror-code {\n  outline: none;\n}\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre {\n  position: static;\n}\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n.CodeMirror-selected {\n  background: #d9d9d9;\n}\n.CodeMirror-focused .CodeMirror-selected {\n  background: #d7d4f0;\n}\n.CodeMirror-crosshair {\n  cursor: crosshair;\n}\n.CodeMirror-line::selection,\n.CodeMirror-line > span::selection,\n.CodeMirror-line > span > span::selection {\n  background: #d7d4f0;\n}\n.CodeMirror-line::-moz-selection,\n.CodeMirror-line > span::-moz-selection,\n.CodeMirror-line > span > span::-moz-selection {\n  background: #d7d4f0;\n}\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, 0.4);\n}\n/* Used to force a border model for a node */\n.cm-force-border {\n  padding-right: 0.1px;\n}\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n/* See issue #2901 */\n.cm-tab-wrap-hack:after {\n  content: '';\n}\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext {\n  background: none;\n}\n",""])},1387:function(e,n,r){var t=r(1388);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(8)(t,o);t.locals&&(e.exports=t.locals)},1388:function(e,n,r){(e.exports=r(7)(!1)).push([e.i,'.CodeMirror {\n  font-family: "source-code-pro", Menlo, "Courier New", Consolas, monospace;\n  font-size: 13px;\n  line-height: 20px;\n  color: #484848;\n  padding: 15px 0;\n  border-right: 1px solid #eaeefb;\n  z-index: 0;\n  height: auto;\n  background: transparent;\n}\n.CodeMirror .CodeMirror-gutters {\n  background: transparent;\n  border-right: 0;\n  z-index: 0;\n}\n.CodeMirror .CodeMirror-selected {\n  background: #e6effb;\n}\n.CodeMirror pre {\n  padding: 0 25px;\n}\n.CodeMirror span.cm-keyword {\n  color: #1990b8;\n}\n.CodeMirror span.cm-atom {\n  color: #c92c2c;\n}\n.CodeMirror span.cm-number {\n  color: #c92c2c;\n}\n.CodeMirror span.cm-variable {\n  color: black;\n}\n.CodeMirror span.cm-variable-2 {\n  color: #0000c0;\n}\n.CodeMirror span.cm-variable-3 {\n  color: #0000c0;\n}\n.CodeMirror span.cm-property {\n  color: black;\n}\n.CodeMirror span.cm-operator {\n  color: black;\n}\n.CodeMirror span.cm-comment {\n  color: #7d8b99;\n}\n.CodeMirror span.cm-string {\n  color: #2f9c0a;\n}\n.CodeMirror span.cm-string-2 {\n  color: #2f9c0a;\n}\n.CodeMirror span.cm-link {\n  color: #c92c2c;\n}\n',""])},1389:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=_interopRequireDefault(r(0)),o=_interopRequireDefault(r(427));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperty(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r(1390);var i=function(e){for(var n=(e=document.getElementById(e)).offsetTop,r=e.offsetParent;null!==r;)n+=r.offsetTop,r=r.offsetParent;return n},a=function(e){for(var n=[],r=e.parentNode.firstChild;r;r=r.nextSibling)1===r.nodeType&&r!==e&&n.push(r);return n},l=function(e){function Slider(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Slider),_defineProperty(_assertThisInitialized(_assertThisInitialized(n=function(e,n){return!n||"object"!==_typeof(n)&&"function"!=typeof n?_assertThisInitialized(e):n}(this,_getPrototypeOf(Slider).call(this,e)))),"handleSliderClick",function(e,r){e&&e.preventDefault();var t=document.querySelector(".fish-header").offsetHeight;n.scrollContainer.scrollTop=document.getElementById(r).offsetTop+t}),_defineProperty(_assertThisInitialized(_assertThisInitialized(n)),"handleSliderActiveCheck",function(){var e=n.state.anchors;if(!(e.length<2)){var r=document.querySelector(".fish-header").offsetHeight,t=e.map(function(e){return{id:e.id,offset:Math.abs(i(e.id)-n.scrollContainer.scrollTop-r)}}).reduce(function(e,n){return e.offset<n.offset?e:n}),o=n.refs[t.id];o.classList.add("active"),a(o).map(function(e){return e.classList.remove("active")})}}),n.state={anchors:[]},n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}(Slider,t.default.Component),function(e,n,r){n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r)}(Slider,[{key:"componentDidMount",value:function(){var e=Array.from(document.querySelectorAll("h2")).map(function(e){return{id:e.id,name:e.innerText}});this.setState({anchors:e}),this.scrollContainer=document.documentElement,window.addEventListener("scroll",this.handleSliderActiveCheck),this.handleSliderActiveCheck()}},{key:"componentDidUpdate",value:function(){this.handleSliderActiveCheck()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleSliderActiveCheck)}},{key:"render",value:function(){var e=this,n=this.state.anchors,r=n.length>1?n.map(function(n){return t.default.createElement("li",{title:n.id,key:n.id,ref:n.id},t.default.createElement("a",{onClick:function(r){return e.handleSliderClick(r,n.id)}},n.name))}):null;return t.default.createElement(o.default,{offsetTop:145},t.default.createElement("ul",{className:"u-slider-anchors",ref:"menu"},r))}}]),Slider}();n.default=l},1390:function(e,n,r){var t=r(1391);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(8)(t,o);t.locals&&(e.exports=t.locals)},1391:function(e,n,r){(e.exports=r(7)(!1)).push([e.i,".slider-container {\n  position: absolute;\n  top: 110px;\n  right: -180px;\n}\n.u-slider-anchors {\n  width: 150px;\n  font-size: 12px;\n  margin: 0 0 16px 30px;\n  border-left: 1px solid #ebedf0;\n}\n.u-slider-anchors a {\n  padding-left: 16px;\n  display: block;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #314659;\n  border-left: 1px solid #0000;\n  margin-left: -1px;\n}\n.u-slider-anchors li {\n  position: relative;\n  left: -1px;\n  line-height: 1.5;\n  list-style: none !important;\n  margin-left: 0 !important;\n  padding-left: 0 !important;\n  text-underline: none;\n  cursor: pointer;\n}\n.u-slider-anchors li:not(:last-child) {\n  margin-bottom: 4px;\n}\n.u-slider-anchors li.active {\n  border-left: 1px solid #3d8fd1;\n}\n.u-slider-anchors li.active a {\n  color: #3d8fd1;\n}\n",""])},1406:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=_interopRequireDefault(r(0)),o=_interopRequireDefault(r(6)),i=_interopRequireDefault(r(1363)),a=_interopRequireDefault(r(1374)),l=_interopRequireDefault(r(1375)),c=_interopRequireDefault(r(1389));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _possibleConstructorReturn(e,n){return!n||"object"!==_typeof(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var s=function(e){function Markdown(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Markdown),(n=_possibleConstructorReturn(this,_getPrototypeOf(Markdown).call(this,e))).components=new Map,n.renderer=new i.default.Renderer,n.renderer.table=function(e,n){return'<table class="grid"><thead>'.concat(e,"</thead><tbody>").concat(n,"</tbody></table>")},n.renderer.listitem=function(e){return'<li class="md-listitem">'+e+"</li>\n"},n.renderer.paragraph=function(e){return'<p class="md-paragraph">'+e+"</p>\n"},n.renderer.heading=function(e,n,r){if(this.options.headerIds){var t=e;if(1===n){var o=e.replace(/【(.+)】/,"");t=o===e?e:o,e=e.replace(/【(.+)】/,function(e){return'<div class="md-owner"><div class="owner-title"><i class="fishdicon fishdicon-user-line"></i></div><ul class="owner-list">'.concat(e.slice(1,-1).split("|").map(function(e){return'<li class="item">'.concat(e,"</li>")}).join(""),"</ul></div>")})}return"<h"+n+' id="'+t+'" class="md-heading">'+e+"</h"+n+">\n"}return"<h"+n+' class="md-heading" >'+e+"</h"+n+">\n"},n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}(Markdown,t.default.Component),function(e,n,r){n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r)}(Markdown,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"renderDOM",value:function(){var e=!0,n=!1,r=void 0;try{for(var t,i=this.components[Symbol.iterator]();!(e=(t=i.next()).done);e=!0){var l=_slicedToArray(t.value,2),c=l[0],s=l[1],u=document.getElementById(c);u instanceof HTMLElement&&o.default.render(s,u)}}catch(e){n=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}a.default.highlightAll()}},{key:"render",value:function(){var e=this,n=this.document();if("string"==typeof n){this.components.clear();var r=(0,i.default)(n.replace(/:::\s?demo\s?([^]+?):::/g,function(n,r,o){var i=o.toString(36);return e.components.set(i,t.default.createElement(l.default,Object.assign({name:e.constructor.name.toLowerCase()},e.props),r)),"<div id=".concat(i,' class="demo-container"></div>')}),{renderer:this.renderer});return t.default.createElement("div",null,t.default.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),t.default.createElement("div",{className:"slider-container"},t.default.createElement(c.default,null)))}return t.default.createElement("span",null)}}]),Markdown}();n.default=s}}]);