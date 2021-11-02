
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as T,a as P}from"./index.8ee878f2.js";import{_ as q}from"./index.0f29c4cc.js";import{r as c,l as y,L,s as e,n as t,M as r,O as v,P as b,m as U,Q as S,R as j,S as R,T as g,U as B,V as x,X as i}from"./vendor.cb7139c2.js";import{s as _}from"./index.4ffacae6.js";import{_ as I}from"./plugin-vue_export-helper.5a098b48.js";const N={name:"Login",data(){return{title:"Fantastic-admin \u4E13\u4E1A\u7248",formType:"login",loginForm:{account:_.local.get("login_account"),password:"",remember:_.local.has("login_account")},loginRules:{account:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}]},resetForm:{account:_.local.get("login_account"),captcha:"",newPassword:""},resetRules:{account:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],captcha:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],newPassword:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(s){this.redirect=s.query&&s.query.redirect},immediate:!0}},methods:{showPassword(){this.passwordType=this.passwordType==="password"?"":"password",this.$nextTick(()=>{this.$refs.password.focus()})},handleLogin(){this.$refs.loginForm.validate(s=>{s&&(this.loading=!0,this.$store.dispatch("user/login",this.loginForm).then(()=>{this.loading=!1,this.loginForm.remember?_.local.set("login_account",this.loginForm.account):_.local.remove("login_account"),this.$router.push({path:this.redirect||"/"})}).catch(()=>{this.loading=!1}))})},handleFind(){this.$message({message:"\u91CD\u7F6E\u5BC6\u7801\u4EC5\u63D0\u4F9B\u754C\u9762\u6F14\u793A\uFF0C\u65E0\u5B9E\u9645\u529F\u80FD\uFF0C\u9700\u5F00\u53D1\u8005\u81EA\u884C\u6269\u5C55",type:"info"}),this.$refs.resetForm.validate(s=>{})},testAccount(s){this.loginForm.account=s,this.loginForm.password="123456",this.handleLogin()}}},f=s=>(j("data-v-d1818990"),s=s(),R(),s),z=f(()=>r("div",{class:"bg-banner"},null,-1)),A=f(()=>r("i",{class:"ri-translate"},null,-1)),K={id:"login-box"},D=f(()=>r("div",{class:"login-banner"},null,-1)),M={class:"title-container"},E={class:"title"},O={class:"flex-bar"},Q=i("\u8BB0\u4F4F\u6211"),X=i("\u5FD8\u8BB0\u5BC6\u7801"),G={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},H=f(()=>r("span",{style:{"margin-right":"5px"}},"\u6F14\u793A\u5E10\u53F7\u4E00\u952E\u767B\u5F55\uFF1A",-1)),J=i("admin"),W=i("test"),Y=f(()=>r("div",{class:"title-container"},[r("h3",{class:"title"},"\u91CD\u7F6E\u5BC6\u7801")],-1));function Z(s,n,$,ee,o,a){const F=T,p=q,m=c("el-input"),u=c("el-form-item"),V=c("el-checkbox"),d=c("el-button"),h=c("el-form"),w=c("el-col"),k=c("el-row"),C=P;return y(),L("div",null,[z,e(F,{class:"i18n-selector"},{default:t(()=>[A]),_:1}),r("div",K,[D,v(e(h,{ref:"loginForm",model:o.loginForm,rules:o.loginRules,class:"login-form",autocomplete:"on","label-position":"left"},{default:t(()=>[r("div",M,[r("h3",E,g(o.title)+"\u7BA1\u7406\u540E\u53F0",1)]),r("div",null,[e(u,{prop:"account"},{default:t(()=>[e(m,{ref:"name",modelValue:o.loginForm.account,"onUpdate:modelValue":n[0]||(n[0]=l=>o.loginForm.account=l),placeholder:s.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:t(()=>[e(p,{name:"user"})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(u,{prop:"password"},{default:t(()=>[e(m,{ref:"password",modelValue:o.loginForm.password,"onUpdate:modelValue":n[1]||(n[1]=l=>o.loginForm.password=l),type:o.passwordType,placeholder:s.$t("app.password"),tabindex:"2",autocomplete:"on",onKeyup:B(a.handleLogin,["enter"])},{prefix:t(()=>[e(p,{name:"password"})]),suffix:t(()=>[e(p,{name:o.passwordType==="password"?"eye":"eye-open",onClick:a.showPassword},null,8,["name","onClick"])]),_:1},8,["modelValue","type","placeholder","onKeyup"])]),_:1})]),r("div",O,[e(V,{modelValue:o.loginForm.remember,"onUpdate:modelValue":n[2]||(n[2]=l=>o.loginForm.remember=l)},{default:t(()=>[Q]),_:1},8,["modelValue"]),e(d,{type:"text",onClick:n[3]||(n[3]=l=>o.formType="reset")},{default:t(()=>[X]),_:1})]),e(d,{loading:o.loading,type:"primary",style:{width:"100%"},onClick:x(a.handleLogin,["prevent"])},{default:t(()=>[i(g(s.$t("app.login")),1)]),_:1},8,["loading","onClick"]),r("div",G,[H,e(d,{type:"danger",size:"mini",onClick:n[4]||(n[4]=l=>a.testAccount("admin"))},{default:t(()=>[J]),_:1}),e(d,{type:"danger",size:"mini",plain:"",onClick:n[5]||(n[5]=l=>a.testAccount("test"))},{default:t(()=>[W]),_:1})])]),_:1},8,["model","rules"]),[[b,o.formType=="login"]]),v(e(h,{ref:"resetForm",model:o.resetForm,rules:o.resetRules,class:"login-form","auto-complete":"on","label-position":"left"},{default:t(()=>[Y,r("div",null,[e(u,{prop:"account"},{default:t(()=>[e(m,{ref:"name",modelValue:o.resetForm.account,"onUpdate:modelValue":n[6]||(n[6]=l=>o.resetForm.account=l),placeholder:s.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:t(()=>[e(p,{name:"user"})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(u,{prop:"captcha"},{default:t(()=>[e(m,{ref:"captcha",modelValue:o.resetForm.captcha,"onUpdate:modelValue":n[7]||(n[7]=l=>o.resetForm.captcha=l),placeholder:s.$t("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:t(()=>[e(p,{name:"captcha"})]),append:t(()=>[e(d,null,{default:t(()=>[i(g(s.$t("app.sendCaptcha")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(u,{prop:"newPassword"},{default:t(()=>[e(m,{ref:"newPassword",modelValue:o.resetForm.newPassword,"onUpdate:modelValue":n[8]||(n[8]=l=>o.resetForm.newPassword=l),type:o.passwordType,placeholder:s.$t("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:t(()=>[e(p,{name:"password"})]),suffix:t(()=>[e(p,{name:o.passwordType==="password"?"eye":"eye-open",onClick:a.showPassword},null,8,["name","onClick"])]),_:1},8,["modelValue","type","placeholder"])]),_:1})]),e(k,{gutter:15,style:{"padding-top":"20px"}},{default:t(()=>[e(w,{md:6},{default:t(()=>[e(d,{style:{width:"100%"},onClick:n[9]||(n[9]=l=>o.formType="login")},{default:t(()=>[i(g(s.$t("app.goLogin")),1)]),_:1})]),_:1}),e(w,{md:18},{default:t(()=>[e(d,{loading:o.loading,type:"primary",style:{width:"100%"},onClick:x(a.handleFind,["prevent"])},{default:t(()=>[i(g(s.$t("app.check")),1)]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),[[b,o.formType=="reset"]])]),s.$store.state.settings.showCopyright?(y(),U(C,{key:0})):S("v-if",!0)])}var re=I(N,[["render",Z],["__scopeId","data-v-d1818990"]]);export{re as default};