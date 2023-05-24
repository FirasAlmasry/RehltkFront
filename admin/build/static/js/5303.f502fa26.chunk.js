"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5303],{3404:function(e,r,t){t.d(r,{Z:function(){return k}});var o=t(93433),a=t(29439),n=t(4942),i=t(87462),s=t(63366),l=t(47313),c=(t(96214),t(83061)),u=t(21921),d=t(17592),f=t(77342),m=t(61113),v=t(17551),p=t(54750),Z=t(46417),g=(0,p.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=t(38743),x=(0,d.ZP)(h.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,v._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,v._4)(r.palette.grey[600],.12)})})})),M=(0,d.ZP)(g)({width:24,height:16});var w=function(e){var r=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(x,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,Z.jsx)(M,{ownerState:r})}))})},D=t(77430),b=t(32298);function S(e){return(0,b.Z)("MuiBreadcrumbs",e)}var C=(0,D.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),R=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],y=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(C.li),r.li),r.root]}})({}),N=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),j=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,r,t,o){return e.reduce((function(a,n,i){return i<e.length-1?a=a.concat(n,(0,Z.jsx)(j,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(i))):a.push(n),a}),[])}var k=l.forwardRef((function(e,r){var t=(0,f.Z)({props:e,name:"MuiBreadcrumbs"}),n=t.children,d=t.className,m=t.component,v=void 0===m?"nav":m,p=t.expandText,g=void 0===p?"Show path":p,h=t.itemsAfterCollapse,x=void 0===h?1:h,M=t.itemsBeforeCollapse,D=void 0===M?1:M,b=t.maxItems,C=void 0===b?8:b,j=t.separator,k=void 0===j?"/":j,A=(0,s.Z)(t,R),B=l.useState(!1),X=(0,a.Z)(B,2),_=X[0],P=X[1],I=(0,i.Z)({},t,{component:v,expanded:_,expandText:g,itemsAfterCollapse:x,itemsBeforeCollapse:D,maxItems:C,separator:k}),z=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)}(I),L=l.useRef(null),Y=l.Children.toArray(n).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,Z.jsx)("li",{className:z.li,children:e},"child-".concat(r))}));return(0,Z.jsx)(y,(0,i.Z)({ref:r,component:v,color:"text.secondary",className:(0,c.Z)(z.root,d),ownerState:I},A,{children:(0,Z.jsx)(N,{className:z.ol,ref:L,ownerState:I,children:T(_||C&&Y.length<=C?Y:function(e){return D+x>=e.length?e:[].concat((0,o.Z)(e.slice(0,D)),[(0,Z.jsx)(w,{"aria-label":g,onClick:function(){P(!0);var e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-x,e.length)))}(Y),z.separator,k,I)})}))}))},73428:function(e,r,t){t.d(r,{Z:function(){return g}});var o=t(87462),a=t(63366),n=t(47313),i=t(83061),s=t(21921),l=t(17592),c=t(77342),u=t(70501),d=t(77430),f=t(32298);function m(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var v=t(46417),p=["className","raised"],Z=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),g=n.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),n=t.className,l=t.raised,u=void 0!==l&&l,d=(0,a.Z)(t,p),f=(0,o.Z)({},t,{raised:u}),g=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},m,r)}(f);return(0,v.jsx)(Z,(0,o.Z)({className:(0,i.Z)(g.root,n),elevation:u?8:void 0,ref:r,ownerState:f},d))}))},4117:function(e,r,t){t.d(r,{Z:function(){return Z}});var o=t(63366),a=t(87462),n=t(47313),i=t(83061),s=t(21921),l=t(17592),c=t(77342),u=t(77430),d=t(32298);function f(e){return(0,d.Z)("MuiDialogActions",e)}(0,u.Z)("MuiDialogActions",["root","spacing"]);var m=t(46417),v=["className","disableSpacing"],p=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,!t.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=n.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiDialogActions"}),n=t.className,l=t.disableSpacing,u=void 0!==l&&l,d=(0,o.Z)(t,v),Z=(0,a.Z)({},t,{disableSpacing:u}),g=function(e){var r=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(t,f,r)}(Z);return(0,m.jsx)(p,(0,a.Z)({className:(0,i.Z)(g.root,n),ownerState:Z,ref:r},d))}))},96467:function(e,r,t){t.d(r,{Z:function(){return h}});var o=t(4942),a=t(63366),n=t(87462),i=t(47313),s=t(83061),l=t(21921),c=t(17592),u=t(77342),d=t(77430),f=t(32298);function m(e){return(0,f.Z)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var v=t(93174),p=t(46417),Z=["className","dividers"],g=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.dividers&&r.dividers]}})((function(e){var r=e.theme,t=e.ownerState;return(0,n.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((r.vars||r).palette.divider),borderBottom:"1px solid ".concat((r.vars||r).palette.divider)}:(0,o.Z)({},".".concat(v.Z.root," + &"),{paddingTop:0}))})),h=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiDialogContent"}),o=t.className,i=t.dividers,c=void 0!==i&&i,d=(0,a.Z)(t,Z),f=(0,n.Z)({},t,{dividers:c}),v=function(e){var r=e.classes,t={root:["root",e.dividers&&"dividers"]};return(0,l.Z)(t,m,r)}(f);return(0,p.jsx)(g,(0,n.Z)({className:(0,s.Z)(v.root,o),ownerState:f,ref:r},d))}))},33604:function(e,r,t){var o=t(87462),a=t(63366),n=t(47313),i=t(83061),s=t(21921),l=t(61113),c=t(17592),u=t(77342),d=t(93174),f=t(63909),m=t(46417),v=["className","id"],p=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,r){return r.root}})({padding:"16px 24px",flex:"0 0 auto"}),Z=n.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiDialogTitle"}),l=t.className,c=t.id,Z=(0,a.Z)(t,v),g=t,h=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},d.a,r)}(g),x=n.useContext(f.Z).titleId,M=void 0===x?c:x;return(0,m.jsx)(p,(0,o.Z)({component:"h2",className:(0,i.Z)(h.root,l),ownerState:g,ref:r,variant:"h6",id:M},Z))}));r.Z=Z},93174:function(e,r,t){t.d(r,{a:function(){return n}});var o=t(77430),a=t(32298);function n(e){return(0,a.Z)("MuiDialogTitle",e)}var i=(0,o.Z)("MuiDialogTitle",["root"]);r.Z=i},35328:function(e,r,t){t(47313);var o=t(54750),a=t(46417);r.Z=(0,o.Z)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},88168:function(e,r,t){t(47313);var o=t(54750),a=t(46417);r.Z=(0,o.Z)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},51166:function(e,r,t){t.d(r,{Z:function(){return a}});var o=t(49294);function a(e){return(0,o.Z)({},e)}},98495:function(e,r,t){t.d(r,{Z:function(){return g}});var o=t(73149),a=t(7781),n=t(409),i=t(75377),s=t(48883),l=t(93601),c=t(51166),u=t(49294),d=t(5025),f=t(34800),m=1440,v=2520,p=43200,Z=86400;function g(e,r){return(0,f.Z)(1,arguments),function(e,r,t){var g,h;(0,f.Z)(2,arguments);var x=(0,o.j)(),M=null!==(g=null!==(h=null===t||void 0===t?void 0:t.locale)&&void 0!==h?h:x.locale)&&void 0!==g?g:s.Z;if(!M.formatDistance)throw new RangeError("locale must contain formatDistance property");var w=(0,a.Z)(e,r);if(isNaN(w))throw new RangeError("Invalid time value");var D,b,S=(0,u.Z)((0,c.Z)(t),{addSuffix:Boolean(null===t||void 0===t?void 0:t.addSuffix),comparison:w});w>0?(D=(0,l.Z)(r),b=(0,l.Z)(e)):(D=(0,l.Z)(e),b=(0,l.Z)(r));var C,R=(0,i.Z)(b,D),y=((0,d.Z)(b)-(0,d.Z)(D))/1e3,N=Math.round((R-y)/60);if(N<2)return null!==t&&void 0!==t&&t.includeSeconds?R<5?M.formatDistance("lessThanXSeconds",5,S):R<10?M.formatDistance("lessThanXSeconds",10,S):R<20?M.formatDistance("lessThanXSeconds",20,S):R<40?M.formatDistance("halfAMinute",0,S):R<60?M.formatDistance("lessThanXMinutes",1,S):M.formatDistance("xMinutes",1,S):0===N?M.formatDistance("lessThanXMinutes",1,S):M.formatDistance("xMinutes",N,S);if(N<45)return M.formatDistance("xMinutes",N,S);if(N<90)return M.formatDistance("aboutXHours",1,S);if(N<m){var j=Math.round(N/60);return M.formatDistance("aboutXHours",j,S)}if(N<v)return M.formatDistance("xDays",1,S);if(N<p){var T=Math.round(N/m);return M.formatDistance("xDays",T,S)}if(N<Z)return C=Math.round(N/p),M.formatDistance("aboutXMonths",C,S);if((C=(0,n.Z)(b,D))<12){var k=Math.round(N/p);return M.formatDistance("xMonths",k,S)}var A=C%12,B=Math.floor(C/12);return A<3?M.formatDistance("aboutXYears",B,S):A<9?M.formatDistance("overXYears",B,S):M.formatDistance("almostXYears",B+1,S)}(e,Date.now(),r)}},42026:function(e,r,t){t.d(r,{Z:function(){return n}});var o=t(93601),a=t(34800);function n(e){return(0,a.Z)(1,arguments),(0,o.Z)(e).getTime()}}}]);