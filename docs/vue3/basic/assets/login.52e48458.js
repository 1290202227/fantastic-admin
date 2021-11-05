
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as M}from"./index.d5720941.js";import{_ as A}from"./index.b6ee75fe.js";import{q as O,u as E,s as G,t as H,v as u,o as J,r as m,a as $,x as Q,y as s,A as I,B as P,C as e,D as t,F as W,G as X,H as Y,I as R,c as Z,J as ee,K as oe,L as te,M as i,O as ae,P as le}from"./vendor.24e2c579.js";import{_ as ne}from"./plugin-vue_export-helper.5a098b48.js";const h=w=>(oe("data-v-78a2d26f"),w=w(),te(),w),se=h(()=>s("div",{class:"bg-banner"},null,-1)),re={id:"login-box"},ue=h(()=>s("div",{class:"login-banner"},null,-1)),ie={class:"title-container"},de={class:"title"},ce={class:"flex-bar"},pe=i("\u8BB0\u4F4F\u6211"),me=i("\u5FD8\u8BB0\u5BC6\u7801"),_e=i("\u767B \u5F55"),fe={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},ge=h(()=>s("span",{style:{"margin-right":"5px"}},"\u6F14\u793A\u5E10\u53F7\u4E00\u952E\u767B\u5F55\uFF1A",-1)),ve=i("admin"),we=i("test"),xe=h(()=>s("div",{class:"title-container"},[s("h3",{class:"title"},"\u91CD\u7F6E\u5BC6\u7801")],-1)),ye=i("\u53D1\u9001\u9A8C\u8BC1\u7801"),he=i("\u53BB\u767B\u5F55"),be=i("\u786E \u8BA4"),Ve=O({name:"Login"});function Ce(w){const{proxy:x}=le(),q=E(),U=G(),j=H(),B="Fantastic-admin \u57FA\u7840\u7248",y=u("login"),n=u({account:localStorage.login_account||"",password:"",remember:!!localStorage.login_account}),K=u({account:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}]}),d=u({account:localStorage.login_account||"",captcha:"",newPassword:""}),N=u({account:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],captcha:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],newPassword:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}]}),f=u(!1),_=u("password"),V=u(null);J(()=>{var r;V.value=(r=U.query.redirect)!=null?r:"/"});function C(){_.value=_.value==="password"?"":"password",ae(()=>{x.$refs.password.focus()})}function b(){x.$refs.loginFormRef.validate(r=>{r&&(f.value=!0,q.dispatch("user/login",n.value).then(()=>{f.value=!1,n.value.remember?localStorage.setItem("login_account",n.value.account):localStorage.removeItem("login_account"),j.push(V.value)}).catch(()=>{f.value=!1}))})}function T(){x.$message({message:"\u91CD\u7F6E\u5BC6\u7801\u4EC5\u63D0\u4F9B\u754C\u9762\u6F14\u793A\uFF0C\u65E0\u5B9E\u9645\u529F\u80FD\uFF0C\u9700\u5F00\u53D1\u8005\u81EA\u884C\u6269\u5C55",type:"info"}),x.$refs.resetFormRef.validate(r=>{})}function k(r){n.value.account=r,n.value.password="123456",b()}return(r,a)=>{const c=A,g=m("el-input"),v=m("el-form-item"),z=m("el-checkbox"),p=m("el-button"),S=m("el-form"),F=m("el-col"),D=m("el-row"),L=M;return $(),Q("div",null,[se,s("div",re,[ue,I(e(S,{ref:(o,l)=>{l.loginFormRef=o},model:n.value,rules:K.value,class:"login-form",autocomplete:"on","label-position":"left"},{default:t(()=>[s("div",ie,[s("h3",de,W(X(B))+"\u7BA1\u7406\u540E\u53F0",1)]),s("div",null,[e(v,{prop:"account"},{default:t(()=>[e(g,{ref:(o,l)=>{l.name=o},modelValue:n.value.account,"onUpdate:modelValue":a[0]||(a[0]=o=>n.value.account=o),placeholder:"\u7528\u6237\u540D",type:"text",tabindex:"1",autocomplete:"on"},{prefix:t(()=>[e(c,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),e(v,{prop:"password"},{default:t(()=>[e(g,{ref:(o,l)=>{l.password=o},modelValue:n.value.password,"onUpdate:modelValue":a[1]||(a[1]=o=>n.value.password=o),type:_.value,placeholder:"\u5BC6\u7801",tabindex:"2",autocomplete:"on",onKeyup:Y(b,["enter"])},{prefix:t(()=>[e(c,{name:"password"})]),suffix:t(()=>[e(c,{name:_.value==="password"?"eye":"eye-open",onClick:C},null,8,["name"])]),_:1},8,["modelValue","type","onKeyup"])]),_:1})]),s("div",ce,[e(z,{modelValue:n.value.remember,"onUpdate:modelValue":a[2]||(a[2]=o=>n.value.remember=o)},{default:t(()=>[pe]),_:1},8,["modelValue"]),e(p,{type:"text",onClick:a[3]||(a[3]=o=>y.value="reset")},{default:t(()=>[me]),_:1})]),e(p,{loading:f.value,type:"primary",style:{width:"100%"},onClick:R(b,["prevent"])},{default:t(()=>[_e]),_:1},8,["loading","onClick"]),s("div",fe,[ge,e(p,{type:"danger",size:"mini",onClick:a[4]||(a[4]=o=>k("admin"))},{default:t(()=>[ve]),_:1}),e(p,{type:"danger",size:"mini",plain:"",onClick:a[5]||(a[5]=o=>k("test"))},{default:t(()=>[we]),_:1})])]),_:1},8,["model","rules"]),[[P,y.value=="login"]]),I(e(S,{ref:(o,l)=>{l.resetFormRef=o},model:d.value,rules:N.value,class:"login-form","auto-complete":"on","label-position":"left"},{default:t(()=>[xe,s("div",null,[e(v,{prop:"account"},{default:t(()=>[e(g,{ref:(o,l)=>{l.name=o},modelValue:d.value.account,"onUpdate:modelValue":a[6]||(a[6]=o=>d.value.account=o),placeholder:"\u7528\u6237\u540D",type:"text",tabindex:"1",autocomplete:"on"},{prefix:t(()=>[e(c,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),e(v,{prop:"captcha"},{default:t(()=>[e(g,{ref:(o,l)=>{l.captcha=o},modelValue:d.value.captcha,"onUpdate:modelValue":a[7]||(a[7]=o=>d.value.captcha=o),placeholder:"\u9A8C\u8BC1\u7801",type:"text",tabindex:"2",autocomplete:"on"},{prefix:t(()=>[e(c,{name:"captcha"})]),append:t(()=>[e(p,null,{default:t(()=>[ye]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(v,{prop:"newPassword"},{default:t(()=>[e(g,{ref:(o,l)=>{l.newPassword=o},modelValue:d.value.newPassword,"onUpdate:modelValue":a[8]||(a[8]=o=>d.value.newPassword=o),type:_.value,placeholder:"\u65B0\u5BC6\u7801",tabindex:"3",autocomplete:"on"},{prefix:t(()=>[e(c,{name:"password"})]),suffix:t(()=>[e(c,{name:_.value==="password"?"eye":"eye-open",onClick:C},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1})]),e(D,{gutter:15,style:{"padding-top":"20px"}},{default:t(()=>[e(F,{md:6},{default:t(()=>[e(p,{style:{width:"100%"},onClick:a[9]||(a[9]=o=>y.value="login")},{default:t(()=>[he]),_:1})]),_:1}),e(F,{md:18},{default:t(()=>[e(p,{loading:f.value,type:"primary",style:{width:"100%"},onClick:R(T,["prevent"])},{default:t(()=>[be]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),[[P,y.value=="reset"]])]),r.$store.state.settings.showCopyright?($(),Z(L,{key:0})):ee("v-if",!0)])}}const ke=Object.assign(Ve,{setup:Ce});var Pe=ne(ke,[["__scopeId","data-v-78a2d26f"]]);export{Pe as default};
