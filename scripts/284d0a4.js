"use strict";(self.webpackChunkbank_in_webpack=self.webpackChunkbank_in_webpack||[]).push([[284],{508:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var a=t(848),r=t(753),i=t(540),n=t(628);const l=function(e){var s=e.password,t=(0,i.useState)(0),r=t[0],n=t[1];return(0,i.useEffect)((function(){!function(e){var s=e.length>=8,t=[/[0-9]/.test(e),/[A-Z]/.test(e),/[a-z]/.test(e),/[!@#$%^&*(),.?":{}|<>]/.test(e)].filter(Boolean).length;e.length<=4||e.length>4&&1===t?n(20):n(2===t||3===t||!s&&4===t?70:s&&4===t?100:20)}(s)}),[s]),(0,a.jsxs)("div",{children:[s.length>0?(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{background:"#e0e0e0",borderRadius:"5px",height:"3px",overflow:"hidden"},children:(0,a.jsx)("div",{style:{width:"".concat(r,"%"),height:"100%",background:20===r?"red":70===r?"orange":100===r?"green":"grey",transition:"width 0.5s ease"}})})}):null,""===s&&(0,a.jsx)("span",{style:{color:"grey"},children:"Security is important! Use only strong password ¯\\_(ツ)_/¯"})]})};var d=t(749),o=function(){return o=Object.assign||function(e){for(var s,t=1,a=arguments.length;t<a;t++)for(var r in s=arguments[t])Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);return e},o.apply(this,arguments)},h=function(e,s,t){if(t||2===arguments.length)for(var a,r=0,i=s.length;r<i;r++)!a&&r in s||(a||(a=Array.prototype.slice.call(s,0,r)),a[r]=s[r]);return e.concat(a||Array.prototype.slice.call(s))};const c=function(){var e=(0,i.useState)({id:"".concat(Math.floor(1e5*Math.random())),firstName:"",lastName:"",address:"",state:"",postCode:"",dateOfBirth:"",ssn:"",email:"",password:""}),s=e[0],t=e[1],c=(0,r.Zp)();(0,i.useEffect)((function(){if((0,n.Y)(),localStorage.getItem("isAuth")){var e=localStorage.getItem("isAuth");(e?JSON.parse(e):{auth:!1}).authStatus&&c("/")}}),[]);var u=function(e){var a,r=e.target,i=r.id,n=r.value;t(o(o({},s),((a={})[i]=n,a)))};return(0,a.jsxs)("div",{className:"sign-up",children:[(0,a.jsxs)("form",{className:"sign-up-form",onSubmit:function(e){e.preventDefault();var a=localStorage.getItem("users"),r=a?JSON.parse(a):[];if(r.find((function(e){return e.email===s.email})))return alert("This email is exist. You need original email");var i=h(h([],r,!0),[s],!1);localStorage.setItem("users",JSON.stringify(i)),localStorage.setItem("isAuth",JSON.stringify({user:s.email,authStatus:!0})),c("/"),t({id:"",firstName:"",lastName:"",address:"",state:"",postCode:"",dateOfBirth:"",ssn:"",email:"",password:""})},children:[(0,a.jsxs)("div",{className:"logo",children:[d.E," ",(0,a.jsx)("span",{children:"Horizon"})]}),(0,a.jsx)("h2",{children:"Sign up"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{className:"signup-p",children:"Please enter your details"}),(0,a.jsxs)("div",{className:"labels",children:[(0,a.jsxs)("label",{htmlFor:"firstName",children:[(0,a.jsx)("div",{children:"First name"}),(0,a.jsx)("input",{type:"text",id:"firstName",placeholder:"First name",value:s.firstName,onChange:u,required:!0,minLength:2,maxLength:11})]}),(0,a.jsxs)("label",{htmlFor:"lastName",children:[(0,a.jsx)("div",{children:"Last name"}),(0,a.jsx)("input",{type:"text",id:"lastName",placeholder:"Last name",value:s.lastName,onChange:u,required:!0,minLength:2,maxLength:11})]})]}),(0,a.jsxs)("label",{htmlFor:"address",children:[(0,a.jsx)("div",{children:"Address"}),(0,a.jsx)("input",{type:"text",id:"address",placeholder:"Enter your specific address",className:"big-input",value:s.address,onChange:u,required:!0,minLength:5})]}),(0,a.jsxs)("div",{className:"labels",children:[(0,a.jsxs)("label",{htmlFor:"state",children:[(0,a.jsx)("div",{children:"State"}),(0,a.jsx)("input",{type:"text",id:"state",placeholder:"ex: NY",value:s.state,onChange:u,required:!0,minLength:2})]}),(0,a.jsxs)("label",{htmlFor:"postCode",children:[(0,a.jsx)("div",{children:"Postal Code"}),(0,a.jsx)("input",{type:"text",id:"postCode",placeholder:"ex: 10011",value:s.postCode,onChange:u,required:!0,minLength:2})]})]}),(0,a.jsxs)("div",{className:"labels",children:[(0,a.jsxs)("label",{htmlFor:"dateOfBirth",children:[(0,a.jsx)("div",{children:"Date of Birth"}),(0,a.jsx)("input",{type:"date",id:"dateOfBirth",placeholder:"ex: yyyy-mm-dd",value:s.dateOfBirth,onChange:u,required:!0,minLength:2})]}),(0,a.jsxs)("label",{htmlFor:"ssn",children:[(0,a.jsx)("div",{children:"SSN"}),(0,a.jsx)("input",{type:"text",id:"ssn",placeholder:"ex: 1234",value:s.ssn,onChange:u,required:!0,minLength:2})]})]}),(0,a.jsxs)("label",{htmlFor:"email",children:[(0,a.jsx)("div",{children:"Email"}),(0,a.jsx)("input",{type:"email",id:"email",placeholder:"Enter your email",className:"big-input",required:!0,value:s.email,onChange:u})]}),(0,a.jsxs)("label",{htmlFor:"password",children:[(0,a.jsx)("div",{children:"Password"}),(0,a.jsx)("input",{type:"password",id:"password",placeholder:"Enter your password",className:"big-input",value:s.password,onChange:u,required:!0,minLength:6})]}),(0,a.jsx)("div",{className:"pwd-progrssbar",children:(0,a.jsx)(l,{password:s.password})}),(0,a.jsx)("button",{type:"submit",className:"sign-up-button",children:"Sign up"}),(0,a.jsxs)("p",{className:"sign-up-footer",children:["Do you have an account? ",(0,a.jsx)(r.N_,{to:"/signin",children:"Login"})]})]}),(0,a.jsx)(r.N_,{to:"/about",className:"about-link",children:"About project"})]})}}}]);