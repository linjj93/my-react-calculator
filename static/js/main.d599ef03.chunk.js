(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Header__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Display__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_Buttons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11),App=function(_Component){function App(){var _getPrototypeOf2,_this;Object(C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={display:"0",evaluation:null,currentNumberIsFloat:!1,restrictions:{integer:["("],"+":["+","\xd7","\xf7",")"],"-":["-","+","\xd7","\xf7",")"],"\xd7":["\xd7","+","\xf7",")"],"\xf7":["\xf7","+","\xd7",")"],"(":["+","-","\xd7","\xf7",")"],")":["integer"],".":["+","-","\xd7","\xf7","(",")","."]}},_this.buttonPress=function(e){if("0"===_this.state.display)"+"===e.textContent||"-"===e.textContent||"\xd7"===e.textContent||"\xf7"===e.textContent?_this.setState(function(t){return{display:t.display.toString()+e.textContent.toString()}}):_this.setState({display:e.textContent,evaluation:null,currentNumberIsFloat:!1});else if(_this.state.evaluation)"+"===e.textContent||"-"===e.textContent||"\xd7"===e.textContent||"\xf7"===e.textContent?_this.setState({display:_this.state.evaluation.slice(2)+e.textContent,evaluation:null,currentNumberIsFloat:!1}):_this.setState({display:e.textContent,evaluation:null,currentNumberIsFloat:!1});else if(!_this.state.evaluation){var t=_this.state.display[_this.state.display.length-1];if(isNaN(t)){if(_this.state.restrictions[t].includes(e.textContent))return;if(")"===t&&"integer"===e.className)return;_this.setState(function(t){return{display:t.display.toString()+e.textContent.toString()}})}else{if(_this.state.restrictions.integer.includes(e.textContent))return;"."===e.textContent?_this.decimalPress():_this.setState(function(t){return{display:t.display.toString()+e.textContent.toString()}})}}"+"!==e.textContent&&"-"!==e.textContent&&"\xd7"!==e.textContent&&"\xf7"!==e.textContent||_this.setState({currentNumberIsFloat:!1})},_this.decimalPress=function(){_this.state.evaluation&&_this.setState({display:"0",evaluation:null,currentNumberIsFloat:!0}),_this.state.currentNumberIsFloat||_this.setState(function(e){return{display:e.display.toString()+".",currentNumberIsFloat:!0}})},_this.resetDisplay=function(){_this.setState({zeroIsPlaceholder:!0,display:"0",evaluation:null,currentNumberIsFloat:!1})},_this.delete=function(){var e=_this.state.display;if(isNaN(e[e.length-1]))for(var t=e.length;t>=0;t-=1)isNaN(e.slice(0,e.length-1))||(e.includes(".")?_this.setState({currentNumberIsFloat:!0}):_this.setState({currentNumberIsFloat:!1})),isNaN(e[t])&&(e.slice(t+1,e.length-1).includes(".")?_this.setState({currentNumberIsFloat:!0}):_this.setState({currentNumberIsFloat:!1}));"."===e[e.length-1]&&_this.setState({currentNumberIsFloat:!1}),1===e.length?_this.setState({zeroIsPlaceholder:!0,display:"0"}):_this.setState({display:e.toString().slice(0,e.toString().length-1)}),_this.setState({evaluation:null})},_this.evaluateResult=function(){var answer=_this.state.display;(answer.includes("\xd7")||answer.includes("\xf7"))&&(answer=answer.replace("\xd7","*"),answer=answer.replace("\xf7","/"));try{_this.setState({evaluation:"=  "+eval(answer)})}catch(err){alert("Invalid Calculation. Check for missing parentheses, or extra operators etc.")}},_this}return Object(C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(C_Users_linjj_Desktop_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,"Simple HTML Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,"Made with CSS Flexbox and ReactJS")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"noselect calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__.a,null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_7__.a,{display:this.state.display,evaluation:this.state.evaluation}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_8__.a,{press:this.buttonPress,reset:this.resetDisplay,delete:this.delete,evaluate:this.evaluateResult,decimal:this.decimalPress})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(e,t,s){"use strict";var a=s(0),_=s.n(a);t.a=function(e){return _.a.createElement("h1",null,e.name)}},function(e,t,s){"use strict";var a=s(1),_=s(2),n=s(4),r=s(3),i=s(5),l=s(0),o=s.n(l),c=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"display"},o.a.createElement("p",null,this.props.display),o.a.createElement("p",{className:"answer"},this.props.evaluation))}}]),t}(l.Component);t.a=c},function(e,t,s){"use strict";var a=s(1),_=s(2),n=s(4),r=s(3),i=s(5),l=s(0),o=s.n(l),c=function(e){function t(){var e,s;Object(a.a)(this,t);for(var _=arguments.length,i=new Array(_),l=0;l<_;l++)i[l]=arguments[l];return(s=Object(n.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={},s.buttonPress=function(e){s.props.press(e.target)},s.decimalPress=function(){s.props.decimal()},s.resetDisplay=function(){s.props.reset()},s.delete=function(){s.props.delete()},s.evaluateResult=function(){s.props.evaluate()},s}return Object(i.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"buttons"},o.a.createElement("div",{className:"buttons-1"},o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"1"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"4"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"7"),o.a.createElement("div",{onClick:this.resetDisplay.bind(this),className:"AC-btn last-row"},"AC")),o.a.createElement("div",{className:"buttons-2"},o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"2"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"5"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"8"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer last-row"},"0")),o.a.createElement("div",{className:"buttons-3"},o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"3"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"6"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"integer"},"9"),o.a.createElement("div",{onClick:this.decimalPress.bind(this),className:"last-row"},".")),o.a.createElement("div",{className:"buttons-4 operators"},o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"operator"},"+"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"operator"},"-"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"operator"},"\xd7"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"operator last-row"},"\xf7")),o.a.createElement("div",{className:"buttons-5 operators"},o.a.createElement("div",{onClick:this.delete.bind(this),className:"last-col"},"Del"),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"operator last-col"},"("),o.a.createElement("div",{onClick:this.buttonPress.bind(this),className:"operator last-col"},")"),o.a.createElement("div",{onClick:this.evaluateResult.bind(this),className:"equal-btn last-row"},"=")))}}]),t}(l.Component);t.a=c},function(e,t,s){e.exports=s(13)},function(e,t,s){"use strict";s.r(t);var a=s(0),_=s.n(a),n=s(7),r=s.n(n),i=s(8);s(18);r.a.render(_.a.createElement(i.a,null),document.getElementById("root"))},,,,,function(e,t,s){}],[[12,2,1]]]);
//# sourceMappingURL=main.d599ef03.chunk.js.map