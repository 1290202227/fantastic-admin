
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.afd122f8.js";import{a as s,b as r}from"./index.abef4bd5.js";import{a as i,n as o,$ as t,r as a,a6 as n,t as l,x as u,q as p,B as m,s as d,F as c}from"./vendor.8d92a282.js";import{_ as b}from"./index.2f66b5c7.js";import{_ as h}from"./plugin-vue_export-helper.5a098b48.js";const f={props:{value:{type:[String,Array],default:""}},setup(e){const r=e;return(e,a)=>(i(),o("div",null,[s(r.value)?t(e.$slots,"default",{key:0}):t(e.$slots,"no-auth",{key:1})]))}},g={props:{value:{type:Array,default:()=>[]}},setup(e){const s=e;return(e,a)=>(i(),o("div",null,[r(s.value)?t(e.$slots,"default",{key:0}):t(e.$slots,"no-auth",{key:1})]))}},v={data(){return{account:this.$store.state.user.account}},methods:{accountChange(e){this.$loading({lock:!0,text:"帐号切换中",background:"rgba(0, 0, 0, 0.7)"}),this.$store.dispatch("user/login",{account:e,password:""}).then((()=>{setTimeout((()=>{location.reload()}),1e3)}))},permissionCheck(e){this.$auth(e)?this.$message.success("校验通过"):this.$message.error("校验不通过")},permissionCheck2(e){this.$authAll(e)?this.$message.success("校验通过"):this.$message.error("校验不通过")}}},_={key:0},w={key:1},k=p("h3",null,"切换帐号",-1),y=p("h3",null,"帐号权限",-1),$=p("h3",null,"鉴权组件（请对照代码查看）",-1),C=c("你有 permission.browse 权限"),x=c("你没有 permission.browse 权限"),j=c("你有 permission.create 权限"),A=c("你没有 permission.create 权限"),V=c("你有 permission.browse 或 permission.create 权限"),q=c("你没有 permission.browse 或 permission.create 权限"),B=c("你有 permission.browse 和 permission.create 权限"),F=c("你没有 permission.browse 和 permission.create 权限"),P=p("h3",null,"鉴权指令（请对照代码查看）",-1),S=[c(" 如果你有 permission.browse 权限则能看到这句话 ")],T=[c(" 如果你有 permission.create 权限则能看到这句话 ")],U=[c(" 如果你有 permission.browse 或 permission.create 权限则能看到这句话 ")],z=[c(" 如果你有 permission.browse 和 permission.create 权限则能看到这句话 ")],D=p("h3",null,"鉴权函数（请对照代码查看）",-1),E=c("校验 permission.browse 权限"),G=c("校验 permission.create 权限"),H=c("校验 permission.browse 或 permission.create 权限"),I=c("校验 permission.browse 和 permission.create 权限");var J=h(v,[["render",function(s,r,t,c,h,v){const J=e,K=a("el-radio-button"),L=a("el-radio-group"),M=a("el-tag"),N=f,O=g,Q=a("el-button"),R=a("el-button-group"),W=b,X=n("auth"),Y=n("auth-all");return i(),o("div",null,[l(J,{title:"权限验证"}),l(W,null,{default:u((()=>[s.$store.state.settings.enablePermission?(i(),o("div",w,[k,l(L,{modelValue:h.account,"onUpdate:modelValue":r[0]||(r[0]=e=>h.account=e),onChange:v.accountChange},{default:u((()=>[l(K,{label:"admin"}),l(K,{label:"test"})])),_:1},8,["modelValue","onChange"]),y,p("div",null,m(s.$store.state.user.permissions),1),$,p("div",null,[l(N,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":u((()=>[l(M,{type:"danger"},{default:u((()=>[x])),_:1})])),default:u((()=>[l(M,null,{default:u((()=>[C])),_:1})])),_:1}),l(N,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":u((()=>[l(M,{type:"danger"},{default:u((()=>[A])),_:1})])),default:u((()=>[l(M,null,{default:u((()=>[j])),_:1})])),_:1}),l(N,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":u((()=>[l(M,{type:"danger"},{default:u((()=>[q])),_:1})])),default:u((()=>[l(M,null,{default:u((()=>[V])),_:1})])),_:1},8,["value"]),l(O,{value:["permission.browse","permission.create"]},{"no-auth":u((()=>[l(M,{type:"danger"},{default:u((()=>[F])),_:1})])),default:u((()=>[l(M,null,{default:u((()=>[B])),_:1})])),_:1},8,["value"])]),P,p("div",null,[d(p("div",null,S,512),[[X,"permission.browse"]]),d(p("div",null,T,512),[[X,"permission.create"]]),d(p("div",null,U,512),[[X,["permission.browse","permission.create"]]]),d(p("div",null,z,512),[[Y,["permission.browse","permission.create"]]])]),D,p("div",null,[l(R,{style:{display:"block","margin-bottom":"10px"}},{default:u((()=>[l(Q,{onClick:r[1]||(r[1]=e=>v.permissionCheck("permission.browse"))},{default:u((()=>[E])),_:1}),l(Q,{onClick:r[2]||(r[2]=e=>v.permissionCheck("permission.create"))},{default:u((()=>[G])),_:1})])),_:1}),l(R,null,{default:u((()=>[l(Q,{onClick:r[3]||(r[3]=e=>v.permissionCheck(["permission.browse","permission.create"]))},{default:u((()=>[H])),_:1}),l(Q,{onClick:r[4]||(r[4]=e=>v.permissionCheck2(["permission.browse","permission.create"]))},{default:u((()=>[I])),_:1})])),_:1})])])):(i(),o("div",_,"请到 seeting.js 里打开权限功能，再进入该页面查看演示"))])),_:1})])}]]);export{J as default};
