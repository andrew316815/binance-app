import{d as _,u,c as p,r as t,o as i,a as m,b as g,e,w as r,F as V}from"./index-DBXCjN3p.js";const h={class:"d-flex"},f={class:"header-layout__image"},b=_({__name:"HeaderLayout",setup(d){const a=u(),s=p(()=>[{title:"Settings Page",disabled:a.name==="SettingsPage",to:{name:"SettingsPage"}},{title:"Order Book",disabled:a.name==="OrderPage",to:{name:"OrderPage"}}]);return(n,c)=>{const o=t("VImg"),l=t("VBreadcrumbs");return i(),m("div",h,[g("div",f,[e(o,{src:"/binance-app/assets/logo.png",width:100,height:100,"aspect-ratio":"16/9"})]),e(l,{items:s.value,divider:"|"},null,8,["items"])])}}}),v=_({__name:"MainLayout",setup(d){return(a,s)=>{const n=t("RouterView"),c=t("VSheet"),o=t("VMain");return i(),m(V,null,[e(b),e(o,null,{default:r(()=>[e(c,{color:"#FAFAFA",class:"pa-3 main"},{default:r(()=>[e(n)]),_:1})]),_:1})],64)}}});export{v as default};
