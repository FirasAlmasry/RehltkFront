"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8656],{98656:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var l=t(29439),r=t(65964),i=t(73709),o=t(47313),a=t(58467),s=t(2135),c=t(70178),u=t(24193),d=t(73428),f=t(5297),h=t(65280),g=t(19536),m=t(51629),x=t(61689),p=t(47131),j=t(66835),v=t(57861),w=t(48175),Z=(t(81887),t(8730)),C=t(53261),R=t(58772),S=t(38875),b=t(50152),y=t(54045),k=t(67080),P=t(60670),D=t(46417),N=[],_=[{id:"companyName",label:"Company Name",align:"left"},{id:"name",label:"Name",align:"left"},{id:"email",label:"Email",align:"left"},{id:"address",label:"Address",align:"left"},{id:"phone",label:"phone",align:"center"},{id:"description",label:"Description",align:"left"},{id:""}];function L(){var e=(0,y.x6)(),n=e.dense,t=e.page,L=e.order,F=e.orderBy,B=e.rowsPerPage,A=e.setPage,E=e.selected,K=e.setSelected,O=e.onSelectRow,U=e.onSelectAllRows,W=e.onSort,Q=e.onChangeDense,T=e.onChangePage,$=e.onChangeRowsPerPage,q=(0,b.K$)().themeStretch,z=(0,a.s0)(),I=(0,P.LK)(),M=I.data;I.isLoading;console.log("\ud83d\ude80 ~ file: UserTableRow.js:33 ~ UserTableRow ~ data:",M);var Y=(0,o.useState)([]),G=(0,l.Z)(Y,2),H=G[0],J=G[1];(0,o.useEffect)((function(){M&&J(M.data.companyOrders)}),[M]);var V=(0,o.useState)(!1),X=(0,l.Z)(V,2),ee=X[0],ne=X[1],te=(0,o.useState)(""),le=(0,l.Z)(te,2),re=le[0],ie=le[1],oe=(0,o.useState)("all"),ae=(0,l.Z)(oe,2),se=ae[0],ce=ae[1],ue=(0,o.useState)("all"),de=(0,l.Z)(ue,2),fe=de[0],he=de[1],ge=function(e){var n=e.inputData,t=e.comparator,l=e.filterName,r=e.filterStatus,i=e.filterRole,o=n.map((function(e,n){return[e,n]}));o.sort((function(e,n){var l=t(e[0],n[0]);return 0!==l?l:e[1]-n[1]})),n=o.map((function(e){return e[0]})),l&&(n=n.filter((function(e){return-1!==e.title.ar.toLowerCase().indexOf(l.toLowerCase())})));"all"!==r&&(n=n.filter((function(e){return e.active===r})));"all"!==i&&(n=n.filter((function(e){return e.role===i})));return n}({inputData:H,comparator:(0,y.sQ)(L,F),filterName:re,filterRole:se,filterStatus:fe}),me=ge.slice(t*B,t*B+B),xe=n?52:72,pe=""!==re||"all"!==se||"all"!==fe,je=!ge.length&&!!re||!ge.length&&!!se||!ge.length&&!!fe,ve=function(){ne(!1)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(r.ql,{children:(0,D.jsx)("title",{children:" Company: List | Rehltk"})}),(0,D.jsxs)(c.Z,{maxWidth:!q&&"lg",children:[(0,D.jsx)(S.Z,{heading:"Company List",links:[{name:"Dashboard",href:w.vB.root},{name:"company",href:w.vB.company.root},{name:"Order List"}],action:(0,D.jsx)(u.Z,{component:s.rU,to:w.vB.company.new,variant:"contained",startIcon:(0,D.jsx)(Z.Z,{icon:"eva:plus-fill"}),children:"New Company"})}),(0,D.jsxs)(d.Z,{children:[(0,D.jsx)(f.Z,{value:fe,onChange:function(e,n){A(0),he(n)},sx:{px:2,bgcolor:"background.neutral"},children:N.map((function(e){return(0,D.jsx)(h.Z,{label:e,value:e},e)}))}),(0,D.jsx)(g.Z,{}),(0,D.jsx)(k.Y,{isFiltered:pe,filterName:re,filterRole:se,onFilterName:function(e){A(0),ie(e.target.value)},onFilterRole:function(e){A(0),ce(e.target.value)},onResetFilter:function(){ie(""),ce("all"),he("all")}}),(0,D.jsxs)(m.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,D.jsx)(y.Z4,{dense:n,numSelected:E.length,rowCount:H.length,onSelectAllRows:function(e){return U(e,H.map((function(e){return e.id})))},action:(0,D.jsx)(x.Z,{title:"Delete",children:(0,D.jsx)(p.Z,{color:"primary",onClick:function(){ne(!0)},children:(0,D.jsx)(Z.Z,{icon:"eva:trash-2-outline"})})})}),(0,D.jsx)(C.Z,{children:(0,D.jsxs)(j.Z,{size:n?"small":"medium",sx:{minWidth:800},children:[(0,D.jsx)(y.K,{order:L,orderBy:F,headLabel:_,rowCount:H.length,numSelected:E.length,onSort:W,onSelectAllRows:function(e){return U(e,H.map((function(e){return e.id})))}}),(0,D.jsxs)(v.Z,{children:[ge.slice(t*B,t*B+B).map((function(e){return(0,D.jsx)(k.R,{row:e,selected:E.includes(e.id),onSelectRow:function(){return O(e.id)},onDeleteRow:function(){return function(e){var n=H.filter((function(n){return n.id!==e}));K([]),J(n),t>0&&me.length<2&&A(t-1)}(e.id)},onEditRow:function(){return n=e.name,void z(w.vB.user.edit((0,i.o)(n)));var n}},e.id)})),(0,D.jsx)(y.$W,{height:xe,emptyRows:(0,y.fQ)(t,B,H.length)}),(0,D.jsx)(y.et,{isNotFound:je})]})]})})]}),(0,D.jsx)(y.S_,{count:ge.length,page:t,rowsPerPage:B,onPageChange:T,onRowsPerPageChange:$,dense:n,onChangeDense:Q})]})]}),(0,D.jsx)(R.Z,{open:ee,onClose:ve,title:"Delete",content:(0,D.jsxs)(D.Fragment,{children:["Are you sure want to delete"," ",(0,D.jsxs)("strong",{children:[" ",E.length," "]})," items?"]}),action:(0,D.jsx)(u.Z,{variant:"contained",color:"error",onClick:function(){!function(e){var n=H.filter((function(n){return!e.includes(n.id)}));if(K([]),J(n),t>0)if(e.length===me.length)A(t-1);else if(e.length===ge.length)A(0);else if(e.length>me.length){var l=Math.ceil((H.length-e.length)/B)-1;A(l)}}(E),ve()},children:"Delete"})})]})}}}]);