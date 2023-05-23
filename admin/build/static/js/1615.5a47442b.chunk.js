"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1615,2695,7545,635,2161,1725,7993,9687,1035],{3404:function(e,r,t){t.d(r,{Z:function(){return B}});var o=t(93433),n=t(29439),a=t(4942),i=t(87462),l=t(63366),s=t(47313),c=(t(96214),t(83061)),u=t(21921),d=t(17592),p=t(77342),f=t(61113),m=t(17551),v=t(54750),g=t(46417),Z=(0,v.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(38743),h=(0,d.ZP)(x.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,m._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(Z)({width:24,height:16});var w=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(h,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(b,{ownerState:r})}))})},S=t(77430),C=t(32298);function R(e){return(0,C.Z)("MuiBreadcrumbs",e)}var M=(0,S.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],N=(0,d.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(M.li),r.li),r.root]}})({}),j=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function A(e,r,t,o){return e.reduce((function(n,a,i){return i<e.length-1?n=n.concat(a,(0,g.jsx)(k,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(i))):n.push(a),n}),[])}var B=s.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,d=t.className,f=t.component,m=void 0===f?"nav":f,v=t.expandText,Z=void 0===v?"Show path":v,x=t.itemsAfterCollapse,h=void 0===x?1:x,b=t.itemsBeforeCollapse,S=void 0===b?1:b,C=t.maxItems,M=void 0===C?8:C,k=t.separator,B=void 0===k?"/":k,D=(0,l.Z)(t,y),_=s.useState(!1),T=(0,n.Z)(_,2),P=T[0],z=T[1],I=(0,i.Z)({},t,{component:m,expanded:P,expandText:Z,itemsAfterCollapse:h,itemsBeforeCollapse:S,maxItems:M,separator:B}),L=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},R,r)}(I),$=s.useRef(null),E=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:L.li,children:e},"child-".concat(r))}));return(0,g.jsx)(N,(0,i.Z)({ref:r,component:m,color:"text.secondary",className:(0,c.Z)(L.root,d),ownerState:I},D,{children:(0,g.jsx)(j,{className:L.ol,ref:$,ownerState:I,children:A(P||M&&E.length<=M?E:function(e){return S+h>=e.length?e:[].concat((0,o.Z)(e.slice(0,S)),[(0,g.jsx)(w,{"aria-label":Z,onClick:function(){z(!0);var e=$.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-h,e.length)))}(E),L.separator,B,I)})}))}))},4117:function(e,r,t){t.d(r,{Z:function(){return g}});var o=t(63366),n=t(87462),a=t(47313),i=t(83061),l=t(21921),s=t(17592),c=t(77342),u=t(77430),d=t(32298);function p(e){return(0,d.Z)("MuiDialogActions",e)}(0,u.Z)("MuiDialogActions",["root","spacing"]);var f=t(46417),m=["className","disableSpacing"],v=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,!t.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,n.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),g=a.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiDialogActions"}),a=t.className,s=t.disableSpacing,u=void 0!==s&&s,d=(0,o.Z)(t,m),g=(0,n.Z)({},t,{disableSpacing:u}),Z=function(e){var r=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(t,p,r)}(g);return(0,f.jsx)(v,(0,n.Z)({className:(0,i.Z)(Z.root,a),ownerState:g,ref:r},d))}))},96467:function(e,r,t){t.d(r,{Z:function(){return x}});var o=t(4942),n=t(63366),a=t(87462),i=t(47313),l=t(83061),s=t(21921),c=t(17592),u=t(77342),d=t(77430),p=t(32298);function f(e){return(0,p.Z)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var m=t(93174),v=t(46417),g=["className","dividers"],Z=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.dividers&&r.dividers]}})((function(e){var r=e.theme,t=e.ownerState;return(0,a.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((r.vars||r).palette.divider),borderBottom:"1px solid ".concat((r.vars||r).palette.divider)}:(0,o.Z)({},".".concat(m.Z.root," + &"),{paddingTop:0}))})),x=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiDialogContent"}),o=t.className,i=t.dividers,c=void 0!==i&&i,d=(0,n.Z)(t,g),p=(0,a.Z)({},t,{dividers:c}),m=function(e){var r=e.classes,t={root:["root",e.dividers&&"dividers"]};return(0,s.Z)(t,f,r)}(p);return(0,v.jsx)(Z,(0,a.Z)({className:(0,l.Z)(m.root,o),ownerState:p,ref:r},d))}))},33604:function(e,r,t){var o=t(87462),n=t(63366),a=t(47313),i=t(83061),l=t(21921),s=t(61113),c=t(17592),u=t(77342),d=t(93174),p=t(63909),f=t(46417),m=["className","id"],v=(0,c.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,r){return r.root}})({padding:"16px 24px",flex:"0 0 auto"}),g=a.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiDialogTitle"}),s=t.className,c=t.id,g=(0,n.Z)(t,m),Z=t,x=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},d.a,r)}(Z),h=a.useContext(p.Z).titleId,b=void 0===h?c:h;return(0,f.jsx)(v,(0,o.Z)({component:"h2",className:(0,i.Z)(x.root,s),ownerState:Z,ref:r,variant:"h6",id:b},g))}));r.Z=g},93174:function(e,r,t){t.d(r,{a:function(){return a}});var o=t(77430),n=t(32298);function a(e){return(0,n.Z)("MuiDialogTitle",e)}var i=(0,o.Z)("MuiDialogTitle",["root"]);r.Z=i},59023:function(e,r,t){t.d(r,{$:function(){return a}});var o=t(66797),n=t(26675);function a(e,r){return void 0===r&&(r={}),(0,n.B)(e,(0,o.pi)({delimiter:"."},r))}},26675:function(e,r,t){t.d(r,{B:function(){return i}});function o(e){return e.toLowerCase()}var n=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function i(e,r){void 0===r&&(r={});for(var t=r.splitRegexp,i=void 0===t?n:t,s=r.stripRegexp,c=void 0===s?a:s,u=r.transform,d=void 0===u?o:u,p=r.delimiter,f=void 0===p?" ":p,m=l(l(e,i,"$1\0$2"),c,"\0"),v=0,g=m.length;"\0"===m.charAt(v);)v++;for(;"\0"===m.charAt(g-1);)g--;return m.slice(v,g).split("\0").map(d).join(f)}function l(e,r,t){return r instanceof RegExp?e.replace(r,t):r.reduce((function(e,r){return e.replace(r,t)}),e)}},73709:function(e,r,t){t.d(r,{o:function(){return a}});var o=t(66797),n=t(59023);function a(e,r){return void 0===r&&(r={}),(0,n.$)(e,(0,o.pi)({delimiter:"-"},r))}}}]);