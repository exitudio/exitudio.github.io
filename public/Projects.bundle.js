webpackJsonp([1],{240:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(5),u=r(l),c=o(21),s=(r(c),o(252)),f=r(s);o(254);var d=o(98),b=r(d),m=o(56),y=(r(m),o(96),function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),p(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.default.createElement("div",{className:"container"},u.default.createElement("hr",null),u.default.createElement("h1",null,"Projects"),u.default.createElement("hr",null),u.default.createElement("div",{className:"port-wrapper",onMouseEnter:this.onMouseEnter},b.default.map(function(e,t){return u.default.createElement(f.default,{key:t,projectTypeData:e,groupId:t})})))}}]),t}(u.default.Component));t.default=y},252:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=function e(t,o,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,o,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0},c=o(5),s=r(c),f=o(21),d=(r(f),o(100)),b=r(d),m=o(253),y=r(m),g=o(96),h=o(99),w=o(56),v=r(w),O=function(e){function t(){var e,o,r,i;n(this,t);for(var p=arguments.length,l=Array(p),u=0;u<p;u++)l[u]=arguments[u];return o=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.tellGroupAmPlaying=function(e){r.lastItem&&r.lastItem.stopPlayVideo(),r.lastItem=e},r.toggleGroup=function(){v.default.dispatch((0,g.toggleGroup)(r.props.groupId))},r.updatedStore=function(){var e=v.default.getState().projectGroup[r.props.groupId].isOpen;v.default.getState().stateUpdateType!==w.GROUP&&void 0!==v.default.getState().stateUpdateType||(!e||r.state.collapseState!==b.default.CLOSED&&r.state.collapseState!==b.default.CLOSING?(!e&&r.state.collapseState===b.default.OPEN||r.state.collapseState===b.default.OPENING)&&r.setState({collapseState:b.default.CLOSING}):r.setState({collapseState:b.default.OPENING}))},i=o,a(r,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setCollapseElement",this).call(this,this.projectGroup),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this),this.updatedStore()}},{key:"componentWillReceiveProps",value:function(e){this.updatedStore()}},{key:"componentWillUnmount",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillUnmount",this).call(this)}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"group-wrapper"},s.default.createElement("a",{onClick:this.toggleGroup,style:{cursor:"pointer",width:"100%",display:"block"}},s.default.createElement("h2",{style:{display:"inline"}},this.props.projectTypeData.type),s.default.createElement("div",{className:"more-less-text"},this.moreSign)),s.default.createElement("div",{ref:function(t){e.projectGroup=t},style:this.animateStyle,className:"project-group"},this.props.projectTypeData.data.map(function(t,o){return t.link.split("watch?")[1],s.default.createElement(y.default,p({},t,{projectId:o,groupId:e.props.groupId,key:o}))})))}},{key:"moreSign",get:function(){return this.state.collapseState===b.default.CLOSED||this.state.collapseState===b.default.CLOSING?"+":"-"}}]),t}(b.default),j=function(e){return e};t.default=(0,h.connect)(j)(O)},253:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(5),u=r(l),c=o(21),s=(r(c),o(56)),f=r(s),d=o(96),b=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.updatedItem=function(){var e=f.default.getState(),t=e.projectGroup[o.props.groupId].data[o.props.projectId];o.isForceOpenNewTab?(t&&e.stateUpdateType===s.PROJECT&&window.open(o.link,"_blank"),o.isPlayVideo=t):!o.isPlayVideo&&t?o.playVideo():o.isPlayVideo&&!t&&o.stopVideo(),f.default.getState().projectGroup[o.props.groupId].isOpen&&o.imageChild&&(o.imageChild.src=o.props.image)},o.playVideo=function(){o.isPlayVideo=!0,o.forceUpdate()},o.stopVideo=function(){o.isPlayVideo=!1,o.forceUpdate(),o.isNeedImageSrc=!0},o.onClick=function(){f.default.dispatch((0,d.selectProject)(o.props.groupId,o.props.projectId))},o.isPlayVideo=!1,o.isForceOpenNewTab=!1,o.isNeedImageSrc=!1,o.link=o.props.link,-1==o.link.indexOf("youtube")?o.isForceOpenNewTab=!0:o.link+="?autoplay=1",f.default.subscribe(o.updatedItem),o}return i(t,e),p(t,[{key:"componentDidMount",value:function(){this.updatedItem()}},{key:"render",value:function(){var e=this,t=void 0;return t=this.isPlayVideo?u.default.createElement("iframe",{className:"video",src:this.link,frameBorder:0,allowFullScreen:"allowFullScreen"}):u.default.createElement("div",{className:"video",onClick:this.onClick,style:{backgroundColor:"#000"}},u.default.createElement("img",{ref:function(t){return e.imageChild=t},src:this.isNeedImageSrc?this.props.image:"",className:"image"})),u.default.createElement("div",{className:"port-item"},t,u.default.createElement("div",{className:"description"},this.props.name))}}]),t}(u.default.Component);t.default=b},254:function(e,t,o){var r=o(255);"string"==typeof r&&(r=[[e.i,r,""]]),o(95)(r,{}),r.locals&&(e.exports=r.locals)},255:function(e,t,o){t=e.exports=o(94)(),t.push([e.i,'.port-wrapper{float:left;width:100%;-webkit-perspective:500px;perspective:500px}.port-wrapper .more-less-text{font-size:30px;margin-left:10px;display:inline}.port-wrapper .group-wrapper{margin-top:40px;border-bottom:1px solid #eee}.port-wrapper .group-wrapper .project-group{width:100%;margin:20px 0 50px}.port-wrapper .group-wrapper .project-group .port-item{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:20px 10px;float:left}.port-wrapper .group-wrapper .project-group .port-item .video{cursor:pointer;cursor:hand;position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;float:left;height:200px;padding:0;text-align:center}.port-wrapper .group-wrapper .project-group .port-item .video .image{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.port-wrapper .group-wrapper .project-group .port-item .description{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;float:left;padding:0 10;color:#666}.port-item:after,.port-item:before,.project-group:after{display:table;content:" ";clear:both}@media (min-width:550px){.port-wrapper .group-wrapper .project-group .port-item{width:50%}}@media (min-width:992px){.port-wrapper .group-wrapper .project-group .port-item{width:25%}}',""])}});