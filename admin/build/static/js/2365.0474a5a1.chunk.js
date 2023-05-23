"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2365],{21365:function(e,n,r){r.d(n,{SA:function(){return t.SA},ZP:function(){return a.Z}});var t=r(10114),a=r(31332)},38875:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(1413),a=r(45987),i=r(57829),l=r(35898),o=r(61113),d=r(3404),s=r(90891),c=r(2135),h=r(46417);function p(e){var n=e.link,r=e.activeLast,a=e.disabled,l=n.name,o=n.href,d=n.icon,p=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,h.jsxs)(h.Fragment,{children:[d&&(0,h.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),l]});return o?(0,h.jsx)(s.Z,{component:c.rU,to:o,sx:p,children:m}):(0,h.jsxs)(i.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function u(e){var n=e.links,r=e.action,c=e.heading,u=e.moreLink,Z=e.activeLast,g=e.sx,v=(0,a.Z)(e,m),f=n[n.length-1].name;return(0,h.jsxs)(i.Z,{sx:(0,t.Z)({mb:5},g),children:[(0,h.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,h.jsxs)(i.Z,{sx:{flexGrow:1},children:[c&&(0,h.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:c}),!!n.length&&(0,h.jsx)(d.Z,(0,t.Z)((0,t.Z)({separator:(0,h.jsx)(x,{})},v),{},{children:n.map((function(e){return(0,h.jsx)(p,{link:e,activeLast:Z,disabled:e.name===f},e.name||"")}))}))]}),r&&(0,h.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!u&&(0,h.jsx)(i.Z,{sx:{mt:2},children:u.map((function(e){return(0,h.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,h.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},22365:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var t=r(1413),a=r(65964),i=r(19860),l=r(57829),o=r(70178),d=r(35898),s=r(48175),c=r(21365),h=r(38875),p=r(45987),m=r(68390),u=r(26995),x=r(17551),Z=r(63585),g=r(73428),v=r(61113),f=r(41885),j=r(46417);function b(e){var n=e.node,r=e.depth,a=e.length,o=e.sx,s=(0,i.Z)(),c="light"===s.palette.mode,h=function(e){return{bgcolor:(0,x.Fq)(s.palette[e].main,.08),border:"solid 1px ".concat((0,x.Fq)(s.palette[e].main,.24)),color:c?s.palette[e].darker:s.palette[e].lighter}},p=1===r,m="root"===n.group,u="product design"===n.group,b="development"===n.group,k="marketing"===n.group;return(0,j.jsxs)(d.Z,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!p&&(0,j.jsx)(Z.Z,{alt:n.name,src:n.avatar||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:"solid 4px ".concat(s.palette.background.paper)}}),(0,j.jsxs)(g.Z,{sx:(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize"},p&&{py:2}),p&&u&&h("primary")),p&&b&&h("info")),p&&k&&h("warning")),o),children:[1!==r&&!m&&(0,j.jsx)(l.Z,{sx:(0,t.Z)((0,t.Z)((0,t.Z)({top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5},u&&{bgcolor:"primary.light"}),b&&{bgcolor:"info.light"}),k&&{bgcolor:"warning.light"})}),(0,j.jsxs)(v.Z,{variant:p?"subtitle1":"subtitle2",noWrap:!0,children:[n.name,p&&(0,j.jsx)(f.Z,{color:(b?"info":k&&"warning")||"primary",sx:{ml:1},children:a})]}),!p&&(0,j.jsx)(v.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]})]})}function k(e){var n=e.node,r=e.sx;return(0,j.jsx)(g.Z,{sx:(0,t.Z)({p:2,boxShadow:0,borderRadius:1.5,display:"inline-flex",textTransform:"capitalize",color:function(e){return"light"===e.palette.mode?"primary.darker":"primary.lighter"},bgcolor:function(e){return(0,x.Fq)(e.palette.primary.main,.08)},border:function(e){return"1px solid ".concat((0,x.Fq)(e.palette.primary.main,.24))}},r),children:(0,j.jsx)(v.Z,{variant:"subtitle2",children:n.name})})}var y=r(29439),w=r(47313),P=r(47131),E=r(51405),C=r(8730),z=r(22608);function _(e){var n=e.node,r=e.onEdit,a=e.onDelete,i=e.sx,l=(0,w.useState)(null),o=(0,y.Z)(l,2),d=o[0],s=o[1],c=function(){s(null)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(g.Z,{sx:(0,t.Z)({p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize"},i),children:[(0,j.jsx)(P.Z,{color:d?"inherit":"default",onClick:function(e){s(e.currentTarget)},sx:{position:"absolute",top:8,right:8},children:(0,j.jsx)(C.Z,{icon:"eva:more-horizontal-fill"})}),(0,j.jsx)(Z.Z,{alt:n.name,src:n.avatar||"",sx:{mr:2,mb:1,width:48,height:48}}),(0,j.jsx)(v.Z,{variant:"subtitle2",noWrap:!0,children:n.name}),(0,j.jsx)(v.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]}),(0,j.jsxs)(z.Z,{open:d,onClose:c,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},arrow:"left-center",sx:{width:160},children:[a&&(0,j.jsxs)(E.Z,{onClick:function(){c(),a()},sx:{color:"error.main"},children:[(0,j.jsx)(C.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),r&&(0,j.jsxs)(E.Z,{onClick:function(){c(),r()},children:[(0,j.jsx)(C.Z,{icon:"eva:edit-fill"}),"Edit"]})]})]})}var D=["data","variant","sx"];function F(e){var n=e.data,r=e.variant,a=void 0===r?"simple":r,l=e.sx,o=(0,p.Z)(e,D),d=(0,i.Z)();return(0,j.jsx)(m.m,(0,t.Z)((0,t.Z)({lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:d.palette.divider,label:"simple"===a&&(0,j.jsx)(k,{sx:l,node:n})||"standard"===a&&(0,j.jsx)(_,{sx:l,node:n,onEdit:function(){return console.log("EDIT",n.name)},onDelete:function(){return console.log("DELETE",n.name)}})||"group"===a&&(0,j.jsx)(b,{sx:l,node:n})},o),{},{children:n.children.map((function(e){return(0,j.jsx)(L,{depth:1,data:e,variant:a,sx:l},e.name)}))}))}function L(e){var n,r=e.data,t=e.depth,a=e.variant,i=e.sx,l=r.children&&!!r.children;return(0,j.jsx)(m.O,{label:"simple"===a&&(0,j.jsx)(k,{sx:i,node:r})||"standard"===a&&(0,j.jsx)(_,{sx:i,node:r,onEdit:function(){return console.log("EDIT",r.name)},onDelete:function(){return console.log("DELETE",r.name)}})||"group"===a&&(0,j.jsx)(b,{sx:i,node:r,depth:t,length:null===(n=(0,u.Z)(r.children,"children"))||void 0===n?void 0:n.length}),children:l&&(0,j.jsx)(R,{data:r.children,depth:t,variant:a,sx:i})})}function R(e){var n=e.data,r=e.depth,t=e.variant,a=e.sx;return(0,j.jsx)(j.Fragment,{children:n.map((function(e){return(0,j.jsx)(L,{data:e,depth:r+1,variant:t,sx:a},e.name)}))})}var T=r(16769);function W(){var e=(0,i.Z)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.ql,{children:(0,j.jsx)("title",{children:" Extra Components: Organizational Chart | Rehltk"})}),(0,j.jsx)(l.Z,{sx:{pt:6,pb:1,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,j.jsx)(o.Z,{children:(0,j.jsx)(h.Z,{heading:"Organizational Chart",links:[{name:"Components",href:s.ko.components},{name:"Organizational Chart"}],moreLink:["https://www.npmjs.com/package/react-organizational-chart","https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic"]})})}),(0,j.jsx)(o.Z,{sx:{my:10},children:(0,j.jsxs)(d.Z,{spacing:5,children:[(0,j.jsx)(T.g,{title:"Simple",children:(0,j.jsx)(F,{data:q,lineColor:e.palette.primary.light})}),(0,j.jsx)(T.g,{title:"Standard",sx:{overflow:"auto"},children:(0,j.jsx)(F,{data:q,variant:"standard",lineHeight:"40px"})}),(0,j.jsx)(T.g,{title:"By Group",sx:{overflow:"auto"},children:(0,j.jsx)(F,{data:I,variant:"group",lineHeight:"64px"})})]})})]})}var S=function(e,n,r,t){return{name:e,group:n,role:r,avatar:t}},q=(0,t.Z)((0,t.Z)({},S("tasha mcneill","root","ceo, co-founder",c.ZP.image.avatar(1))),{},{children:[(0,t.Z)((0,t.Z)({},S("john stone","product design","lead",c.ZP.image.avatar(2))),{},{children:[(0,t.Z)((0,t.Z)({},S("rimsha wynn","product design","senior",c.ZP.image.avatar(3))),{},{children:null})]}),(0,t.Z)((0,t.Z)({},S("ponnappa priya","development","lead",c.ZP.image.avatar(4))),{},{children:[(0,t.Z)((0,t.Z)({},S("tyra elliott","development","senior",c.ZP.image.avatar(5))),{},{children:[(0,t.Z)((0,t.Z)({},S("sheridan mckee","development","back end developer",c.ZP.image.avatar(6))),{},{children:[(0,t.Z)((0,t.Z)({},S("ang li","development","back end developer",c.ZP.image.avatar(7))),{},{children:null})]}),(0,t.Z)((0,t.Z)({},S("hope ahmad","development","front end",c.ZP.image.avatar(8))),{},{children:null})]})]}),(0,t.Z)((0,t.Z)({},S("peter stanbridge","marketing","lead",c.ZP.image.avatar(9))),{},{children:[(0,t.Z)((0,t.Z)({},S("madeline harding","marketing","support",c.ZP.image.avatar(10))),{},{children:null}),(0,t.Z)((0,t.Z)({},S("eoin medrano","marketing","content writer",c.ZP.image.avatar(11))),{},{children:null})]})]}),I=(0,t.Z)((0,t.Z)({},S("tasha mcneill","root","ceo, co-founder",c.ZP.image.avatar(1))),{},{children:[(0,t.Z)((0,t.Z)({},S("product design","product design",null,null)),{},{children:[(0,t.Z)((0,t.Z)({},S("john stone","product design","lead",c.ZP.image.avatar(2))),{},{children:[(0,t.Z)((0,t.Z)({},S("rimsha wynn","product design","senior",c.ZP.image.avatar(3))),{},{children:null})]})]}),(0,t.Z)((0,t.Z)({},S("development","development",null,null)),{},{children:[(0,t.Z)((0,t.Z)({},S("ponnappa priya","development","lead",c.ZP.image.avatar(4))),{},{children:[(0,t.Z)((0,t.Z)({},S("tyra elliott","development","senior",c.ZP.image.avatar(5))),{},{children:[(0,t.Z)((0,t.Z)({},S("sheridan mckee","development","back end developer",c.ZP.image.avatar(6))),{},{children:[(0,t.Z)((0,t.Z)({},S("ang li","development","back end developer",c.ZP.image.avatar(7))),{},{children:null})]}),(0,t.Z)((0,t.Z)({},S("hope ahmad","development","front end",c.ZP.image.avatar(8))),{},{children:null})]})]})]}),(0,t.Z)((0,t.Z)({},S("marketing","marketing",null,null)),{},{children:[(0,t.Z)((0,t.Z)({},S("peter stanbridge","marketing","lead",c.ZP.image.avatar(9))),{},{children:[(0,t.Z)((0,t.Z)({},S("madeline harding","marketing","support",c.ZP.image.avatar(10))),{},{children:null}),(0,t.Z)((0,t.Z)({},S("eoin medrano","marketing","content writer",c.ZP.image.avatar(11))),{},{children:null})]})]})]})},16769:function(e,n,r){r.d(n,{_:function(){return h},g:function(){return c}});var t=r(1413),a=r(17551),i=r(70501),l=r(54641),o=r(57829),d=r(61113),s=r(46417);function c(e){var n=e.title,r=e.sx,d=e.children;return(0,s.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,s.jsx)(l.Z,{title:n}),(0,s.jsx)(o.Z,{sx:(0,t.Z)({p:5,minHeight:180},r),children:d})]})}function h(e){var n=e.title;return(0,s.jsx)(d.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}}}]);