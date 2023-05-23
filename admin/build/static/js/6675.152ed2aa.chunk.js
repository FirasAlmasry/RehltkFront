"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6675],{38875:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(1413),a=r(45987),o=r(57829),i=r(35898),s=r(61113),l=r(3404),c=r(90891),d=r(2135),u=r(46417);function p(e){var t=e.link,r=e.activeLast,a=e.disabled,i=t.name,s=t.href,l=t.icon,p=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:p,children:m}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var t=e.links,r=e.action,d=e.heading,h=e.moreLink,Z=e.activeLast,f=e.sx,g=(0,a.Z)(e,m),j=t[t.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},f),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(x,{})},g),{},{children:t.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:Z,disabled:e.name===j},e.name||"")}))}))]}),r&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},76675:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(65964),a=r(57829),o=r(70178),i=r(9019),s=r(73428),l=r(54641),c=r(93405),d=r(48175),u=r(38875),p=r(47284),m=r(46417),h=[44,55,13,43];function x(){var e=(0,p.Q8)({labels:["Team A","Team B","Team C","Team D"],legend:{position:"right",offsetX:-20,offsetY:64,itemMargin:{vertical:8}},stroke:{show:!1},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return(0,m.jsx)(p.ZP,{type:"pie",series:h,options:e,width:400})}var Z=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function f(){var e=(0,p.Q8)({stroke:{show:!1},plotOptions:{bar:{horizontal:!0,barHeight:"30%"}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return(0,m.jsx)(p.ZP,{type:"bar",series:Z,options:e,height:320})}var g=[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}];function j(){var e=(0,p.Q8)({xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{x:{show:!1},marker:{show:!1}}});return(0,m.jsx)(p.ZP,{type:"line",series:g,options:e,height:320})}var v=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}];function y(){var e=(0,p.Q8)({xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return(0,m.jsx)(p.ZP,{type:"area",series:v,options:e,height:320})}var b=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function C(){var e=(0,p.Q8)({stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"20%"}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," points"):e}}}});return(0,m.jsx)(p.ZP,{type:"line",series:b,options:e,height:320})}var P=[44,55,13,43];function w(){var e=(0,p.Q8)({labels:["Apple","Mango","Orange","Watermelon"],stroke:{show:!1},legend:{horizontalAlign:"center"},plotOptions:{pie:{donut:{size:"90%"}}}});return(0,m.jsx)(p.ZP,{type:"donut",series:P,options:e,width:400})}var M=r(19860),k=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function S(){var e=(0,M.Z)(),t=(0,p.Q8)({stroke:{width:2},fill:{opacity:.48},legend:{position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary]}}}});return(0,m.jsx)(p.ZP,{type:"radar",series:k,options:t,width:540})}var T=r(76221),R=[44,55];function N(){var e=(0,M.Z)(),t=(0,p.Q8)({labels:["Apples","Oranges"],fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:e.palette.primary.light},{offset:100,color:e.palette.primary.main}],[{offset:0,color:e.palette.info.light},{offset:100,color:e.palette.info.main}]]}},legend:{horizontalAlign:"center"},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return(0,T.FK)(2324)}}}}}});return(0,m.jsx)(p.ZP,{type:"radialBar",series:R,options:t,height:400})}var A=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]}];function B(){var e=(0,p.Q8)({plotOptions:{bar:{columnWidth:"16%"}},stroke:{show:!1},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}}});return(0,m.jsx)(p.ZP,{type:"bar",series:A,options:e,height:320})}var O=[{name:"Product A",data:[44,55,41,67,22,43]},{name:"Product B",data:[13,23,20,8,13,27]},{name:"Product C",data:[11,17,15,15,21,14]},{name:"Product D",data:[21,7,25,13,22,8]}];function I(){var e=(0,p.Q8)({chart:{stacked:!0,zoom:{enabled:!0}},legend:{itemMargin:{vertical:8},position:"right",offsetY:20},plotOptions:{bar:{columnWidth:"16%"}},stroke:{show:!1},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]}});return(0,m.jsx)(p.ZP,{type:"bar",series:O,options:e,height:320})}var L=[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}];function Q(){var e=(0,M.Z)(),t=(0,p.Q8)({stroke:{show:!1},yaxis:{labels:{formatter:function(e){return"".concat(e.toFixed(0),"%")}}},xaxis:{type:"datetime",categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"]},plotOptions:{bar:{columnWidth:"58%",colors:{ranges:[{from:-100,to:-46,color:e.palette.warning.main},{from:-45,to:0,color:e.palette.info.main}]}}}});return(0,m.jsx)(p.ZP,{type:"bar",series:L,options:t,height:320})}var z=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}];function H(){var e=(0,p.Q8)({stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}},plotOptions:{bar:{columnWidth:"36%"}}});return(0,m.jsx)(p.ZP,{type:"bar",series:z,options:e,height:320})}function _(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.ql,{children:(0,m.jsx)("title",{children:" Extra Components: Charts | Rehltk"})}),(0,m.jsx)(a.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,m.jsx)(o.Z,{children:(0,m.jsx)(u.Z,{heading:"Charts",links:[{name:"Components",href:d.ko.components},{name:"Charts"}],moreLink:["https://apexcharts.com"]})})}),(0,m.jsx)(o.Z,{sx:{my:10},children:(0,m.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Area"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(y,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Line"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(j,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Column Single"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(B,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Column Multiple"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(H,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Column Stacked"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(I,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Column Negative"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(Q,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Bar"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(f,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Mixed"}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(C,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Pie"}),(0,m.jsx)(c.Z,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(x,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Donut"}),(0,m.jsx)(c.Z,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(w,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Radial Bar"}),(0,m.jsx)(c.Z,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(N,{})})]})}),(0,m.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(s.Z,{dir:"ltr",children:[(0,m.jsx)(l.Z,{title:"Radar"}),(0,m.jsx)(c.Z,{sx:{height:420,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(S,{})})]})})]})})]})}},3404:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(93433),a=r(29439),o=r(4942),i=r(87462),s=r(63366),l=r(47313),c=(r(96214),r(83061)),d=r(21921),u=r(17592),p=r(77342),m=r(61113),h=r(17551),x=r(54750),Z=r(46417),f=(0,x.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=r(38743),j=(0,u.ZP)(g.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,h._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(t.palette.grey[600],.12)})})})),v=(0,u.ZP)(f)({width:24,height:16});var y=function(e){var t=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(j,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,Z.jsx)(v,{ownerState:t})}))})},b=r(77430),C=r(32298);function P(e){return(0,C.Z)("MuiBreadcrumbs",e)}var w=(0,b.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(w.li),t.li),t.root]}})({}),S=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),T=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,t,r,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,Z.jsx)(T,{"aria-hidden":!0,className:t,ownerState:n,children:r},"separator-".concat(i))):a.push(o),a}),[])}var N=l.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=r.children,u=r.className,m=r.component,h=void 0===m?"nav":m,x=r.expandText,f=void 0===x?"Show path":x,g=r.itemsAfterCollapse,j=void 0===g?1:g,v=r.itemsBeforeCollapse,b=void 0===v?1:v,C=r.maxItems,w=void 0===C?8:C,T=r.separator,N=void 0===T?"/":T,A=(0,s.Z)(r,M),B=l.useState(!1),O=(0,a.Z)(B,2),I=O[0],L=O[1],Q=(0,i.Z)({},r,{component:h,expanded:I,expandText:f,itemsAfterCollapse:j,itemsBeforeCollapse:b,maxItems:w,separator:N}),z=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},P,t)}(Q),H=l.useRef(null),_=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,Z.jsx)("li",{className:z.li,children:e},"child-".concat(t))}));return(0,Z.jsx)(k,(0,i.Z)({ref:t,component:h,color:"text.secondary",className:(0,c.Z)(z.root,u),ownerState:Q},A,{children:(0,Z.jsx)(S,{className:z.ol,ref:H,ownerState:Q,children:R(I||w&&_.length<=w?_:function(e){return b+j>=e.length?e:[].concat((0,n.Z)(e.slice(0,b)),[(0,Z.jsx)(y,{"aria-label":f,onClick:function(){L(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-j,e.length)))}(_),z.separator,N,Q)})}))}))},93405:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(87462),a=r(63366),o=r(47313),i=r(83061),s=r(21921),l=r(17592),c=r(77342),d=r(77430),u=r(32298);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=r(46417),h=["className","component"],x=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),Z=o.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCardContent"}),o=r.className,l=r.component,d=void 0===l?"div":l,u=(0,a.Z)(r,h),Z=(0,n.Z)({},r,{component:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(Z);return(0,m.jsx)(x,(0,n.Z)({as:d,className:(0,i.Z)(f.root,o),ownerState:Z,ref:t},u))}))},54641:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(4942),a=r(63366),o=r(87462),i=r(47313),s=r(83061),l=r(21921),c=r(61113),d=r(77342),u=r(17592),p=r(77430),m=r(32298);function h(e){return(0,m.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=r(46417),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var r;return(0,o.Z)((r={},(0,n.Z)(r,"& .".concat(x.title),t.title),(0,n.Z)(r,"& .".concat(x.subheader),t.subheader),r),t.root)}})({display:"flex",alignItems:"center",padding:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),b=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiCardHeader"}),n=r.action,i=r.avatar,u=r.className,p=r.component,m=void 0===p?"div":p,x=r.disableTypography,b=void 0!==x&&x,C=r.subheader,P=r.subheaderTypographyProps,w=r.title,M=r.titleTypographyProps,k=(0,a.Z)(r,f),S=(0,o.Z)({},r,{component:m,disableTypography:b}),T=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(S),R=w;null==R||R.type===c.Z||b||(R=(0,Z.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:T.title,component:"span",display:"block"},M,{children:R})));var N=C;return null==N||N.type===c.Z||b||(N=(0,Z.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},P,{children:N}))),(0,Z.jsxs)(g,(0,o.Z)({className:(0,s.Z)(T.root,u),as:m,ref:t,ownerState:S},k,{children:[i&&(0,Z.jsx)(j,{className:T.avatar,ownerState:S,children:i}),(0,Z.jsxs)(y,{className:T.content,ownerState:S,children:[R,N]}),n&&(0,Z.jsx)(v,{className:T.action,ownerState:S,children:n})]}))}))},73428:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(87462),a=r(63366),o=r(47313),i=r(83061),s=r(21921),l=r(17592),c=r(77342),d=r(70501),u=r(77430),p=r(32298);function m(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var h=r(46417),x=["className","raised"],Z=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),f=o.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCard"}),o=r.className,l=r.raised,d=void 0!==l&&l,u=(0,a.Z)(r,x),p=(0,n.Z)({},r,{raised:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},m,t)}(p);return(0,h.jsx)(Z,(0,n.Z)({className:(0,i.Z)(f.root,o),elevation:d?8:void 0,ref:t,ownerState:p},u))}))}}]);