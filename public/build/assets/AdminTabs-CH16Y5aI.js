import{r as u,e as t,f as a,g as s,m as n,p as i,h as o,F as _,E as v,i as h,n as f,j as k,t as w}from"./app-CeOdx_TG.js";/*! 2FAuth version 5.3.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const T={class:"options-header"},b={class:"tabs is-centered is-fullwidth"},W={__name:"AdminTabs",props:{activeTab:{type:String,default:""}},setup(r){const d=u([{name:"admin.app_setup",view:"admin.appSetup",id:"lnkTabApp"},{name:"admin.auth",view:"admin.auth",id:"lnkTabAuth"},{name:"admin.users",view:"admin.users",id:"lnkTabUsers"}]),p=r;return(l,g)=>{const c=t("RouterLink"),m=t("ResponsiveWidthWrapper");return a(),s("div",T,[n(m,null,{default:i(()=>[o("div",b,[o("ul",null,[(a(!0),s(_,null,v(h(d),e=>(a(),s("li",{key:e.view,class:f({"is-active":e.view===p.activeTab})},[n(c,{id:e.id,to:{name:e.view}},{default:i(()=>[k(w(l.$t(e.name)),1)]),_:2},1032,["id","to"])],2))),128))])])]),_:1})])}}};export{W as _};