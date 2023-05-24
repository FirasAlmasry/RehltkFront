"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[4386],{58772:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),r=t(45987),o=t(94469),l=t(33604),a=t(96467),s=t(4117),c=t(24193),d=t(46417),u=["title","content","action","open","onClose"];function h(e){var n=e.title,t=e.content,h=e.action,x=e.open,f=e.onClose,p=(0,r.Z)(e,u);return(0,d.jsxs)(o.Z,(0,i.Z)((0,i.Z)({fullWidth:!0,maxWidth:"xs",open:x,onClose:f},p),{},{children:[(0,d.jsx)(l.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(a.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(s.Z,{children:[h,(0,d.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:f,children:"Cancel"})]})]}))}},38875:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),r=t(45987),o=t(57829),l=t(35898),a=t(61113),s=t(3404),c=t(90891),d=t(2135),u=t(46417);function h(e){var n=e.link,t=e.activeLast,r=e.disabled,l=n.name,a=n.href,s=n.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return a?(0,u.jsx)(c.Z,{component:d.rU,to:a,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,t=e.action,d=e.heading,f=e.moreLink,g=e.activeLast,m=e.sx,Z=(0,r.Z)(e,x),j=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,i.Z)({mb:5},m),children:[(0,u.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(p,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:g,disabled:e.name===j},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(o.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},60656:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),r=t(45987),o=t(35898),l=t(61113),a=t(59063),s=t(46417),c=["title","description","img","sx"];function d(e){var n=e.title,t=e.description,d=e.img,u=e.sx,h=(0,r.Z)(e,c);return(0,s.jsxs)(o.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,s.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,s.jsx)(l.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,s.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},54045:function(e,n,t){function i(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function r(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function o(e,n){return"desc"===e?function(e,t){return r(e,t,n)}:function(e,t){return-r(e,t,n)}}t.d(n,{$W:function(){return j},K:function(){return y},et:function(){return x},S_:function(){return _},Z4:function(){return D},hM:function(){return Z},fQ:function(){return i},sQ:function(){return o},x6:function(){return s}});var l=t(29439),a=t(47313);function s(e){var n=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,l.Z)(n,2),i=t[0],r=t[1],o=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),s=(0,l.Z)(o,2),c=s[0],d=s[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,l.Z)(u,2),x=h[0],f=h[1],p=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),g=(0,l.Z)(p,2),m=g[0],Z=g[1],j=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),v=(0,l.Z)(j,2),w=v[0],C=v[1],b=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),S=(0,l.Z)(b,2),y=S[0],k=S[1],R=(0,a.useCallback)((function(e){""!==e&&(f(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),P=(0,a.useCallback)((function(e){var n=y.indexOf(e),t=[];-1===n?t=t.concat(y,e):0===n?t=t.concat(y.slice(1)):n===y.length-1?t=t.concat(y.slice(0,-1)):n>0&&(t=t.concat(y.slice(0,n),y.slice(n+1))),k(t)}),[y]),D=(0,a.useCallback)((function(e,n){k(e?n:[])}),[]),F=(0,a.useCallback)((function(e,n){Z(n)}),[]),I=(0,a.useCallback)((function(e){Z(0),C(parseInt(e.target.value,10))}),[]),L=(0,a.useCallback)((function(e){r(e.target.checked)}),[]);return{dense:i,order:x,page:m,orderBy:c,rowsPerPage:w,selected:y,onSelectRow:P,onSelectAllRows:D,onSort:R,onChangePage:F,onChangeDense:L,onChangeRowsPerPage:I,setPage:Z,setDense:r,setOrder:f,setOrderBy:d,setSelected:k,setRowsPerPage:C}}var c=t(24076),d=t(67478),u=t(60656),h=t(46417);function x(e){var n=e.isNotFound;return(0,h.jsx)(c.Z,{children:n?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var f=t(1413),p=t(36459),g=t(35898),m=t(84488);function Z(e){var n=Object.assign({},((0,p.Z)(e),e));return(0,h.jsx)(c.Z,(0,f.Z)((0,f.Z)({},n),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(g.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(m.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(m.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20})]})})}))}function j(e){var n=e.emptyRows,t=e.height;return n?(0,h.jsx)(c.Z,{sx:(0,f.Z)({},t&&{height:t*n}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var v=t(23477),w=t(44758),C=t(82558),b=t(57829),S={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function y(e){var n=e.order,t=e.orderBy,i=e.rowCount,r=void 0===i?0:i,o=e.headLabel,l=e.numSelected,a=void 0===l?0:l,s=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(v.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(w.Z,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:function(e){return u(e.target.checked)}})}),o.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,h.jsxs)(C.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return s(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,h.jsx)(b.Z,{sx:(0,f.Z)({},S),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var k=t(45987),R=t(61113),P=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function D(e){var n=e.dense,t=e.action,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,l=e.sx,a=(0,k.Z)(e,P);return r?(0,h.jsxs)(g.Z,(0,f.Z)((0,f.Z)({direction:"row",alignItems:"center",sx:(0,f.Z)((0,f.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),l)},a),{},{children:[(0,h.jsx)(w.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,h.jsxs)(R.Z,{variant:"subtitle1",sx:(0,f.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[r," selected"]}),t&&t]})):null}var F=t(41493),I=t(83929),L=t(67426),B=["dense","onChangeDense","rowsPerPageOptions","sx"];function _(e){var n=e.dense,t=e.onChangeDense,i=e.rowsPerPageOptions,r=void 0===i?[5,10,25]:i,o=e.sx,l=(0,k.Z)(e,B);return(0,h.jsxs)(b.Z,{sx:(0,f.Z)({position:"relative"},o),children:[(0,h.jsx)(F.Z,(0,f.Z)({rowsPerPageOptions:r,component:"div"},l)),t&&(0,h.jsx)(I.Z,{label:"Dense",control:(0,h.jsx)(L.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},54386:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(29439),r=t(65964),o=t(73709),l=t(47313),a=t(58467),s=t(2135),c=t(70178),d=t(24193),u=t(73428),h=t(5297),x=t(65280),f=t(19536),p=t(51629),g=t(61689),m=t(47131),Z=t(66835),j=t(57861),v=t(48175),w=(t(81887),t(8730)),C=t(53261),b=t(58772),S=t(38875),y=t(50152),k=t(54045),R=t(24076),P=t(67478),D=t(44758),F=t(35898),I=t(61113),L=t(51405),B=(t(86259),t(22608)),_=t(46417);function A(e){var n=e.row,t=e.selected,r=e.onEditRow,o=e.onSelectRow,a=e.onDeleteRow,s=n.name,c=n.email,u=n.description,h=n.phone,x=(0,l.useState)(!1),f=(0,i.Z)(x,2),p=f[0],g=f[1],Z=(0,l.useState)(null),j=(0,i.Z)(Z,2),v=j[0],C=j[1],S=function(){C(null)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(R.Z,{hover:!0,selected:t,children:[(0,_.jsx)(P.Z,{padding:"checkbox",children:(0,_.jsx)(D.Z,{checked:t,onClick:o})}),(0,_.jsx)(P.Z,{children:(0,_.jsx)(F.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,_.jsx)(I.Z,{variant:"subtitle2",noWrap:!0,children:s})})}),(0,_.jsx)(P.Z,{align:"left",children:c}),(0,_.jsx)(P.Z,{align:"left",children:u}),(0,_.jsx)(P.Z,{children:(0,_.jsx)(F.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,_.jsx)(I.Z,{variant:"subtitle2",noWrap:!0,children:h})})}),(0,_.jsx)(P.Z,{align:"right",children:(0,_.jsx)(m.Z,{color:v?"inherit":"default",onClick:function(e){C(e.currentTarget)},children:(0,_.jsx)(w.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,_.jsxs)(B.Z,{open:v,onClose:S,arrow:"right-top",sx:{width:140},children:[(0,_.jsxs)(L.Z,{onClick:function(){g(!0),S()},sx:{color:"error.main"},children:[(0,_.jsx)(w.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,_.jsxs)(L.Z,{onClick:function(){r(),S()},children:[(0,_.jsx)(w.Z,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,_.jsx)(b.Z,{open:p,onClose:function(){g(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,_.jsx)(d.Z,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}var O=t(24631),W=t(41727);function N(e){var n=e.isFiltered,t=e.filterName,i=(e.filterRole,e.optionsRole,e.onFilterName),r=(e.onFilterRole,e.onResetFilter);return(0,_.jsxs)(F.Z,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:[(0,_.jsx)(O.Z,{fullWidth:!0,value:t,onChange:i,placeholder:"Search...",InputProps:{startAdornment:(0,_.jsx)(W.Z,{position:"start",children:(0,_.jsx)(w.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),n&&(0,_.jsx)(d.Z,{color:"error",sx:{flexShrink:0},onClick:r,startIcon:(0,_.jsx)(w.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}var T=t(78341),E=[],q=[{id:"name",label:"Name",align:"left"},{id:"email",label:"Email",align:"left"},{id:"description",label:"Description",align:"left"},{id:"phone",label:"phone",align:"center"},{id:""}];function M(){var e=(0,k.x6)(),n=e.dense,t=e.page,R=e.order,P=e.orderBy,D=e.rowsPerPage,F=e.setPage,I=e.selected,L=e.setSelected,B=e.onSelectRow,O=e.onSelectAllRows,W=e.onSort,M=e.onChangeDense,Q=e.onChangePage,K=e.onChangeRowsPerPage,U=(0,y.K$)().themeStretch,G=(0,a.s0)(),z=(0,T.KX)(),$=z.data,H=(z.isLoading,(0,l.useState)([])),X=(0,i.Z)(H,2),V=X[0],J=X[1];(0,l.useEffect)((function(){$&&J($.data.complaints)}),[$]);var Y=(0,l.useState)(!1),ee=(0,i.Z)(Y,2),ne=ee[0],te=ee[1],ie=(0,l.useState)(""),re=(0,i.Z)(ie,2),oe=re[0],le=re[1],ae=(0,l.useState)("all"),se=(0,i.Z)(ae,2),ce=se[0],de=se[1],ue=(0,l.useState)("all"),he=(0,i.Z)(ue,2),xe=he[0],fe=he[1],pe=function(e){var n=e.inputData,t=e.comparator,i=e.filterName,r=e.filterStatus,o=e.filterRole,l=n.map((function(e,n){return[e,n]}));l.sort((function(e,n){var i=t(e[0],n[0]);return 0!==i?i:e[1]-n[1]})),n=l.map((function(e){return e[0]})),i&&(n=n.filter((function(e){return-1!==e.title.ar.toLowerCase().indexOf(i.toLowerCase())})));"all"!==r&&(n=n.filter((function(e){return e.active===r})));"all"!==o&&(n=n.filter((function(e){return e.role===o})));return n}({inputData:V,comparator:(0,k.sQ)(R,P),filterName:oe,filterRole:ce,filterStatus:xe}),ge=pe.slice(t*D,t*D+D),me=n?52:72,Ze=""!==oe||"all"!==ce||"all"!==xe,je=!pe.length&&!!oe||!pe.length&&!!ce||!pe.length&&!!xe,ve=function(){te(!1)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.ql,{children:(0,_.jsx)("title",{children:" Complaint: List | Rehltk"})}),(0,_.jsxs)(c.Z,{maxWidth:!U&&"lg",children:[(0,_.jsx)(S.Z,{heading:"Complaint List",links:[{name:"Dashboard",href:v.vB.root},{name:"complaint",href:v.vB.complaint.root},{name:"Order List"}],action:(0,_.jsx)(d.Z,{component:s.rU,to:v.vB.complaint.new,variant:"contained",startIcon:(0,_.jsx)(w.Z,{icon:"eva:plus-fill"}),children:"New Complaint"})}),(0,_.jsxs)(u.Z,{children:[(0,_.jsx)(h.Z,{value:xe,onChange:function(e,n){F(0),fe(n)},sx:{px:2,bgcolor:"background.neutral"},children:E.map((function(e){return(0,_.jsx)(x.Z,{label:e,value:e},e)}))}),(0,_.jsx)(f.Z,{}),(0,_.jsx)(N,{isFiltered:Ze,filterName:oe,filterRole:ce,onFilterName:function(e){F(0),le(e.target.value)},onFilterRole:function(e){F(0),de(e.target.value)},onResetFilter:function(){le(""),de("all"),fe("all")}}),(0,_.jsxs)(p.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,_.jsx)(k.Z4,{dense:n,numSelected:I.length,rowCount:V.length,onSelectAllRows:function(e){return O(e,V.map((function(e){return e.id})))},action:(0,_.jsx)(g.Z,{title:"Delete",children:(0,_.jsx)(m.Z,{color:"primary",onClick:function(){te(!0)},children:(0,_.jsx)(w.Z,{icon:"eva:trash-2-outline"})})})}),(0,_.jsx)(C.Z,{children:(0,_.jsxs)(Z.Z,{size:n?"small":"medium",sx:{minWidth:800},children:[(0,_.jsx)(k.K,{order:R,orderBy:P,headLabel:q,rowCount:V.length,numSelected:I.length,onSort:W,onSelectAllRows:function(e){return O(e,V.map((function(e){return e.id})))}}),(0,_.jsxs)(j.Z,{children:[pe.slice(t*D,t*D+D).map((function(e){return(0,_.jsx)(A,{row:e,selected:I.includes(e.id),onSelectRow:function(){return B(e.id)},onDeleteRow:function(){return function(e){var n=V.filter((function(n){return n.id!==e}));L([]),J(n),t>0&&ge.length<2&&F(t-1)}(e.id)},onEditRow:function(){return n=e.name,void G(v.vB.user.edit((0,o.o)(n)));var n}},e.id)})),(0,_.jsx)(k.$W,{height:me,emptyRows:(0,k.fQ)(t,D,V.length)}),(0,_.jsx)(k.et,{isNotFound:je})]})]})})]}),(0,_.jsx)(k.S_,{count:pe.length,page:t,rowsPerPage:D,onPageChange:Q,onRowsPerPageChange:K,dense:n,onChangeDense:M})]})]}),(0,_.jsx)(b.Z,{open:ne,onClose:ve,title:"Delete",content:(0,_.jsxs)(_.Fragment,{children:["Are you sure want to delete"," ",(0,_.jsxs)("strong",{children:[" ",I.length," "]})," items?"]}),action:(0,_.jsx)(d.Z,{variant:"contained",color:"error",onClick:function(){!function(e){var n=V.filter((function(n){return!e.includes(n.id)}));if(L([]),J(n),t>0)if(e.length===ge.length)F(t-1);else if(e.length===pe.length)F(0);else if(e.length>ge.length){var i=Math.ceil((V.length-e.length)/D)-1;F(i)}}(I),ve()},children:"Delete"})})]})}},78341:function(e,n,t){t.d(n,{H9:function(){return l},KX:function(){return r},VP:function(){return o},b5:function(){return s},pH:function(){return a}});var i=t(38452).hi.injectEndpoints({reducerPath:"apiUser",tagTypes:["complaint","addComplaint"],endpoints:function(e){return{getComplaint:e.query({query:function(){return"/complaints"},providesTags:["complaint"]}),getComplaintId:e.query({query:function(e){return"/complaints/".concat(e)},providesTags:["complaint"]}),addComplaint:e.mutation({query:function(e){return{url:"/complaints",method:"POST",body:e,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["complaint"]}),editComplaint:e.mutation({query:function(e){var n=e.formData,t=e.id;return{url:"/complaints/".concat(t),method:"put",body:n,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["complaint"]}),deleteComplaint:e.mutation({query:function(n){return{url:"/complaints/".concat(n),method:"delete",body:e}},invalidatesTags:["complaint"]})}}}),r=i.useGetComplaintQuery,o=i.useAddComplaintMutation,l=i.useEditComplaintMutation,a=i.useGetComplaintIdQuery,s=i.useDeleteComplaintMutation}}]);