
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as A}from"./index.cc6d1ed1.js";import{c as S,e as B}from"./index.18f2a5fe.js";import{m as _,Q as c,a4 as f,r as p,ay as y,t as s,q as e,R as n,U as D,S as b,Y as t}from"./vendor.4daee5e9.js";import{_ as N}from"./index.a912659c.js";import{_ as T}from"./plugin-vue_export-helper.5a098b48.js";const U={props:{value:{type:Array,default:()=>[]}},setup(i){const o=i;function d(){return S(o.value)}return(a,m)=>(_(),c("div",null,[d()?f(a.$slots,"default",{key:0}):f(a.$slots,"no-auth",{key:1})]))}},q={props:{value:{type:[String,Array],default:""}},setup(i){const o=i;function d(){return B(o.value)}return(a,m)=>(_(),c("div",null,[d()?f(a.$slots,"default",{key:0}):f(a.$slots,"no-auth",{key:1})]))}},E={data(){return{account:this.$store.state.user.account}},methods:{accountChange(i){this.$loading({lock:!0,text:"\u5E10\u53F7\u5207\u6362\u4E2D",background:"rgba(0, 0, 0, 0.7)"}),this.$store.dispatch("user/login",{account:i,password:""}).then(()=>{setTimeout(()=>{location.reload()},1e3)})},permissionCheck(i){this.$auth(i)?this.$message.success("\u6821\u9A8C\u901A\u8FC7"):this.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")},permissionCheck2(i){this.$authAll(i)?this.$message.success("\u6821\u9A8C\u901A\u8FC7"):this.$message.error("\u6821\u9A8C\u4E0D\u901A\u8FC7")}}},P={key:0},Q={key:1},R=n("h3",null,"\u5207\u6362\u5E10\u53F7",-1),Y=n("h3",null,"\u5E10\u53F7\u6743\u9650",-1),z=n("h3",null,"\u9274\u6743\u7EC4\u4EF6\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),F=t("\u4F60\u6709 permission.browse \u6743\u9650"),G=t("\u4F60\u6CA1\u6709 permission.browse \u6743\u9650"),H=t("\u4F60\u6709 permission.create \u6743\u9650"),I=t("\u4F60\u6CA1\u6709 permission.create \u6743\u9650"),J=t("\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650"),K=t("\u4F60\u6CA1\u6709 permission.browse \u6216 permission.create \u6743\u9650"),L=t("\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650"),M=t("\u4F60\u6CA1\u6709 permission.browse \u548C permission.create \u6743\u9650"),O=n("h3",null,"\u9274\u6743\u6307\u4EE4\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),W=t(" \u5982\u679C\u4F60\u6709 permission.browse \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),X=[W],Z=t(" \u5982\u679C\u4F60\u6709 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ee=[Z],se=t(" \u5982\u679C\u4F60\u6709 permission.browse \u6216 permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),te=[se],oe=t(" \u5982\u679C\u4F60\u6709 permission.browse \u548C permission.create \u6743\u9650\u5219\u80FD\u770B\u5230\u8FD9\u53E5\u8BDD "),ne=[oe],ie=n("h3",null,"\u9274\u6743\u51FD\u6570\uFF08\u8BF7\u5BF9\u7167\u4EE3\u7801\u67E5\u770B\uFF09",-1),re=t("\u6821\u9A8C permission.browse \u6743\u9650"),ae=t("\u6821\u9A8C permission.create \u6743\u9650"),le=t("\u6821\u9A8C permission.browse \u6216 permission.create \u6743\u9650"),ue=t("\u6821\u9A8C permission.browse \u548C permission.create \u6743\u9650");function _e(i,o,d,a,m,l){const $=N,w=p("el-radio-button"),C=p("el-radio-group"),r=p("el-tag"),v=q,x=U,h=p("el-button"),k=p("el-button-group"),j=A,g=y("auth"),V=y("auth-all");return _(),c("div",null,[s($,{title:"\u6743\u9650\u9A8C\u8BC1"}),s(j,null,{default:e(()=>[i.$store.state.settings.enablePermission?(_(),c("div",Q,[R,s(C,{modelValue:m.account,"onUpdate:modelValue":o[0]||(o[0]=u=>m.account=u),onChange:l.accountChange},{default:e(()=>[s(w,{label:"admin"}),s(w,{label:"test"})]),_:1},8,["modelValue","onChange"]),Y,n("div",null,D(i.$store.state.user.permissions),1),z,n("div",null,[s(v,{value:"permission.browse",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[G]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[F]),_:1})]),_:1}),s(v,{value:"permission.create",style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[I]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[H]),_:1})]),_:1}),s(v,{value:["permission.browse","permission.create"],style:{"margin-bottom":"10px"}},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[K]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[J]),_:1})]),_:1},8,["value"]),s(x,{value:["permission.browse","permission.create"]},{"no-auth":e(()=>[s(r,{type:"danger"},{default:e(()=>[M]),_:1})]),default:e(()=>[s(r,null,{default:e(()=>[L]),_:1})]),_:1},8,["value"])]),O,n("div",null,[b(n("div",null,X,512),[[g,"permission.browse"]]),b(n("div",null,ee,512),[[g,"permission.create"]]),b(n("div",null,te,512),[[g,["permission.browse","permission.create"]]]),b(n("div",null,ne,512),[[V,["permission.browse","permission.create"]]])]),ie,n("div",null,[s(k,{style:{display:"block","margin-bottom":"10px"}},{default:e(()=>[s(h,{onClick:o[1]||(o[1]=u=>l.permissionCheck("permission.browse"))},{default:e(()=>[re]),_:1}),s(h,{onClick:o[2]||(o[2]=u=>l.permissionCheck("permission.create"))},{default:e(()=>[ae]),_:1})]),_:1}),s(k,null,{default:e(()=>[s(h,{onClick:o[3]||(o[3]=u=>l.permissionCheck(["permission.browse","permission.create"]))},{default:e(()=>[le]),_:1}),s(h,{onClick:o[4]||(o[4]=u=>l.permissionCheck2(["permission.browse","permission.create"]))},{default:e(()=>[ue]),_:1})]),_:1})])])):(_(),c("div",P,"\u8BF7\u5230 seeting.js \u91CC\u6253\u5F00\u6743\u9650\u529F\u80FD\uFF0C\u518D\u8FDB\u5165\u8BE5\u9875\u9762\u67E5\u770B\u6F14\u793A"))]),_:1})])}var fe=T(E,[["render",_e]]);export{fe as default};
