"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[4892],{49372:function(e,t,n){n.d(t,{fY:function(){return l},yM:function(){return d},hN:function(){return b}});var i=n(1413),a=n(17592),o=n(17551),r=n(24631),s=n(46417),l=(0,a.ZP)((function(e){return(0,s.jsx)(r.Z,(0,i.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var t=e.theme;return{"& fieldset":{display:"none"},"& select":(0,i.Z)((0,i.Z)({},t.typography.subtitle2),{},{padding:t.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(t.shape.borderRadius),backgroundColor:(0,o.Fq)(t.palette.grey[500],.08)}}})),c=n(4942),d=(0,a.ZP)(r.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var t=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:t,border:"solid 1px ".concat((0,o.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,i.Z)({boxShadow:n.customShadows.z20},t&&(0,c.Z)({},n.breakpoints.up("sm"),{width:t+60}))}}})),u=n(45987),p=n(75192),x=n.n(p),h=n(47313),f=n(35898),m=n(47131),Z=n(23116),v=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],g=(0,h.forwardRef)((function(e,t){var n=e.quantity,a=e.onIncrease,r=e.onDecrease,l=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,p=(0,u.Z)(e,v);return(0,s.jsxs)(f.Z,(0,i.Z)((0,i.Z)({ref:t,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,i.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,o.Fq)(e.palette.grey[500],.32))}},d)},p),{},{children:[(0,s.jsx)(m.Z,{size:"small",color:"inherit",onClick:r,disabled:c,sx:{color:"text.secondary"},children:(0,s.jsx)(Z.Z,{icon:"eva:minus-fill",width:16})}),n,(0,s.jsx)(m.Z,{size:"small",color:"inherit",onClick:a,disabled:l,sx:{color:"text.secondary"},children:(0,s.jsx)(Z.Z,{icon:"eva:plus-fill",width:16})})]}))}));g.propTypes={sx:x().object,onDecrease:x().func,onIncrease:x().func,quantity:x().number,disabledDecrease:x().bool,disabledIncrease:x().bool};var b=g},50414:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var i=n(1413),a=n(93433),o=n(29439),r=n(65964),s=n(47313),l=n(19860),c=n(57829),d=n(70178),u=n(9019),p=n(35898),x=n(61113),h=n(48175),f=n(66281),m=n(81887),Z=n(23116),v=n(53261),g=n(38789),b=n(50152),j=n(45987),y=n(76017),w=n(63585),S=n(44758),C=n(47131),k=n(51405),D=n(19536),M=n(41530),R=n(76221),P=n(75868),I=n(41034),N=n(22608),T=n(34345),O=n(29433),F=n(46417),W=["file","onDelete","sx"];function A(e){var t,n=e.file,a=e.onDelete,r=e.sx,l=(0,j.Z)(e,W),d=(0,I.Ds)().enqueueSnackbar,u=(0,M.Z)().copy,h=(0,f.Z)("up","sm"),m=(0,s.useState)(""),v=(0,o.Z)(m,2),g=v[0],b=v[1],A=(0,s.useState)(null),_=(0,o.Z)(A,2),z=_[0],E=_[1],L=(0,s.useState)(n.isFavorited),q=(0,o.Z)(L,2),U=q[0],H=q[1],Y=(0,s.useState)(!1),B=(0,o.Z)(Y,2),G=B[0],J=B[1],$=(0,s.useState)(!1),Q=(0,o.Z)($,2),K=Q[0],V=Q[1],X=function(){H(!U)},ee=function(){V(!1)},te=function(){E(null)},ne=function(){d("Copied!"),u(n.url)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(p.Z,(0,i.Z)((0,i.Z)({spacing:h?1.5:2,direction:h?"row":"column",alignItems:h?"center":"flex-start",sx:(0,i.Z)((0,i.Z)({p:2.5,borderRadius:2,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.divider)},"&:hover":{bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}},h&&{p:1.5,borderRadius:1.5}),r)},l),{},{children:[(0,F.jsx)(T.ZP,{file:n.type}),(0,F.jsxs)(p.Z,{onClick:function(){V(!0)},sx:{width:1,flexGrow:{sm:1},minWidth:{sm:"1px"}},children:[(0,F.jsx)(x.Z,{variant:"subtitle2",noWrap:!0,children:n.name}),(0,F.jsxs)(p.Z,{spacing:.75,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled",mt:.5},children:[(0,F.jsxs)(c.Z,{children:[" ",(0,R.oe)(n.size)," "]}),(0,F.jsx)(c.Z,{sx:{width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),(0,F.jsxs)(c.Z,{children:[" ",(0,P.zM)(n.dateModified)," "]})]})]}),h&&(0,F.jsx)(y.Z,{max:4,sx:{mx:1.5,"& .MuiAvatarGroup-avatar":{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:null===n||void 0===n||null===(t=n.shared)||void 0===t?void 0:t.map((function(e){return(0,F.jsx)(w.Z,{alt:e.name,src:e.avatar},e.id)}))}),(0,F.jsxs)(c.Z,{sx:(0,i.Z)({top:8,right:8,flexShrink:0,position:"absolute"},h&&{position:"unset"}),children:[(0,F.jsx)(S.Z,{color:"warning",icon:(0,F.jsx)(Z.Z,{icon:"eva:star-outline"}),checkedIcon:(0,F.jsx)(Z.Z,{icon:"eva:star-fill"}),checked:U,onChange:X,sx:{p:.75}}),(0,F.jsx)(C.Z,{color:z?"inherit":"default",onClick:function(e){E(e.currentTarget)},children:(0,F.jsx)(Z.Z,{icon:"eva:more-vertical-fill"})})]})]})),(0,F.jsxs)(N.Z,{open:z,onClose:te,arrow:"right-top",sx:{width:160},children:[(0,F.jsxs)(k.Z,{onClick:function(){te(),ne()},children:[(0,F.jsx)(Z.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,F.jsxs)(k.Z,{onClick:function(){te(),J(!0)},children:[(0,F.jsx)(Z.Z,{icon:"eva:share-fill"}),"Share"]}),(0,F.jsx)(D.Z,{sx:{borderStyle:"dashed"}}),(0,F.jsxs)(k.Z,{onClick:function(){te(),a()},sx:{color:"error.main"},children:[(0,F.jsx)(Z.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]}),(0,F.jsx)(O.m$,{item:n,favorited:U,onFavorite:X,onCopyLink:ne,open:K,onClose:ee,onDelete:function(){ee(),a()}}),(0,F.jsx)(O.c0,{open:G,shared:n.shared,inviteEmail:g,onChangeInvite:function(e){b(e.target.value)},onCopyLink:ne,onClose:function(){J(!1),b("")}})]})}var _=n(73428),z=n(54641),E=n(49372),L=n(47284),q=["title","subheader","chart"];function U(e){var t=e.title,n=e.subheader,a=e.chart,r=(0,j.Z)(e,q),l=a.labels,d=a.colors,u=a.series,p=a.options,x=(0,s.useState)("Week"),h=(0,o.Z)(x,2),f=h[0],m=h[1],Z=(0,L.Q8)((0,i.Z)({chart:{stacked:!0},colors:d,stroke:{width:0},xaxis:{categories:"Week"===f&&l.week||"Month"===f&&l.month||l.year},tooltip:{y:{formatter:function(e){return(0,R.oe)(e)}}},plotOptions:{bar:{borderRadius:("Week"===f?8:"Month"===f&&6)||10,columnWidth:"20%"}}},p));return(0,F.jsxs)(_.Z,(0,i.Z)((0,i.Z)({},r),{},{children:[(0,F.jsx)(z.Z,{title:t,subheader:n,action:(0,F.jsx)(E.fY,{value:f,onChange:function(e){return m(e.target.value)},children:u.map((function(e){return(0,F.jsx)("option",{value:e.type,children:e.type},e.type)}))})}),u.map((function(e){return(0,F.jsx)(c.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.type===f&&(0,F.jsx)(L.ZP,{type:"bar",series:e.data,options:Z,height:364})},e.type)}))]}))}var H=n(79176),Y=["title","value","total","icon","sx"];function B(e){var t=e.title,n=e.value,a=e.total,o=e.icon,r=e.sx,s=(0,j.Z)(e,Y);return(0,F.jsxs)(_.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({p:3},r)},s),{},{children:[(0,F.jsx)(c.Z,{component:"img",src:o,sx:{width:48,height:48}}),(0,F.jsx)(x.Z,{variant:"h6",sx:{mt:3},children:t}),(0,F.jsx)(H.Z,{value:24,variant:"determinate",color:"inherit",sx:{my:2,height:6,"&::before":{bgcolor:"background.neutral",opacity:1}}}),(0,F.jsxs)(p.Z,{direction:"row",spacing:.5,justifyContent:"flex-end",children:[(0,F.jsx)(c.Z,{component:"span",sx:{typography:"body2",color:"text.disabled"},children:(0,R.oe)(n)}),(0,F.jsx)(c.Z,{component:"span",sx:{typography:"subtitle2"},children:(0,R.oe)(a)})]})]}))}var G=n(24193),J=n(59479),$=["sx"];function Q(e){var t=e.sx,n=(0,j.Z)(e,$);return(0,F.jsxs)(p.Z,(0,i.Z)((0,i.Z)({alignItems:"center",sx:(0,i.Z)({p:5,borderRadius:2,bgcolor:"background.neutral"},t)},n),{},{children:[(0,F.jsx)(J.$n,{}),(0,F.jsx)(G.Z,{size:"large",color:"warning",variant:"contained",sx:{mt:5,mb:2},children:"Upgrade Plan"}),(0,F.jsx)(x.Z,{variant:"caption",sx:{color:"text.disabled",textAlign:"center"},children:"Upgrade your plan and get more space"})]}))}var K=["data","total","chart"];function V(e){var t=e.data,n=e.total,a=e.chart,o=(0,j.Z)(e,K),r=(0,l.Z)(),s=a.colors,c=a.series,d=a.options,u=s||[r.palette.primary.light,r.palette.primary.main],h=(0,L.Q8)((0,i.Z)({chart:{offsetY:-16,sparkline:{enabled:!0}},grid:{padding:{top:24,bottom:24}},legend:{show:!1},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"56%"},dataLabels:{name:{offsetY:8},value:{offsetY:-40},total:{label:"Used of ".concat((0,R.oe)(n)),color:r.palette.text.disabled,fontSize:r.typography.body2.fontSize,fontWeight:r.typography.body2.fontWeight}}}},fill:{type:"gradient",gradient:{colorStops:[u].map((function(e){return[{offset:0,color:e[0]},{offset:100,color:e[1]}]}))}}},d));return(0,F.jsxs)(_.Z,(0,i.Z)((0,i.Z)({},o),{},{children:[(0,F.jsx)(L.ZP,{type:"radialBar",series:[c],options:h,height:360}),(0,F.jsx)(p.Z,{spacing:3,sx:{p:3},children:t.map((function(e){return(0,F.jsxs)(p.Z,{spacing:2,direction:"row",alignItems:"center",children:[(0,F.jsx)(w.Z,{variant:"rounded",sx:{bgcolor:"background.neutral",width:48,height:48,borderRadius:1.5},children:e.icon}),(0,F.jsxs)(p.Z,{spacing:.5,flexGrow:1,children:[(0,F.jsxs)(x.Z,{variant:"subtitle2",children:[" ",e.name," "]}),(0,F.jsxs)(x.Z,{variant:"caption",sx:{color:"text.disabled"},children:[e.filesCount," files"]})]}),(0,F.jsxs)(x.Z,{variant:"subtitle2",children:[" ",(0,R.oe)(e.usedStorage)," "]})]},e.name)}))})]}))}var X=24e9,ee={week:["Mon","Tue","Web","Thu","Fri","Sat","Sun"],month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:["2018","2019","2020","2021","2022"]};function te(){var e=(0,l.Z)(),t=(0,f.Z)("down","sm"),n=(0,b.K$)().themeStretch,j=(0,s.useState)(""),y=(0,o.Z)(j,2),w=y[0],S=y[1],C=(0,s.useState)([]),k=(0,o.Z)(C,2),D=k[0],M=k[1],R=(0,s.useState)(!1),P=(0,o.Z)(R,2),I=P[0],N=P[1],T=(0,s.useState)(!1),W=(0,o.Z)(T,2),_=W[0],z=W[1],E=function(){N(!1)},L=(0,s.useCallback)((function(e){var t=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));M([].concat((0,a.Z)(D),(0,a.Z)(t)))}),[D]),q=(0,F.jsx)(V,{total:X,chart:{series:76},data:[{name:"Images",usedStorage:X/2,filesCount:223,icon:(0,F.jsx)(c.Z,{component:"img",src:"/assets/icons/files/ic_img.svg"})},{name:"Media",usedStorage:X/5,filesCount:223,icon:(0,F.jsx)(c.Z,{component:"img",src:"/assets/icons/files/ic_video.svg"})},{name:"Documents",usedStorage:X/5,filesCount:223,icon:(0,F.jsx)(c.Z,{component:"img",src:"/assets/icons/files/ic_document.svg"})},{name:"Other",usedStorage:X/10,filesCount:223,icon:(0,F.jsx)(Z.Z,{icon:"eva:file-fill",width:24,sx:{color:"text.disabled"}})}]});return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r.ql,{children:(0,F.jsx)("title",{children:" General: File | Rehltk"})}),(0,F.jsx)(d.Z,{maxWidth:!n&&"xl",children:(0,F.jsxs)(u.ZP,{container:!0,spacing:3,children:[t&&(0,F.jsx)(u.ZP,{item:!0,xs:12,children:q}),(0,F.jsx)(u.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,F.jsx)(B,{title:"Dropbox",value:X/10,total:X,icon:"/assets/icons/apps/ic_dropbox.svg"})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,F.jsx)(B,{title:"Drive",value:X/5,total:X,icon:"/assets/icons/apps/ic_drive.svg"})}),(0,F.jsx)(u.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,F.jsx)(B,{title:"OneDrive",value:X/2,total:X,icon:"/assets/icons/apps/ic_onedrive.svg"})}),(0,F.jsxs)(u.ZP,{item:!0,xs:12,md:6,lg:8,children:[(0,F.jsx)(U,{title:"Data Activity",chart:{labels:ee,colors:[e.palette.primary.main,e.palette.error.main,e.palette.warning.main,e.palette.text.disabled],series:[{type:"Week",data:[{name:"Images",data:[20,34,48,65,37,48]},{name:"Media",data:[10,34,13,26,27,28]},{name:"Documents",data:[10,14,13,16,17,18]},{name:"Other",data:[5,12,6,7,8,9]}]},{type:"Month",data:[{name:"Images",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Media",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Documents",data:[10,34,13,56,77,88,99,77,45,12,43,34]},{name:"Other",data:[10,34,13,56,77,88,99,77,45,12,43,34]}]},{type:"Year",data:[{name:"Images",data:[10,34,13,56,77]},{name:"Media",data:[10,34,13,56,77]},{name:"Documents",data:[10,34,13,56,77]},{name:"Other",data:[10,34,13,56,77]}]}]}}),(0,F.jsxs)("div",{children:[(0,F.jsx)(O.WO,{title:"Folders",link:h.vB.fileManager,onOpen:function(){N(!0)},sx:{mt:5}}),(0,F.jsx)(v.Z,{children:(0,F.jsx)(p.Z,{direction:"row",spacing:3,sx:{pb:3},children:m.vg.map((function(e){return(0,F.jsx)(O.Fe,{folder:e,onDelete:function(){return console.log("DELETE",e.id)},sx:(0,i.Z)({},m.vg.length>3&&{minWidth:222})},e.id)}))})}),(0,F.jsx)(O.WO,{title:"Recent Files",link:h.vB.fileManager,onOpen:function(){z(!0)},sx:{mt:2}}),(0,F.jsx)(p.Z,{spacing:2,children:m.Ve.slice(0,5).map((function(e){return(0,F.jsx)(A,{file:e,onDelete:function(){return console.log("DELETE",e.id)}},e.id)}))})]})]}),(0,F.jsxs)(u.ZP,{item:!0,xs:12,md:6,lg:4,children:[(0,F.jsx)(g.un,{onDrop:L,placeholder:(0,F.jsxs)(p.Z,{spacing:.5,alignItems:"center",sx:{color:"text.disabled"},children:[(0,F.jsx)(Z.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,F.jsx)(x.Z,{variant:"body2",children:"Upload file"})]}),sx:{mb:3,py:2.5,width:"auto",height:"auto",borderRadius:1.5}}),(0,F.jsx)(c.Z,{sx:{display:{xs:"none",sm:"block"}},children:q}),(0,F.jsx)(Q,{sx:{mt:3}})]})]})}),(0,F.jsx)(O.UC,{open:_,onClose:function(){z(!1)}}),(0,F.jsx)(O.UC,{open:I,onClose:E,title:"New Folder",folderName:w,onChangeFolderName:function(e){S(e.target.value)},onCreate:function(){E(),S(""),console.log("CREATE NEW FOLDER",w)}})]})}},54641:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(4942),a=n(63366),o=n(87462),r=n(47313),s=n(83061),l=n(21921),c=n(61113),d=n(77342),u=n(17592),p=n(77430),x=n(32298);function h(e){return(0,x.Z)("MuiCardHeader",e)}var f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=n(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,o.Z)((n={},(0,i.Z)(n,"& .".concat(f.title),t.title),(0,i.Z)(n,"& .".concat(f.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=r.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardHeader"}),i=n.action,r=n.avatar,u=n.className,p=n.component,x=void 0===p?"div":p,f=n.disableTypography,y=void 0!==f&&f,w=n.subheader,S=n.subheaderTypographyProps,C=n.title,k=n.titleTypographyProps,D=(0,a.Z)(n,Z),M=(0,o.Z)({},n,{component:x,disableTypography:y}),R=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(M),P=C;null==P||P.type===c.Z||y||(P=(0,m.jsx)(c.Z,(0,o.Z)({variant:r?"body2":"h5",className:R.title,component:"span",display:"block"},k,{children:P})));var I=w;return null==I||I.type===c.Z||y||(I=(0,m.jsx)(c.Z,(0,o.Z)({variant:r?"body2":"body1",className:R.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:I}))),(0,m.jsxs)(v,(0,o.Z)({className:(0,s.Z)(R.root,u),as:x,ref:t,ownerState:M},D,{children:[r&&(0,m.jsx)(g,{className:R.avatar,ownerState:M,children:r}),(0,m.jsxs)(j,{className:R.content,ownerState:M,children:[P,I]}),i&&(0,m.jsx)(b,{className:R.action,ownerState:M,children:i})]}))}))},4117:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(63366),a=n(87462),o=n(47313),r=n(83061),s=n(21921),l=n(17592),c=n(77342),d=n(77430),u=n(32298);function p(e){return(0,u.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var x=n(46417),h=["className","disableSpacing"],f=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogActions"}),o=n.className,l=n.disableSpacing,d=void 0!==l&&l,u=(0,i.Z)(n,h),m=(0,a.Z)({},n,{disableSpacing:d}),Z=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(n,p,t)}(m);return(0,x.jsx)(f,(0,a.Z)({className:(0,r.Z)(Z.root,o),ownerState:m,ref:t},u))}))},96467:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(4942),a=n(63366),o=n(87462),r=n(47313),s=n(83061),l=n(21921),c=n(17592),d=n(77342),u=n(77430),p=n(32298);function x(e){return(0,p.Z)("MuiDialogContent",e)}(0,u.Z)("MuiDialogContent",["root","dividers"]);var h=n(93174),f=n(46417),m=["className","dividers"],Z=(0,c.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:(0,i.Z)({},".".concat(h.Z.root," + &"),{paddingTop:0}))})),v=r.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDialogContent"}),i=n.className,r=n.dividers,c=void 0!==r&&r,u=(0,a.Z)(n,m),p=(0,o.Z)({},n,{dividers:c}),h=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return(0,l.Z)(n,x,t)}(p);return(0,f.jsx)(Z,(0,o.Z)({className:(0,s.Z)(h.root,i),ownerState:p,ref:t},u))}))},93174:function(e,t,n){n.d(t,{a:function(){return o}});var i=n(77430),a=n(32298);function o(e){return(0,a.Z)("MuiDialogTitle",e)}var r=(0,i.Z)("MuiDialogTitle",["root"]);t.Z=r}}]);