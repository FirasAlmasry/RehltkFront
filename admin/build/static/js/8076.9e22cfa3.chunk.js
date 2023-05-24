"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8076],{48076:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var s=r(65964),t=r(2135),i=r(61113),o=r(90891),a=r(48175),d=r(8730),u=r(74165),c=r(15861),l=r(29439),m=r(47313),h=r(21933),f=r(58467),p=r(75627),x=r(62563),w=r(35898),v=r(41727),j=r(47131),Z=r(32703),g=r(41034),y=r(50734),P=r(45330),b=r(46417);function k(){var e=(0,f.s0)(),n=(0,t.lr)(),r=(0,l.Z)(n,1)[0],s=(0,g.Ds)().enqueueSnackbar,i=(0,m.useState)(!1),o=(0,l.Z)(i,2),k=o[0],q=o[1],_=h.Ry().shape({password:h.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:h.Z_().required("Confirm password is required").oneOf([h.iH("password")],"Passwords must match")}),S=(0,p.cI)({mode:"onChange",resolver:(0,x.X)(_),defaultValues:{password:"",confirmPassword:""}}),C=S.handleSubmit,I=S.formState,R=I.isSubmitting,E=(I.errors,(0,P.c4)()),N=(0,l.Z)(E,1)[0];console.log({token:r.get("token"),userId:r.get("id")});var O=function(){var n=(0,c.Z)((0,u.Z)().mark((function n(t){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N({token:r.get("token"),userId:r.get("id"),password:t.password});case 3:sessionStorage.removeItem("email-recovery"),s("Change password success!"),e(a.vB.root),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsx)(y.ZP,{methods:S,onSubmit:C(O),children:(0,b.jsxs)(w.Z,{spacing:3,children:[(0,b.jsx)(y.au,{name:"password",label:"Password",type:k?"text":"password",InputProps:{endAdornment:(0,b.jsx)(v.Z,{position:"end",children:(0,b.jsx)(j.Z,{onClick:function(){return q(!k)},edge:"end",children:(0,b.jsx)(d.Z,{icon:k?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,b.jsx)(y.au,{name:"confirmPassword",label:"Confirm New Password",type:k?"text":"password",InputProps:{endAdornment:(0,b.jsx)(v.Z,{position:"end",children:(0,b.jsx)(j.Z,{onClick:function(){return q(!k)},edge:"end",children:(0,b.jsx)(d.Z,{icon:k?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,b.jsx)(Z.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:R,sx:{mt:3},children:"Update Password"})]})})}var q=r(42123);function _(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.ql,{children:(0,b.jsx)("title",{children:" New Password | Rehltk"})}),(0,b.jsx)(q.Jg,{sx:{mb:5,height:96}}),(0,b.jsx)(i.Z,{variant:"h3",paragraph:!0,children:"Request sent successfully!"}),(0,b.jsxs)(i.Z,{sx:{color:"text.secondary",mb:5},children:["We've sent a 6-digit confirmation email to your email.",(0,b.jsx)("br",{}),"Please enter the code in below box to verify your email."]}),(0,b.jsx)(k,{}),(0,b.jsxs)(i.Z,{variant:"body2",sx:{my:3},children:["Don\u2019t have a code? \xa0",(0,b.jsx)(o.Z,{variant:"subtitle2",children:"Resend code"})]}),(0,b.jsxs)(o.Z,{component:t.rU,to:a.EE.login,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[(0,b.jsx)(d.Z,{icon:"eva:chevron-left-fill",width:16}),"Return to sign in"]})]})}},45330:function(e,n,r){r.d(n,{PZ:function(){return t},c4:function(){return i}});var s=r(38452).hi.injectEndpoints({reducerPath:"apiUser",endpoints:function(e){return{resetPass:e.mutation({query:function(e){return{url:"auth/reset-password-request",method:"POST",body:e}}}),newPass:e.mutation({query:function(e){return{url:"auth/reset-password",method:"POST",body:e}}})}}}),t=s.useResetPassMutation,i=s.useNewPassMutation}}]);