"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6159],{33604:function(e,t,o){var a=o(87462),r=o(63366),n=o(47313),i=o(83061),l=o(21921),s=o(61113),c=o(17592),d=o(77342),u=o(93174),p=o(63909),f=o(46417),v=["className","id"],m=(0,c.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),g=n.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiDialogTitle"}),s=o.className,c=o.id,g=(0,r.Z)(o,v),Z=o,h=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},u.a,t)}(Z),b=n.useContext(p.Z).titleId,x=void 0===b?c:b;return(0,f.jsx)(m,(0,a.Z)({component:"h2",className:(0,i.Z)(h.root,s),ownerState:Z,ref:t,variant:"h6",id:x},g))}));t.Z=g},32600:function(e,t,o){o.d(t,{Z:function(){return Z}});var a=o(63366),r=o(87462),n=o(47313),i=o(83061),l=o(21921),s=o(51195),c=o(17592),d=o(77342),u=o(77430),p=o(32298);function f(e){return(0,p.Z)("MuiListItemAvatar",e)}(0,u.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var v=o(46417),m=["className"],g=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"flex-start"===o.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,r.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),Z=n.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiListItemAvatar"}),c=o.className,u=(0,a.Z)(o,m),p=n.useContext(s.Z),Z=(0,r.Z)({},o,{alignItems:p.alignItems}),h=function(e){var t=e.alignItems,o=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,l.Z)(a,f,o)}(Z);return(0,v.jsx)(g,(0,r.Z)({className:(0,i.Z)(h.root,c),ownerState:Z,ref:t},u))}))},78770:function(e,t,o){o.d(t,{Z:function(){return x}});var a=o(4942),r=o(63366),n=o(87462),i=o(47313),l=(o(96214),o(83061)),s=o(21921),c=o(17592),d=o(77342),u=o(91615);function p(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var f=o(77430),v=o(32298);function m(e){return(0,v.Z)("MuiToggleButtonGroup",e)}var g=(0,f.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),Z=o(46417),h=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],b=(0,c.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,a.Z)({},"& .".concat(g.grouped),t.grouped),(0,a.Z)({},"& .".concat(g.grouped),t["grouped".concat((0,u.Z)(o.orientation))]),t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,o=e.theme;return(0,n.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,a.Z)({},"& .".concat(g.grouped),(0,n.Z)({},"horizontal"===t.orientation?(0,a.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(g.selected," + .").concat(g.grouped,".").concat(g.selected),{borderLeft:0,marginLeft:0}):(0,a.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(g.selected," + .").concat(g.grouped,".").concat(g.selected),{borderTop:0,marginTop:0}))))})),x=i.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),a=o.children,c=o.className,f=o.color,v=void 0===f?"standard":f,g=o.disabled,x=void 0!==g&&g,R=o.exclusive,y=void 0!==R&&R,M=o.fullWidth,D=void 0!==M&&M,T=o.onChange,w=o.orientation,S=void 0===w?"horizontal":w,z=o.size,C=void 0===z?"medium":z,k=o.value,N=(0,r.Z)(o,h),W=(0,n.Z)({},o,{disabled:x,fullWidth:D,orientation:S,size:C}),B=function(e){var t=e.classes,o=e.orientation,a=e.fullWidth,r=e.disabled,n={root:["root","vertical"===o&&"vertical",a&&"fullWidth"],grouped:["grouped","grouped".concat((0,u.Z)(o)),r&&"disabled"]};return(0,s.Z)(n,m,t)}(W),I=function(e,t){if(T){var o,a=k&&k.indexOf(t);k&&a>=0?(o=k.slice()).splice(a,1):o=k?k.concat(t):[t],T(e,o)}},L=function(e,t){T&&T(e,k===t?null:t)};return(0,Z.jsx)(b,(0,n.Z)({role:"group",className:(0,l.Z)(B.root,c),ref:t,ownerState:W},N,{children:i.Children.map(a,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:(0,l.Z)(B.grouped,e.props.className),onChange:y?L:I,selected:void 0===e.props.selected?p(e.props.value,k):e.props.selected,size:e.props.size||C,fullWidth:D,color:e.props.color||v,disabled:e.props.disabled||x}):null}))}))}))},3789:function(e,t,o){o.d(t,{Z:function(){return R}});var a=o(4942),r=o(63366),n=o(87462),i=o(47313),l=o(83061),s=o(21921),c=o(17551),d=o(38743),u=o(91615),p=o(77342),f=o(17592),v=o(77430),m=o(32298);function g(e){return(0,m.Z)("MuiToggleButton",e)}var Z=(0,v.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),h=o(46417),b=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],x=(0,f.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,u.Z)(o.size))]]}})((function(e){var t,o,r=e.theme,i=e.ownerState,l="standard"===i.color?r.palette.text.primary:r.palette[i.color].main;return r.vars&&(l="standard"===i.color?r.vars.palette.text.primary:r.vars.palette[i.color].main,o="standard"===i.color?r.vars.palette.text.primaryChannel:r.vars.palette[i.color].mainChannel),(0,n.Z)({},r.typography.button,{borderRadius:(r.vars||r).shape.borderRadius,padding:11,border:"1px solid ".concat((r.vars||r).palette.divider),color:(r.vars||r).palette.action.active},i.fullWidth&&{width:"100%"},(t={},(0,a.Z)(t,"&.".concat(Z.disabled),{color:(r.vars||r).palette.action.disabled,border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)}),(0,a.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,a.Z)(t,"&.".concat(Z.selected),{color:l,backgroundColor:r.vars?"rgba(".concat(o," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(l,r.palette.action.selectedOpacity),"&:hover":{backgroundColor:r.vars?"rgba(".concat(o," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(l,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(o," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(l,r.palette.action.selectedOpacity)}}}),t),"small"===i.size&&{padding:7,fontSize:r.typography.pxToRem(13)},"large"===i.size&&{padding:15,fontSize:r.typography.pxToRem(15)})})),R=i.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiToggleButton"}),a=o.children,i=o.className,c=o.color,d=void 0===c?"standard":c,f=o.disabled,v=void 0!==f&&f,m=o.disableFocusRipple,Z=void 0!==m&&m,R=o.fullWidth,y=void 0!==R&&R,M=o.onChange,D=o.onClick,T=o.selected,w=o.size,S=void 0===w?"medium":w,z=o.value,C=(0,r.Z)(o,b),k=(0,n.Z)({},o,{color:d,disabled:v,disableFocusRipple:Z,fullWidth:y,size:S}),N=function(e){var t=e.classes,o=e.fullWidth,a=e.selected,r=e.disabled,n=e.size,i=e.color,l={root:["root",a&&"selected",r&&"disabled",o&&"fullWidth","size".concat((0,u.Z)(n)),i]};return(0,s.Z)(l,g,t)}(k);return(0,h.jsx)(x,(0,n.Z)({className:(0,l.Z)(N.root,i),disabled:v,focusRipple:!Z,ref:t,onClick:function(e){D&&(D(e,z),e.defaultPrevented)||M&&M(e,z)},onChange:M,value:z,ownerState:k,"aria-pressed":T},C,{children:a}))}))},51166:function(e,t,o){o.d(t,{Z:function(){return r}});var a=o(49294);function r(e){return(0,a.Z)({},e)}},98495:function(e,t,o){o.d(t,{Z:function(){return Z}});var a=o(73149),r=o(7781),n=o(409),i=o(75377),l=o(48883),s=o(93601),c=o(51166),d=o(49294),u=o(5025),p=o(34800),f=1440,v=2520,m=43200,g=86400;function Z(e,t){return(0,p.Z)(1,arguments),function(e,t,o){var Z,h;(0,p.Z)(2,arguments);var b=(0,a.j)(),x=null!==(Z=null!==(h=null===o||void 0===o?void 0:o.locale)&&void 0!==h?h:b.locale)&&void 0!==Z?Z:l.Z;if(!x.formatDistance)throw new RangeError("locale must contain formatDistance property");var R=(0,r.Z)(e,t);if(isNaN(R))throw new RangeError("Invalid time value");var y,M,D=(0,d.Z)((0,c.Z)(o),{addSuffix:Boolean(null===o||void 0===o?void 0:o.addSuffix),comparison:R});R>0?(y=(0,s.Z)(t),M=(0,s.Z)(e)):(y=(0,s.Z)(e),M=(0,s.Z)(t));var T,w=(0,i.Z)(M,y),S=((0,u.Z)(M)-(0,u.Z)(y))/1e3,z=Math.round((w-S)/60);if(z<2)return null!==o&&void 0!==o&&o.includeSeconds?w<5?x.formatDistance("lessThanXSeconds",5,D):w<10?x.formatDistance("lessThanXSeconds",10,D):w<20?x.formatDistance("lessThanXSeconds",20,D):w<40?x.formatDistance("halfAMinute",0,D):w<60?x.formatDistance("lessThanXMinutes",1,D):x.formatDistance("xMinutes",1,D):0===z?x.formatDistance("lessThanXMinutes",1,D):x.formatDistance("xMinutes",z,D);if(z<45)return x.formatDistance("xMinutes",z,D);if(z<90)return x.formatDistance("aboutXHours",1,D);if(z<f){var C=Math.round(z/60);return x.formatDistance("aboutXHours",C,D)}if(z<v)return x.formatDistance("xDays",1,D);if(z<m){var k=Math.round(z/f);return x.formatDistance("xDays",k,D)}if(z<g)return T=Math.round(z/m),x.formatDistance("aboutXMonths",T,D);if((T=(0,n.Z)(M,y))<12){var N=Math.round(z/m);return x.formatDistance("xMonths",N,D)}var W=T%12,B=Math.floor(T/12);return W<3?x.formatDistance("aboutXYears",B,D):W<9?x.formatDistance("overXYears",B,D):x.formatDistance("almostXYears",B+1,D)}(e,Date.now(),t)}},42026:function(e,t,o){o.d(t,{Z:function(){return n}});var a=o(93601),r=o(34800);function n(e){return(0,r.Z)(1,arguments),(0,a.Z)(e).getTime()}}}]);