"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9779],{58772:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(1413),r=t(45987),o=t(94469),l=t(33604),a=t(96467),s=t(4117),c=t(24193),d=t(46417),u=["title","content","action","open","onClose"];function h(e){var n=e.title,t=e.content,h=e.action,x=e.open,f=e.onClose,p=(0,r.Z)(e,u);return(0,d.jsxs)(o.Z,(0,i.Z)((0,i.Z)({fullWidth:!0,maxWidth:"xs",open:x,onClose:f},p),{},{children:[(0,d.jsx)(l.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(a.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(s.Z,{children:[h,(0,d.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:f,children:"Cancel"})]})]}))}},38875:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),r=t(45987),o=t(57829),l=t(35898),a=t(61113),s=t(3404),c=t(90891),d=t(2135),u=t(46417);function h(e){var n=e.link,t=e.activeLast,r=e.disabled,l=n.name,a=n.href,s=n.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),l]});return a?(0,u.jsx)(c.Z,{component:d.rU,to:a,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,t=e.action,d=e.heading,f=e.moreLink,g=e.activeLast,m=e.sx,Z=(0,r.Z)(e,x),v=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,i.Z)({mb:5},m),children:[(0,u.jsxs)(l.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(p,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:g,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(o.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},60656:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),r=t(45987),o=t(35898),l=t(61113),a=t(59063),s=t(46417),c=["title","description","img","sx"];function d(e){var n=e.title,t=e.description,d=e.img,u=e.sx,h=(0,r.Z)(e,c);return(0,s.jsxs)(o.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,s.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,s.jsx)(l.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,s.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},54045:function(e,n,t){function i(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function r(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function o(e,n){return"desc"===e?function(e,t){return r(e,t,n)}:function(e,t){return-r(e,t,n)}}t.d(n,{$W:function(){return v},K:function(){return y},et:function(){return x},S_:function(){return B},Z4:function(){return D},hM:function(){return Z},fQ:function(){return i},sQ:function(){return o},x6:function(){return s}});var l=t(29439),a=t(47313);function s(e){var n=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,l.Z)(n,2),i=t[0],r=t[1],o=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),s=(0,l.Z)(o,2),c=s[0],d=s[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,l.Z)(u,2),x=h[0],f=h[1],p=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),g=(0,l.Z)(p,2),m=g[0],Z=g[1],v=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,l.Z)(v,2),w=j[0],C=j[1],b=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),S=(0,l.Z)(b,2),y=S[0],k=S[1],R=(0,a.useCallback)((function(e){""!==e&&(f(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),P=(0,a.useCallback)((function(e){var n=y.indexOf(e),t=[];-1===n?t=t.concat(y,e):0===n?t=t.concat(y.slice(1)):n===y.length-1?t=t.concat(y.slice(0,-1)):n>0&&(t=t.concat(y.slice(0,n),y.slice(n+1))),k(t)}),[y]),D=(0,a.useCallback)((function(e,n){k(e?n:[])}),[]),_=(0,a.useCallback)((function(e,n){Z(n)}),[]),F=(0,a.useCallback)((function(e){Z(0),C(parseInt(e.target.value,10))}),[]),L=(0,a.useCallback)((function(e){r(e.target.checked)}),[]);return{dense:i,order:x,page:m,orderBy:c,rowsPerPage:w,selected:y,onSelectRow:P,onSelectAllRows:D,onSort:R,onChangePage:_,onChangeDense:L,onChangeRowsPerPage:F,setPage:Z,setDense:r,setOrder:f,setOrderBy:d,setSelected:k,setRowsPerPage:C}}var c=t(24076),d=t(67478),u=t(60656),h=t(46417);function x(e){var n=e.isNotFound;return(0,h.jsx)(c.Z,{children:n?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var f=t(1413),p=t(36459),g=t(35898),m=t(84488);function Z(e){var n=Object.assign({},((0,p.Z)(e),e));return(0,h.jsx)(c.Z,(0,f.Z)((0,f.Z)({},n),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(g.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(m.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(m.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(m.Z,{variant:"text",width:160,height:20})]})})}))}function v(e){var n=e.emptyRows,t=e.height;return n?(0,h.jsx)(c.Z,{sx:(0,f.Z)({},t&&{height:t*n}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var j=t(23477),w=t(44758),C=t(82558),b=t(57829),S={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function y(e){var n=e.order,t=e.orderBy,i=e.rowCount,r=void 0===i?0:i,o=e.headLabel,l=e.numSelected,a=void 0===l?0:l,s=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(j.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(w.Z,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:function(e){return u(e.target.checked)}})}),o.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,h.jsxs)(C.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return s(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,h.jsx)(b.Z,{sx:(0,f.Z)({},S),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var k=t(45987),R=t(61113),P=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function D(e){var n=e.dense,t=e.action,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,l=e.sx,a=(0,k.Z)(e,P);return r?(0,h.jsxs)(g.Z,(0,f.Z)((0,f.Z)({direction:"row",alignItems:"center",sx:(0,f.Z)((0,f.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),l)},a),{},{children:[(0,h.jsx)(w.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,h.jsxs)(R.Z,{variant:"subtitle1",sx:(0,f.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[r," selected"]}),t&&t]})):null}var _=t(41493),F=t(83929),L=t(67426),I=["dense","onChangeDense","rowsPerPageOptions","sx"];function B(e){var n=e.dense,t=e.onChangeDense,i=e.rowsPerPageOptions,r=void 0===i?[5,10,25]:i,o=e.sx,l=(0,k.Z)(e,I);return(0,h.jsxs)(b.Z,{sx:(0,f.Z)({position:"relative"},o),children:[(0,h.jsx)(_.Z,(0,f.Z)({rowsPerPageOptions:r,component:"div"},l)),t&&(0,h.jsx)(F.Z,{label:"Dense",control:(0,h.jsx)(L.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},69779:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(29439),r=t(65964),o=t(73709),l=t(47313),a=t(58467),s=t(2135),c=t(70178),d=t(24193),u=t(73428),h=t(5297),x=t(65280),f=t(19536),p=t(51629),g=t(61689),m=t(47131),Z=t(66835),v=t(57861),j=t(48175),w=(t(81887),t(8730)),C=t(53261),b=t(58772),S=t(38875),y=t(50152),k=t(54045),R=t(24076),P=t(67478),D=t(44758),_=t(51405),F=(t(86259),t(22608)),L=t(46417);function I(e){var n=e.row,t=e.selected,r=e.onEditRow,o=e.onSelectRow,a=e.onDeleteRow,s=n.name,c=n.email,u=n.phone,h=n.description,x=(0,l.useState)(!1),f=(0,i.Z)(x,2),p=f[0],g=f[1],Z=(0,l.useState)(null),v=(0,i.Z)(Z,2),j=v[0],C=v[1],S=function(){C(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(R.Z,{hover:!0,selected:t,children:[(0,L.jsx)(P.Z,{padding:"checkbox",children:(0,L.jsx)(D.Z,{checked:t,onClick:o})}),(0,L.jsx)(P.Z,{align:"left",children:s}),(0,L.jsx)(P.Z,{align:"left",children:c}),(0,L.jsx)(P.Z,{align:"left",children:h}),(0,L.jsx)(P.Z,{children:u}),(0,L.jsx)(P.Z,{align:"left",children:(0,L.jsx)(m.Z,{color:j?"inherit":"default",onClick:function(e){C(e.currentTarget)},children:(0,L.jsx)(w.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,L.jsxs)(F.Z,{open:j,onClose:S,arrow:"right-top",sx:{width:140},children:[(0,L.jsxs)(_.Z,{onClick:function(){g(!0),S()},sx:{color:"error.main"},children:[(0,L.jsx)(w.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,L.jsxs)(_.Z,{onClick:function(){r(),S()},children:[(0,L.jsx)(w.Z,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,L.jsx)(b.Z,{open:p,onClose:function(){g(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,L.jsx)(d.Z,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})}var B=t(35898),A=t(24631),N=t(41727);function O(e){var n=e.isFiltered,t=e.filterName,i=(e.filterRole,e.onFilterName),r=(e.onFilterRole,e.onResetFilter);return(0,L.jsxs)(B.Z,{spacing:2,alignItems:"center",direction:{xs:"column",sm:"row"},sx:{px:2.5,py:3},children:[(0,L.jsx)(A.Z,{fullWidth:!0,value:t,onChange:i,placeholder:"Search...",InputProps:{startAdornment:(0,L.jsx)(N.Z,{position:"start",children:(0,L.jsx)(w.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),n&&(0,L.jsx)(d.Z,{color:"error",sx:{flexShrink:0},onClick:r,startIcon:(0,L.jsx)(w.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}var T=t(78341),W=[],E=[{id:"name",label:"Name",align:"left"},{id:"email",label:"Email",align:"left"},{id:"description",label:"Description",align:"left"},{id:"phone",label:"phone",align:"center"},{id:""}];function q(){var e,n=(0,T.KX)(),t=n.data,R=n.isLoading,P=(0,k.x6)(),D=P.dense,_=P.page,F=P.order,B=P.orderBy,A=P.rowsPerPage,N=P.setPage,q=P.selected,M=P.setSelected,Q=P.onSelectRow,K=P.onSelectAllRows,U=P.onSort,G=P.onChangeDense,z=P.onChangePage,$=P.onChangeRowsPerPage,H=(0,y.K$)().themeStretch,X=(0,a.s0)(),V=(0,l.useState)([]),J=(0,i.Z)(V,2),Y=J[0],ee=J[1];(0,l.useEffect)((function(){t&&ee(t.data.complaints)}),[t]);var ne=(0,l.useState)(!1),te=(0,i.Z)(ne,2),ie=te[0],re=te[1],oe=(0,l.useState)(""),le=(0,i.Z)(oe,2),ae=le[0],se=le[1],ce=(0,l.useState)("all"),de=(0,i.Z)(ce,2),ue=de[0],he=de[1],xe=(0,l.useState)("all"),fe=(0,i.Z)(xe,2),pe=fe[0],ge=fe[1],me=function(e){var n,t=e.inputData,i=e.comparator,r=e.filterName,o=e.filterStatus,l=e.filterRole,a=null===(n=t)||void 0===n?void 0:n.map((function(e,n){return[e,n]}));null===a||void 0===a||a.sort((function(e,n){var t=i(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),t=null===a||void 0===a?void 0:a.map((function(e){return e[0]})),r&&(t=t.filter((function(e){return-1!==e.title.ar.toLowerCase().indexOf(r.toLowerCase())})));"all"!==o&&(t=t.filter((function(e){return e.active===o})));"all"!==l&&(t=t.filter((function(e){return e.role===l})));return t}({inputData:Y,comparator:(0,k.sQ)(F,B),filterName:ae,filterRole:ue,filterStatus:pe}),Ze=null===me||void 0===me?void 0:me.slice(_*A,_*A+A),ve=D?52:72,je=""!==ae||"all"!==ue||"all"!==pe,we=!(null!==me&&void 0!==me&&me.length)&&!!ae||!(null!==me&&void 0!==me&&me.length)&&!!ue||!(null!==me&&void 0!==me&&me.length)&&!!pe,Ce=function(){re(!1)},be=(0,T.b5)(),Se=(0,i.Z)(be,1)[0];return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(r.ql,{children:(0,L.jsx)("title",{children:" Complaint: List | Rehltk"})}),(0,L.jsxs)(c.Z,{maxWidth:!H&&"lg",children:[(0,L.jsx)(S.Z,{heading:"Complaint List",links:[{name:"Dashboard",href:j.vB.root},{name:"complaint",href:j.vB.complaint.root},{name:"List"}],action:(0,L.jsx)(d.Z,{component:s.rU,to:j.vB.complaint.new,variant:"contained",startIcon:(0,L.jsx)(w.Z,{icon:"eva:plus-fill"}),children:"New Complaint"})}),(0,L.jsxs)(u.Z,{children:[(0,L.jsx)(h.Z,{value:pe,onChange:function(e,n){N(0),ge(n)},sx:{px:2,bgcolor:"background.neutral"},children:W.map((function(e){return(0,L.jsx)(x.Z,{label:e,value:e},e)}))}),(0,L.jsx)(f.Z,{}),(0,L.jsx)(O,{isFiltered:je,filterName:ae,filterRole:ue,onFilterName:function(e){N(0),se(e.target.value)},onFilterRole:function(e){N(0),he(e.target.value)},onResetFilter:function(){se(""),he("all"),ge("all")}}),(0,L.jsxs)(p.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,L.jsx)(k.Z4,{dense:D,numSelected:null===q||void 0===q?void 0:q.length,rowCount:null===Y||void 0===Y?void 0:Y.length,onSelectAllRows:function(e){return K(e,null===Y||void 0===Y?void 0:Y.map((function(e){return e.id})))},action:(0,L.jsx)(g.Z,{title:"Delete",children:(0,L.jsx)(m.Z,{color:"primary",onClick:function(){re(!0)},children:(0,L.jsx)(w.Z,{icon:"eva:trash-2-outline"})})})}),(0,L.jsx)(C.Z,{children:(0,L.jsxs)(Z.Z,{size:D?"small":"medium",sx:{minWidth:800},children:[(0,L.jsx)(k.K,{order:F,orderBy:B,headLabel:E,rowCount:null===Y||void 0===Y?void 0:Y.length,numSelected:null===q||void 0===q?void 0:q.length,onSort:U,onSelectAllRows:function(e){return K(e,null===Y||void 0===Y?void 0:Y.map((function(e){return e.id})))}}),R?"Loading...":(0,L.jsxs)(v.Z,{children:[null===me||void 0===me||null===(e=me.slice(_*A,_*A+A))||void 0===e?void 0:e.map((function(e){return(0,L.jsx)(I,{row:e,selected:q.includes(e._id),onSelectRow:function(){return Q(e._id)},onDeleteRow:function(){return function(e){Se(e);var n=Y.filter((function(n){return n._id!==e}));M([]),ee(n),_>0&&Ze.length<2&&N(_-1)}(e._id)},onEditRow:function(){return n=e._id,void X(j.vB.complaint.edit((0,o.o)(n)));var n}},e._id)})),(0,L.jsx)(k.$W,{height:ve,emptyRows:(0,k.fQ)(_,A,null===Y||void 0===Y?void 0:Y.length)}),(0,L.jsx)(k.et,{isNotFound:we})]})]})})]}),(0,L.jsx)(k.S_,{count:null===me||void 0===me?void 0:me.length,page:_,rowsPerPage:A,onPageChange:z,onRowsPerPageChange:$,dense:D,onChangeDense:G})]})]}),(0,L.jsx)(b.Z,{open:ie,onClose:Ce,title:"Delete",content:(0,L.jsxs)(L.Fragment,{children:["Are you sure want to delete"," ",(0,L.jsxs)("strong",{children:[" ",q.length," "]})," items?"]}),action:(0,L.jsx)(d.Z,{variant:"contained",color:"error",onClick:function(){!function(e){var n=Y.filter((function(n){return!e.includes(n._id)}));if(M([]),ee(n),_>0)if(e.length===Ze.length)N(_-1);else if(e.length===me.length)N(0);else if(e.length>Ze.length){var t=Math.ceil((Y.length-e.length)/A)-1;N(t)}}(q),Ce()},children:"Delete"})})]})}},78341:function(e,n,t){t.d(n,{H9:function(){return l},KX:function(){return r},VP:function(){return o},b5:function(){return s},pH:function(){return a}});var i=t(38452).hi.injectEndpoints({reducerPath:"apiUser",tagTypes:["complaint","addComplaint"],endpoints:function(e){return{getComplaint:e.query({query:function(){return"/complaints"},providesTags:["complaint"]}),getComplaintId:e.query({query:function(e){return"/complaints/".concat(e)},providesTags:["complaint"]}),addComplaint:e.mutation({query:function(e){return{url:"/complaints",method:"POST",body:e,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["complaint"]}),editComplaint:e.mutation({query:function(e){var n=e.formData,t=e.id;return{url:"/complaints/".concat(t),method:"put",body:n,headers:{"Content-type":"application/json; charset=UTF-8"}}},invalidatesTags:["complaint"]}),deleteComplaint:e.mutation({query:function(n){return{url:"/complaints/".concat(n),method:"delete",body:e}},invalidatesTags:["complaint"]})}}}),r=i.useGetComplaintQuery,o=i.useAddComplaintMutation,l=i.useEditComplaintMutation,a=i.useGetComplaintIdQuery,s=i.useDeleteComplaintMutation}}]);