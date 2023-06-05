"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6817],{58772:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),l=t(45987),r=t(94469),o=t(33604),a=t(96467),s=t(4117),c=t(24193),d=t(46417),u=["title","content","action","open","onClose"];function h(e){var n=e.title,t=e.content,h=e.action,x=e.open,f=e.onClose,g=(0,l.Z)(e,u);return(0,d.jsxs)(r.Z,(0,i.Z)((0,i.Z)({fullWidth:!0,maxWidth:"xs",open:x,onClose:f},g),{},{children:[(0,d.jsx)(o.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(a.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(s.Z,{children:[h,(0,d.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:f,children:"Cancel"})]})]}))}},38875:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),l=t(45987),r=t(57829),o=t(35898),a=t(61113),s=t(3404),c=t(90891),d=t(2135),u=t(46417);function h(e){var n=e.link,t=e.activeLast,l=e.disabled,o=n.name,a=n.href,s=n.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},l&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),o]});return a?(0,u.jsx)(c.Z,{component:d.rU,to:a,sx:h,children:x}):(0,u.jsxs)(r.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,t=e.action,d=e.heading,f=e.moreLink,v=e.activeLast,p=e.sx,Z=(0,l.Z)(e,x),j=n[n.length-1].name;return(0,u.jsxs)(r.Z,{sx:(0,i.Z)({mb:5},p),children:[(0,u.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(g,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:v,disabled:e.name===j},e.name||"")}))}))]}),t&&(0,u.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(r.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function g(){return(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},60656:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),l=t(45987),r=t(35898),o=t(61113),a=t(59063),s=t(46417),c=["title","description","img","sx"];function d(e){var n=e.title,t=e.description,d=e.img,u=e.sx,h=(0,l.Z)(e,c);return(0,s.jsxs)(r.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,s.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,s.jsx)(o.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,s.jsx)(o.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},54045:function(e,n,t){function i(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function l(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function r(e,n){return"desc"===e?function(e,t){return l(e,t,n)}:function(e,t){return-l(e,t,n)}}t.d(n,{$W:function(){return j},K:function(){return b},et:function(){return x},S_:function(){return L},Z4:function(){return D},hM:function(){return Z},fQ:function(){return i},sQ:function(){return r},x6:function(){return s}});var o=t(29439),a=t(47313);function s(e){var n=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,o.Z)(n,2),i=t[0],l=t[1],r=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),s=(0,o.Z)(r,2),c=s[0],d=s[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,o.Z)(u,2),x=h[0],f=h[1],g=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),v=(0,o.Z)(g,2),p=v[0],Z=v[1],j=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),m=(0,o.Z)(j,2),w=m[0],S=m[1],C=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),y=(0,o.Z)(C,2),b=y[0],k=y[1],P=(0,a.useCallback)((function(e){""!==e&&(f(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),R=(0,a.useCallback)((function(e){var n=b.indexOf(e),t=[];-1===n?t=t.concat(b,e):0===n?t=t.concat(b.slice(1)):n===b.length-1?t=t.concat(b.slice(0,-1)):n>0&&(t=t.concat(b.slice(0,n),b.slice(n+1))),k(t)}),[b]),D=(0,a.useCallback)((function(e,n){k(e?n:[])}),[]),F=(0,a.useCallback)((function(e,n){Z(n)}),[]),_=(0,a.useCallback)((function(e){Z(0),S(parseInt(e.target.value,10))}),[]),A=(0,a.useCallback)((function(e){l(e.target.checked)}),[]);return{dense:i,order:x,page:p,orderBy:c,rowsPerPage:w,selected:b,onSelectRow:R,onSelectAllRows:D,onSort:P,onChangePage:F,onChangeDense:A,onChangeRowsPerPage:_,setPage:Z,setDense:l,setOrder:f,setOrderBy:d,setSelected:k,setRowsPerPage:S}}var c=t(24076),d=t(67478),u=t(60656),h=t(46417);function x(e){var n=e.isNotFound;return(0,h.jsx)(c.Z,{children:n?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var f=t(1413),g=t(36459),v=t(35898),p=t(84488);function Z(e){var n=Object.assign({},((0,g.Z)(e),e));return(0,h.jsx)(c.Z,(0,f.Z)((0,f.Z)({},n),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(v.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(p.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(p.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20})]})})}))}function j(e){var n=e.emptyRows,t=e.height;return n?(0,h.jsx)(c.Z,{sx:(0,f.Z)({},t&&{height:t*n}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var m=t(23477),w=t(44758),S=t(82558),C=t(57829),y={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){var n=e.order,t=e.orderBy,i=e.rowCount,l=void 0===i?0:i,r=e.headLabel,o=e.numSelected,a=void 0===o?0:o,s=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(m.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(w.Z,{indeterminate:a>0&&a<l,checked:l>0&&a===l,onChange:function(e){return u(e.target.checked)}})}),r.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,h.jsxs)(S.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return s(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,h.jsx)(C.Z,{sx:(0,f.Z)({},y),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var k=t(45987),P=t(61113),R=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function D(e){var n=e.dense,t=e.action,i=e.rowCount,l=e.numSelected,r=e.onSelectAllRows,o=e.sx,a=(0,k.Z)(e,R);return l?(0,h.jsxs)(v.Z,(0,f.Z)((0,f.Z)({direction:"row",alignItems:"center",sx:(0,f.Z)((0,f.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),o)},a),{},{children:[(0,h.jsx)(w.Z,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:function(e){return r(e.target.checked)}}),(0,h.jsxs)(P.Z,{variant:"subtitle1",sx:(0,f.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[l," selected"]}),t&&t]})):null}var F=t(41493),_=t(83929),A=t(67426),B=["dense","onChangeDense","rowsPerPageOptions","sx"];function L(e){var n=e.dense,t=e.onChangeDense,i=e.rowsPerPageOptions,l=void 0===i?[5,10,25]:i,r=e.sx,o=(0,k.Z)(e,B);return(0,h.jsxs)(C.Z,{sx:(0,f.Z)({position:"relative"},r),children:[(0,h.jsx)(F.Z,(0,f.Z)({rowsPerPageOptions:l,component:"div"},o)),t&&(0,h.jsx)(_.Z,{label:"Dense",control:(0,h.jsx)(A.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},86817:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var i=t(74165),l=t(15861),r=t(29439),o=t(65964),a=t(73709),s=t(47313),c=t(58467),d=t(2135),u=t(70178),h=t(24193),x=t(73428),f=t(5297),g=t(65280),v=t(19536),p=t(51629),Z=t(61689),j=t(47131),m=t(66835),w=t(57861),S=t(48175),C=(t(81887),t(23116)),y=t(53261),b=t(58772),k=t(38875),P=t(50152),R=t(54045),D=t(24076),F=t(67478),_=t(44758),A=t(51405),B=(t(86259),t(22608)),L=t(46417);function I(e){var n=e.row,t=e.selected,i=e.onEditRow,l=e.onSelectRow,o=e.onDeleteRow,a=n.employee,c=n.name,d=n.phone,u=n.country,x=n.agent,f=n.city,g=n.flightCost,v=n.packageWithoutFlightCost,p=n.packagePrice,Z=(0,s.useState)(!1),m=(0,r.Z)(Z,2),w=m[0],S=m[1],y=(0,s.useState)(null),k=(0,r.Z)(y,2),P=k[0],R=k[1],I=function(){R(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(D.Z,{hover:!0,selected:t,children:[(0,L.jsx)(F.Z,{padding:"checkbox",children:(0,L.jsx)(_.Z,{checked:t,onClick:l})}),(0,L.jsx)(F.Z,{align:"left",children:c}),(0,L.jsx)(F.Z,{align:"left",children:a}),(0,L.jsx)(F.Z,{align:"left",children:p}),(0,L.jsx)(F.Z,{align:"left",children:g}),(0,L.jsx)(F.Z,{align:"left",children:u}),(0,L.jsx)(F.Z,{align:"left",children:f}),(0,L.jsx)(F.Z,{align:"left",children:x}),(0,L.jsx)(F.Z,{align:"left",children:v}),(0,L.jsx)(F.Z,{align:"left",children:d}),(0,L.jsx)(F.Z,{align:"left",children:(0,L.jsx)(j.Z,{color:P?"inherit":"default",onClick:function(e){R(e.currentTarget)},children:(0,L.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,L.jsxs)(B.Z,{open:P,onClose:I,arrow:"right-top",sx:{width:140},children:[(0,L.jsxs)(A.Z,{onClick:function(){S(!0),I()},sx:{color:"error.main"},children:[(0,L.jsx)(C.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,L.jsxs)(A.Z,{onClick:function(){i(),I()},children:[(0,L.jsx)(C.Z,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,L.jsx)(b.Z,{open:w,onClose:function(){S(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,L.jsx)(h.Z,{variant:"contained",color:"error",onClick:o,children:"Delete"})})]})}var T=t(35898),W=t(24631),N=t(41727);function E(e){var n=e.isFiltered,t=e.filterName,i=(e.filterRole,e.onFilterName),l=(e.onFilterRole,e.onResetFilter);return(0,L.jsxs)(T.Z,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:[(0,L.jsx)(W.Z,{fullWidth:!0,value:t,onChange:i,placeholder:"Search...",InputProps:{startAdornment:(0,L.jsx)(N.Z,{position:"start",children:(0,L.jsx)(C.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),n&&(0,L.jsx)(h.Z,{color:"error",sx:{flexShrink:0},onClick:l,startIcon:(0,L.jsx)(C.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}var O=t(20572),M=[],q=["all","activ","unActiv"],Q=[{id:"name",label:"name",align:"left"},{id:"employee",label:"employee",align:"left"},{id:"packagePrice",label:"packagePrice",align:"left"},{id:"flightCost",label:"flightCost",align:"left"},{id:"country",label:"country",align:"left"},{id:"city",label:"city",align:"left"},{id:"agent",label:"agent",align:"left"},{id:"packageWithoutFlightCost",label:"packageWithoutFlightCost",align:"left"},{id:"phone",label:"phone",align:"left"},{id:""}];function U(){var e,n=(0,R.x6)(),t=n.dense,D=n.page,F=n.order,_=n.orderBy,A=n.rowsPerPage,B=n.setPage,T=n.selected,W=n.setSelected,N=n.onSelectRow,U=n.onSelectAllRows,z=n.onSort,G=n.onChangeDense,K=n.onChangePage,$=n.onChangeRowsPerPage,H=(0,P.K$)().themeStretch,J=(0,c.s0)(),V=(0,O.m)({page:D+1,limit:A}),X=V.data,Y=(V.isLoading,(0,s.useState)([])),ee=(0,r.Z)(Y,2),ne=ee[0],te=ee[1];(0,s.useEffect)((function(){X&&te(X.data.saless)}),[X]);var ie=(0,s.useState)(!1),le=(0,r.Z)(ie,2),re=le[0],oe=le[1],ae=(0,s.useState)(""),se=(0,r.Z)(ae,2),ce=se[0],de=se[1],ue=(0,s.useState)("all"),he=(0,r.Z)(ue,2),xe=he[0],fe=he[1],ge=(0,s.useState)("all"),ve=(0,r.Z)(ge,2),pe=ve[0],Ze=ve[1],je=function(e){var n,t,i=e.inputData,l=e.comparator,r=e.filterName,o=e.filterStatus,a=e.filterRole,s=null===(n=i)||void 0===n?void 0:n.map((function(e,n){return[e,n]}));null===s||void 0===s||s.sort((function(e,n){var t=l(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),i=null===s||void 0===s?void 0:s.map((function(e){return e[0]})),r&&(i=null===(t=i)||void 0===t?void 0:t.filter((function(e){return-1!==e.title.ar.toLowerCase().indexOf(r.toLowerCase())})));"all"!==o&&(i=i.filter((function(e){return e.active===o})));"all"!==a&&(i=i.filter((function(e){return e.role===a})));return i}({inputData:ne,comparator:(0,R.sQ)(F,_),filterName:ce,filterRole:xe,filterStatus:pe}),me=null===je||void 0===je?void 0:je.slice(D*A,D*A+A),we=t?52:72,Se=""!==ce||"all"!==xe||"all"!==pe,Ce=!(null!==je&&void 0!==je&&je.length)&&!!ce||!(null!==je&&void 0!==je&&je.length)&&!!xe||!(null!==je&&void 0!==je&&je.length)&&!!pe,ye=function(){oe(!1)},be=(0,O.BM)(),ke=(0,r.Z)(be,1)[0],Pe=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(n);case 2:t=null===ne||void 0===ne?void 0:ne.filter((function(e){return e._id!==n})),W([]),te(t),D>0&&me.length<2&&B(D-1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(o.ql,{children:(0,L.jsx)("title",{children:" Sales: List | Rehltk"})}),(0,L.jsxs)(u.Z,{maxWidth:!H&&"lg",children:[(0,L.jsx)(k.Z,{heading:"Sales List",links:[{name:"Dashboard",href:S.vB.root},{name:"salse",href:S.vB.salse.root},{name:"List"}],action:(0,L.jsx)(h.Z,{component:d.rU,to:S.vB.salse.new,variant:"contained",startIcon:(0,L.jsx)(C.Z,{icon:"eva:plus-fill"}),children:"New Sales"})}),(0,L.jsxs)(x.Z,{children:[(0,L.jsx)(f.Z,{value:pe,onChange:function(e,n){B(0),Ze(n)},sx:{px:2,bgcolor:"background.neutral"},children:M.map((function(e){return(0,L.jsx)(g.Z,{label:e,value:e},e)}))}),(0,L.jsx)(v.Z,{}),(0,L.jsx)(E,{isFiltered:Se,filterName:ce,filterRole:xe,optionsRole:q,onFilterName:function(e){B(0),de(e.target.value)},onFilterRole:function(e){B(0),fe(e.target.value)},onResetFilter:function(){de(""),fe("all"),Ze("all")}}),(0,L.jsxs)(p.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,L.jsx)(R.Z4,{dense:t,numSelected:null===T||void 0===T?void 0:T.length,rowCount:null===ne||void 0===ne?void 0:ne.length,onSelectAllRows:function(e){return U(e,null===ne||void 0===ne?void 0:ne.map((function(e){return e.id})))},action:(0,L.jsx)(Z.Z,{title:"Delete",children:(0,L.jsx)(j.Z,{color:"primary",onClick:function(){oe(!0)},children:(0,L.jsx)(C.Z,{icon:"eva:trash-2-outline"})})})}),(0,L.jsx)(y.Z,{children:(0,L.jsxs)(m.Z,{size:t?"small":"medium",sx:{minWidth:800},children:[(0,L.jsx)(R.K,{order:F,orderBy:_,headLabel:Q,rowCount:null===ne||void 0===ne?void 0:ne.length,numSelected:null===T||void 0===T?void 0:T.length,onSort:z,onSelectAllRows:function(e){return U(e,null===ne||void 0===ne?void 0:ne.map((function(e){return e.id})))}}),(0,L.jsxs)(w.Z,{children:[null===je||void 0===je||null===(e=je.slice(D*A,D*A+A))||void 0===e?void 0:e.map((function(e){return(0,L.jsx)(I,{row:e,selected:T.includes(null===e||void 0===e?void 0:e._id),onSelectRow:function(){return N(null===e||void 0===e?void 0:e._id)},onDeleteRow:function(){return Pe(null===e||void 0===e?void 0:e._id)},onEditRow:function(){return n=null===e||void 0===e?void 0:e._id,void J(S.vB.salse.edit((0,a.o)(n)));var n}},null===e||void 0===e?void 0:e._id)})),(0,L.jsx)(R.$W,{height:we,emptyRows:(0,R.fQ)(D,A,null===ne||void 0===ne?void 0:ne.length)}),(0,L.jsx)(R.et,{isNotFound:Ce})]})]})})]}),(0,L.jsx)(R.S_,{count:null===X||void 0===X?void 0:X.data.totalDocs,page:D,rowsPerPage:A,onPageChange:K,onRowsPerPageChange:$,dense:t,onChangeDense:G})]})]}),(0,L.jsx)(b.Z,{open:re,onClose:ye,title:"Delete",content:(0,L.jsxs)(L.Fragment,{children:["Are you sure want to delete"," ",(0,L.jsxs)("strong",{children:[" ",T.length," "]})," items?"]}),action:(0,L.jsx)(h.Z,{variant:"contained",color:"error",onClick:function(){!function(e){var n=null===ne||void 0===ne?void 0:ne.filter((function(n){return!e.includes(n.id)}));if(W([]),te(n),D>0)if((null===e||void 0===e?void 0:e.length)===(null===me||void 0===me?void 0:me.length))B(D-1);else if((null===e||void 0===e?void 0:e.length)===(null===je||void 0===je?void 0:je.length))B(0);else if((null===e||void 0===e?void 0:e.length)>(null===me||void 0===me?void 0:me.length)){var t=Math.ceil((ne.length-e.length)/A)-1;B(t)}}(T),ye()},children:"Delete"})})]})}},20572:function(e,n,t){t.d(n,{BM:function(){return c},Fe:function(){return o},NP:function(){return s},ku:function(){return a},m:function(){return r}});var i=t(93433),l=t(38452).hi.injectEndpoints({reducerPath:"apiUser",tagTypes:["sales","addSales"],endpoints:function(e){return{getSales:e.query({query:function(e){var n=e.page,t=e.limit;return"sales?page=".concat(n,"&limit=").concat(t)},serializeQueryArgs:function(e){return e.endpointName},merge:function(e,n,t,l){return 1!==n.data.page||e.data.page?n.data.page>e.data.page?((r=e.data.saless).push.apply(r,(0,i.Z)(n.data.saless)),e.data.page=n.data.page,e):e:n;var r},forceRefetch:function(e){return e.currentArg!==e.previousArg},providesTags:["sales"]}),getSalesId:e.query({query:function(e){return"/sales/".concat(e)},providesTags:["sales"]}),addSales:e.mutation({query:function(e){return{url:"/sales",method:"POST",body:e,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["sales"]}),editSales:e.mutation({query:function(e){var n=e.formData,t=e.id;return{url:"/sales/".concat(t),method:"put",body:n,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["sales"]}),deleteSales:e.mutation({query:function(n){return{url:"/sales/".concat(n),method:"DELETE",body:e,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["sales"]})}}}),r=l.useGetSalesQuery,o=l.useAddSalesMutation,a=l.useEditSalesMutation,s=l.useGetSalesIdQuery,c=l.useDeleteSalesMutation}}]);