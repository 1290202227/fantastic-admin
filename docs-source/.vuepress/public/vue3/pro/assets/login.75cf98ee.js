
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e,a as o}from"./index.d451c4ae.js";import{_ as a}from"./index.a3c54816.js";import{H as t,I as l,r as s,l as r,J as n,s as i,n as d,K as p,L as c,M as m,O as u,P as g,Q as h,R as f,m as w,S as y}from"./vendor.7707186e.js";import{s as _}from"./index.9c2de28b.js";const x={name:"Login",data:()=>({title:"Fantastic-admin 专业版",formType:"login",loginForm:{account:_.local.get("login_account"),password:"",remember:_.local.has("login_account")},loginRules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},resetForm:{account:_.local.get("login_account"),captcha:"",newPassword:""},resetRules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]},loading:!1,passwordType:"password",redirect:void 0}),watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPassword(){this.passwordType="password"===this.passwordType?"":"password",this.$nextTick((()=>{this.$refs.password.focus()}))},handleLogin(){this.$refs.loginForm.validate((e=>{e&&(this.loading=!0,this.$store.dispatch("user/login",this.loginForm).then((()=>{this.loading=!1,this.loginForm.remember?_.local.set("login_account",this.loginForm.account):_.local.remove("login_account"),this.$router.push({path:this.redirect||"/"})})).catch((()=>{this.loading=!1})))}))},handleFind(){this.$message({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),this.$refs.resetForm.validate((e=>{}))},testAccount(e){this.loginForm.account=e,this.loginForm.password="123456",this.handleLogin()}}};t("data-v-5a0b2f12");const b=p("div",{class:"bg-banner"},null,-1),F=p("i",{class:"ri-translate"},null,-1),v={id:"login-box"},V=p("div",{class:"login-banner"},null,-1),$={class:"title-container"},k={class:"title"},C={class:"flex-bar"},T=f("记住我"),P=f("忘记密码"),q={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},L=p("span",{style:{"margin-right":"5px"}},"演示帐号一键登录：",-1),U=f("admin"),R=f("test"),j=p("div",{class:"title-container"},[p("h3",{class:"title"},"重置密码")],-1);l(),x.render=function(t,l,_,x,z,A){const K=e,I=a,H=s("el-input"),J=s("el-form-item"),M=s("el-checkbox"),O=s("el-button"),Q=s("el-form"),S=s("el-col"),B=s("el-row"),D=o;return r(),n("div",null,[b,i(K,{class:"i18n-selector"},{default:d((()=>[F])),_:1}),p("div",v,[V,c(i(Q,{ref:"loginForm",model:z.loginForm,rules:z.loginRules,class:"login-form",autocomplete:"on","label-position":"left"},{default:d((()=>[p("div",$,[p("h3",k,u(z.title)+"管理后台",1)]),p("div",null,[i(J,{prop:"account"},{default:d((()=>[i(H,{ref:"name",modelValue:z.loginForm.account,"onUpdate:modelValue":l[0]||(l[0]=e=>z.loginForm.account=e),placeholder:t.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:d((()=>[i(I,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),i(J,{prop:"password"},{default:d((()=>[i(H,{ref:"password",modelValue:z.loginForm.password,"onUpdate:modelValue":l[1]||(l[1]=e=>z.loginForm.password=e),type:z.passwordType,placeholder:t.$t("app.password"),tabindex:"2",autocomplete:"on",onKeyup:g(A.handleLogin,["enter"])},{prefix:d((()=>[i(I,{name:"password"})])),suffix:d((()=>[i(I,{name:"password"===z.passwordType?"eye":"eye-open",onClick:A.showPassword},null,8,["name","onClick"])])),_:1},8,["modelValue","type","placeholder","onKeyup"])])),_:1})]),p("div",C,[i(M,{modelValue:z.loginForm.remember,"onUpdate:modelValue":l[2]||(l[2]=e=>z.loginForm.remember=e)},{default:d((()=>[T])),_:1},8,["modelValue"]),i(O,{type:"text",onClick:l[3]||(l[3]=e=>z.formType="reset")},{default:d((()=>[P])),_:1})]),i(O,{loading:z.loading,type:"primary",style:{width:"100%"},onClick:h(A.handleLogin,["prevent"])},{default:d((()=>[f(u(t.$t("app.login")),1)])),_:1},8,["loading","onClick"]),p("div",q,[L,i(O,{type:"danger",size:"mini",onClick:l[4]||(l[4]=e=>A.testAccount("admin"))},{default:d((()=>[U])),_:1}),i(O,{type:"danger",size:"mini",plain:"",onClick:l[5]||(l[5]=e=>A.testAccount("test"))},{default:d((()=>[R])),_:1})])])),_:1},8,["model","rules"]),[[m,"login"==z.formType]]),c(i(Q,{ref:"resetForm",model:z.resetForm,rules:z.resetRules,class:"login-form","auto-complete":"on","label-position":"left"},{default:d((()=>[j,p("div",null,[i(J,{prop:"account"},{default:d((()=>[i(H,{ref:"name",modelValue:z.resetForm.account,"onUpdate:modelValue":l[6]||(l[6]=e=>z.resetForm.account=e),placeholder:t.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:d((()=>[i(I,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),i(J,{prop:"captcha"},{default:d((()=>[i(H,{ref:"captcha",modelValue:z.resetForm.captcha,"onUpdate:modelValue":l[7]||(l[7]=e=>z.resetForm.captcha=e),placeholder:t.$t("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:d((()=>[i(I,{name:"captcha"})])),append:d((()=>[i(O,null,{default:d((()=>[f(u(t.$t("app.sendCaptcha")),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),i(J,{prop:"newPassword"},{default:d((()=>[i(H,{ref:"newPassword",modelValue:z.resetForm.newPassword,"onUpdate:modelValue":l[8]||(l[8]=e=>z.resetForm.newPassword=e),type:z.passwordType,placeholder:t.$t("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:d((()=>[i(I,{name:"password"})])),suffix:d((()=>[i(I,{name:"password"===z.passwordType?"eye":"eye-open",onClick:A.showPassword},null,8,["name","onClick"])])),_:1},8,["modelValue","type","placeholder"])])),_:1})]),i(B,{gutter:15,style:{"padding-top":"20px"}},{default:d((()=>[i(S,{md:6},{default:d((()=>[i(O,{style:{width:"100%"},onClick:l[9]||(l[9]=e=>z.formType="login")},{default:d((()=>[f(u(t.$t("app.goLogin")),1)])),_:1})])),_:1}),i(S,{md:18},{default:d((()=>[i(O,{loading:z.loading,type:"primary",style:{width:"100%"},onClick:h(A.handleFind,["prevent"])},{default:d((()=>[f(u(t.$t("app.check")),1)])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model","rules"]),[[m,"reset"==z.formType]])]),t.$store.state.settings.showCopyright?(r(),w(D,{key:0})):y("v-if",!0)])},x.__scopeId="data-v-5a0b2f12";export{x as default};
