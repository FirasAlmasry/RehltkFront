"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1946],{38875:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(1413),n=r(45987),a=r(57829),o=r(35898),s=r(61113),l=r(3404),c=r(90891),u=r(2135),d=r(46417);function h(e){var t=e.link,r=e.activeLast,n=e.disabled,o=t.name,s=t.href,l=t.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},n&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),o]});return s?(0,d.jsx)(c.Z,{component:u.rU,to:s,sx:h,children:p}):(0,d.jsxs)(a.Z,{sx:h,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function m(e){var t=e.links,r=e.action,u=e.heading,m=e.moreLink,g=e.activeLast,f=e.sx,v=(0,n.Z)(e,p),b=t[t.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,i.Z)({mb:5},f),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(l.Z,(0,i.Z)((0,i.Z)({separator:(0,d.jsx)(x,{})},v),{},{children:t.map((function(e){return(0,d.jsx)(h,{link:e,activeLast:g,disabled:e.name===b},e.name||"")}))}))]}),r&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!m&&(0,d.jsx)(a.Z,{sx:{mt:2},children:m.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},49317:function(e,t,r){r.d(t,{Z:function(){return m},t:function(){return o}});var i=r(19860),n=r(66281),a=r(69043);function o(e){var t=(0,i.Z)(),r=(0,n.z)(),o=t.breakpoints.up("xl"===r?"lg":r),s=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][o]?t.typography[e][o]:t.typography[e],l=(0,a.cv)(s.fontSize),c=Number(t.typography[e].lineHeight)*l,u=t.typography[e];return{fontSize:l,lineHeight:c,fontWeight:u.fontWeight,letterSpacing:u.letterSpacing}}var s=r(1413),l=r(45987),c=r(47313),u=r(90891),d=r(61113),h=r(46417),p=["asLink","variant","line","persistent","children","sx"],m=(0,c.forwardRef)((function(e,t){var r=e.asLink,i=e.variant,n=void 0===i?"body1":i,a=e.line,c=void 0===a?2:a,m=e.persistent,x=void 0!==m&&m,g=e.children,f=e.sx,v=(0,l.Z)(e,p),b=o(n).lineHeight,Z=(0,s.Z)((0,s.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:c,WebkitBoxOrient:"vertical"},x&&{height:b*c}),f);return r?(0,h.jsx)(u.Z,(0,s.Z)((0,s.Z)({color:"inherit",ref:t,variant:n,sx:(0,s.Z)({},Z)},v),{},{children:g})):(0,h.jsx)(d.Z,(0,s.Z)((0,s.Z)({ref:t,variant:n,sx:(0,s.Z)({},Z)},v),{},{children:g}))}))},61946:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var i=r(65964),n=r(57829),a=r(70178),o=r(9019),s=r(61113),l=r(35898),c=r(70501),u=r(48175),d=r(38875),h=r(49317),p=r(46417),m=[{label:"h1. Heading",variant:"h1"},{label:"h2. Heading",variant:"h2"},{label:"h3. Heading",variant:"h3"},{label:"h4. Heading",variant:"h4"},{label:"h5. Heading",variant:"h5"},{label:"h6. Heading",variant:"h6"},{label:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle1"},{label:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle2"},{label:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body1"},{label:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body2"},{label:"caption text",variant:"caption"},{label:"overline text",variant:"overline"},{label:"Button",variant:"button"}];function x(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.ql,{children:(0,p.jsx)("title",{children:" Foundations: Typography | Rehltk"})}),(0,p.jsx)(n.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,p.jsx)(a.Z,{children:(0,p.jsx)(d.Z,{heading:"Typography",links:[{name:"Components",href:u.ko.components},{name:"Typography"}],moreLink:["https://mui.com/components/typography"]})})}),(0,p.jsxs)(a.Z,{sx:{my:10},children:[(0,p.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,p.jsx)(o.ZP,{item:!0,xs:12,md:3,children:(0,p.jsx)(s.Z,{variant:"h6",paragraph:!0,children:"Default Text"})}),(0,p.jsx)(o.ZP,{item:!0,xs:12,md:9,children:(0,p.jsx)(l.Z,{spacing:3,children:m.map((function(e){return(0,p.jsx)(g,{font:e},e.variant)}))})})]}),(0,p.jsx)(n.Z,{sx:{height:40}}),(0,p.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,p.jsx)(o.ZP,{item:!0,xs:12,md:3,children:(0,p.jsx)(s.Z,{variant:"h6",paragraph:!0,children:"Colors Text"})}),(0,p.jsx)(o.ZP,{item:!0,xs:12,md:9,children:(0,p.jsxs)(l.Z,{spacing:3,children:[["primary","secondary","disabled"].map((function(e){return(0,p.jsxs)(c.Z,{variant:"outlined",sx:{p:3,borderRadius:1},children:[(0,p.jsxs)(s.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"text.".concat(e)},children:["text ",e]}),(0,p.jsx)(s.Z,{gutterBottom:!0,variant:"body2",sx:{color:"text.".concat(e)},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)})),["primary","secondary","info","warning","error"].map((function(e){return(0,p.jsxs)(c.Z,{variant:"outlined",sx:{p:3,borderRadius:1},children:[(0,p.jsx)(s.Z,{gutterBottom:!0,variant:"subtitle1",sx:{color:"".concat(e,".main")},children:e}),(0,p.jsx)(s.Z,{gutterBottom:!0,variant:"body2",sx:{color:"".concat(e,".main")},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)}))]})})]})]})]})}function g(e){var t=e.font,r=t.variant,i=t.label,n=(0,h.t)(r),a=n.fontSize,o=n.lineHeight,l=n.fontWeight,u=n.letterSpacing,d=void 0===u?0:u;return(0,p.jsxs)(c.Z,{variant:"outlined",sx:{p:3,borderRadius:1},children:[(0,p.jsx)(s.Z,{variant:r,gutterBottom:!0,children:i}),(0,p.jsxs)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:["size: ",a," / l-height: ",o," / weight:",l," / letterSpacing: ",d]})]})}},3404:function(e,t,r){r.d(t,{Z:function(){return P}});var i=r(93433),n=r(29439),a=r(4942),o=r(87462),s=r(63366),l=r(47313),c=(r(96214),r(83061)),u=r(21921),d=r(17592),h=r(77342),p=r(61113),m=r(17551),x=r(54750),g=r(46417),f=(0,x.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=r(38743),b=(0,d.ZP)(v.Z)((function(e){var t=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),Z=(0,d.ZP)(f)({width:24,height:16});var y=function(e){var t=e;return(0,g.jsx)("li",{children:(0,g.jsx)(b,(0,o.Z)({focusRipple:!0},e,{ownerState:t,children:(0,g.jsx)(Z,{ownerState:t})}))})},j=r(77430),k=r(32298);function w(e){return(0,k.Z)("MuiBreadcrumbs",e)}var C=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],q=(0,d.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(C.li),t.li),t.root]}})({}),B=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),L=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,t,r,i){return e.reduce((function(n,a,o){return o<e.length-1?n=n.concat(a,(0,g.jsx)(L,{"aria-hidden":!0,className:t,ownerState:i,children:r},"separator-".concat(o))):n.push(a),n}),[])}var P=l.forwardRef((function(e,t){var r=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),a=r.children,d=r.className,p=r.component,m=void 0===p?"nav":p,x=r.expandText,f=void 0===x?"Show path":x,v=r.itemsAfterCollapse,b=void 0===v?1:v,Z=r.itemsBeforeCollapse,j=void 0===Z?1:Z,k=r.maxItems,C=void 0===k?8:k,L=r.separator,P=void 0===L?"/":L,H=(0,s.Z)(r,S),_=l.useState(!1),z=(0,n.Z)(_,2),M=z[0],T=z[1],N=(0,o.Z)({},r,{component:m,expanded:M,expandText:f,itemsAfterCollapse:b,itemsBeforeCollapse:j,maxItems:C,separator:P}),W=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(N),I=l.useRef(null),F=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,g.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return(0,g.jsx)(q,(0,o.Z)({ref:t,component:m,color:"text.secondary",className:(0,c.Z)(W.root,d),ownerState:N},H,{children:(0,g.jsx)(B,{className:W.ol,ref:I,ownerState:N,children:R(M||C&&F.length<=C?F:function(e){return j+b>=e.length?e:[].concat((0,i.Z)(e.slice(0,j)),[(0,g.jsx)(y,{"aria-label":f,onClick:function(){T(!0);var e=I.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,i.Z)(e.slice(e.length-b,e.length)))}(F),W.separator,P,N)})}))}))}}]);