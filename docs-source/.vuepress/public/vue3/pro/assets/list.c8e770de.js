
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as ee}from"./index.3e3f69e0.js";import{_ as ae}from"./index.70fd940b.js";import{_ as oe}from"./index.0b1dc9bb.js";import{_ as te}from"./index.ed462f12.js";import{_ as ne}from"./index.fce7b427.js";import{M as le,O as se,P as re,o as ie,a8 as de,r as s,ay as ue,m as _,Q as me,t as o,q as t,V as $,S as z,T as ce,n as f,Z as y,s as b,Y as r,i as _e}from"./vendor.3faf3917.js";import{u as pe}from"./pagination.db40cb0d.js";import fe from"./index.9aecda78.js";import{_ as ge}from"./plugin-vue_export-helper.5a098b48.js";import"./index.b7c9ae31.js";const ve=r("\u65B0\u589E\u7BA1\u7406\u5458"),be=r("\u5168\u90E8"),he=r("\u7537"),we=r("\u5973"),Ce=r("\u4FDD\u5BC6"),xe=r("\u7B5B \u9009"),$e=r("\u6279\u91CF\u64CD\u4F5C"),ye=r("\u7537"),Me=r("\u5973"),ke=r("\u4FDD\u5BC6"),Ve=r("\u7F16\u8F91"),ze=r(" \u66F4\u591A\u64CD\u4F5C "),Pe=r("\u91CD\u7F6E\u5BC6\u7801"),Le=r("\u5220\u9664"),Ue=le({name:"PagesExampleManagerList"});function je(De){const{pagination:p,getParams:P,onSizeChange:L,onCurrentChange:U,onSortChange:j}=pe(),{proxy:i}=_e(),M=se(),a=re({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{account:"",name:"",mobile:"",sex:""},searchMore:!1,batch:{enable:!0,selectionDataList:[]},dataList:[]});ie(()=>{m(),a.value.formMode==="router"&&i.$eventBus.on("get-data-list",()=>{m()})}),de(()=>{a.value.formMode==="router"&&i.$eventBus.off("get-data-list")});function m(){a.value.loading=!0;let l=P();a.value.search.account&&(l.account=a.value.search.account),a.value.search.name&&(l.name=a.value.search.name),a.value.search.mobile&&(l.mobile=a.value.search.mobile),a.value.search.sex!=""&&(l.sex=a.value.search.sex),i.$api.get("pages_example/manager/list",{baseURL:"/mock/",params:l}).then(e=>{a.value.loading=!1,a.value.dataList=e.data.list,p.value.total=e.data.total})}function S(l){L(l).then(()=>m())}function d(l=1){U(l).then(()=>m())}function D(l,e){j(l,e).then(()=>m())}function B(){a.value.formMode==="router"?M.push({name:"pagesExampleGeneralManagerCreate"}):(a.value.formModeProps.id="",a.value.formModeProps.visible=!0)}function E(l){a.value.formMode==="router"?M.push({name:"pagesExampleGeneralManagerEdit",params:{id:l.id}}):(a.value.formModeProps.id=l.id,a.value.formModeProps.visible=!0)}function R(l,e){i.$confirm(`\u786E\u8BA4${l?"\u542F\u7528":"\u505C\u7528"}\u300C${e.account}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{i.$api.post("pages_example/manager/change/status",{id:e.id,status:l},{baseURL:"/mock/"}).then(()=>{i.$message.success({message:`\u6A21\u62DF${l?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F`,center:!0})})}).catch(()=>{e.status=!l})}function K(l){i.$confirm(`\u786E\u8BA4\u5C06\u300C${l.account}\u300D\u7684\u5BC6\u7801\u91CD\u7F6E\u4E3A \u201C123456\u201D \u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{i.$api.post("pages_example/manager/password/reset",{id:l.id},{baseURL:"/mock/"}).then(()=>{i.$message.success({message:"\u6A21\u62DF\u91CD\u7F6E\u6210\u529F",center:!0})})}).catch(()=>{})}function N(l){i.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${l.account}\u300D\u7BA1\u7406\u5458\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{i.$api.post("pages_example/manager/delete",{id:l.id},{baseURL:"/mock/"}).then(()=>{m(),i.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}function O(l,e){switch(l){case"resetPassword":K(e);break;case"delete":N(e);break}}return(l,e)=>{const T=ne,g=s("el-button"),C=s("el-input"),v=s("el-form-item"),h=s("el-col"),k=s("el-row"),w=s("el-radio-button"),A=s("el-radio-group"),G=s("el-form"),I=te,q=oe,c=s("el-table-column"),x=s("el-tag"),F=s("el-switch"),Q=ae,V=s("el-dropdown-item"),Y=s("el-dropdown-menu"),Z=s("el-dropdown"),H=s("el-table"),J=s("el-pagination"),W=ee,X=ue("loading");return _(),me("div",null,[o(T,{title:"\u7BA1\u7406\u5458\u7BA1\u7406",content:"\u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002"}),o(W,null,{default:t(()=>[o(g,{type:"primary",icon:"el-icon-plus",onClick:B},{default:t(()=>[ve]),_:1}),o(I,{"show-more":"",onToggle:e[12]||(e[12]=n=>a.value.searchMore=n)},{default:t(()=>[o(G,{model:a.value.search,size:"small","label-width":"100px","label-suffix":"\uFF1A"},{default:t(()=>[o(k,null,{default:t(()=>[o(h,{md:8},{default:t(()=>[o(v,{label:"\u5E10\u53F7"},{default:t(()=>[o(C,{modelValue:a.value.search.account,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value.search.account=n),placeholder:"\u8BF7\u8F93\u5165\u5E10\u53F7\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:e[1]||(e[1]=$(n=>d(),["enter"])),onClear:e[2]||(e[2]=n=>d())},null,8,["modelValue"])]),_:1})]),_:1}),o(h,{md:8},{default:t(()=>[o(v,{label:"\u59D3\u540D"},{default:t(()=>[o(C,{modelValue:a.value.search.name,"onUpdate:modelValue":e[3]||(e[3]=n=>a.value.search.name=n),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:e[4]||(e[4]=$(n=>d(),["enter"])),onClear:e[5]||(e[5]=n=>d())},null,8,["modelValue"])]),_:1})]),_:1}),o(h,{md:8},{default:t(()=>[o(v,{label:"\u624B\u673A\u53F7"},{default:t(()=>[o(C,{modelValue:a.value.search.mobile,"onUpdate:modelValue":e[6]||(e[6]=n=>a.value.search.mobile=n),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:"",onKeydown:e[7]||(e[7]=$(n=>d(),["enter"])),onClear:e[8]||(e[8]=n=>d())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),z(o(k,null,{default:t(()=>[o(h,{md:8},{default:t(()=>[o(v,{label:"\u6027\u522B"},{default:t(()=>[o(A,{modelValue:a.value.search.sex,"onUpdate:modelValue":e[9]||(e[9]=n=>a.value.search.sex=n),onChange:e[10]||(e[10]=n=>d())},{default:t(()=>[o(w,{label:""},{default:t(()=>[be]),_:1}),o(w,{label:"1"},{default:t(()=>[he]),_:1}),o(w,{label:"0"},{default:t(()=>[we]),_:1}),o(w,{label:"2"},{default:t(()=>[Ce]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},512),[[ce,a.value.searchMore]]),o(v,null,{default:t(()=>[o(g,{type:"primary",icon:"el-icon-search",onClick:e[11]||(e[11]=n=>d())},{default:t(()=>[xe]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a.value.batch.enable?(_(),f(q,{key:0,data:a.value.dataList,"selection-data":a.value.batch.selectionDataList,onCheckAll:e[13]||(e[13]=n=>l.$refs.table.toggleAllSelection()),onCheckNull:e[14]||(e[14]=n=>l.$refs.table.clearSelection())},{default:t(()=>[o(g,{size:"small"},{default:t(()=>[$e]),_:1})]),_:1},8,["data","selection-data"])):y("v-if",!0),z(o(H,{ref:(n,u)=>{u.table=n},class:"list-table",data:a.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:D,onSelectionChange:e[15]||(e[15]=n=>a.value.batch.selectionDataList=n)},{default:t(()=>[a.value.batch.enable?(_(),f(c,{key:0,type:"selection",align:"center",fixed:""})):y("v-if",!0),o(c,{prop:"account",sortable:"",label:"\u5E10\u53F7"}),o(c,{prop:"name",label:"\u59D3\u540D",width:"100",align:"center"}),o(c,{prop:"sex",label:"\u6027\u522B",width:"100",align:"center"},{default:t(n=>[n.row.sex==1?(_(),f(x,{key:0,type:"success",size:"small"},{default:t(()=>[ye]),_:1})):n.row.sex==0?(_(),f(x,{key:1,type:"warning",size:"small"},{default:t(()=>[Me]),_:1})):(_(),f(x,{key:2,type:"info",size:"small"},{default:t(()=>[ke]),_:1}))]),_:1}),o(c,{prop:"mobile",label:"\u624B\u673A\u53F7",width:"150",align:"center"}),o(c,{label:"\u72B6\u6001",width:"100",align:"center"},{default:t(n=>[o(F,{modelValue:n.row.status,"onUpdate:modelValue":u=>n.row.status=u,onChange:u=>R(u,n.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(c,{label:"\u64CD\u4F5C",width:"200",align:"center",fixed:"right"},{default:t(n=>[o(g,{type:"primary",size:"mini",plain:"",onClick:u=>E(n.row)},{default:t(()=>[Ve]),_:2},1032,["onClick"]),o(Z,{onCommand:u=>O(u,n.row)},{dropdown:t(()=>[o(Y,null,{default:t(()=>[o(V,{command:"resetPassword"},{default:t(()=>[Pe]),_:1}),o(V,{command:"delete",divided:""},{default:t(()=>[Le]),_:1})]),_:1})]),default:t(()=>[o(g,{size:"mini"},{default:t(()=>[ze,o(Q,{name:"el-icon-arrow-down"})]),_:1})]),_:2},1032,["onCommand"])]),_:1})]),_:1},8,["data"]),[[X,a.value.loading]]),o(J,{"current-page":b(p).page,total:b(p).total,"page-size":b(p).size,"page-sizes":b(p).sizes,layout:b(p).layout,"hide-on-single-page":!1,class:"pagination",background:"",onCurrentChange:d,onSizeChange:S},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(a.value.formMode)?(_(),f(fe,{key:0,id:a.value.formModeProps.id,modelValue:a.value.formModeProps.visible,"onUpdate:modelValue":e[16]||(e[16]=n=>a.value.formModeProps.visible=n),mode:a.value.formMode,onSuccess:m},null,8,["id","modelValue","mode"])):y("v-if",!0)])}}const Se=Object.assign(Ue,{setup:je});var qe=ge(Se,[["__scopeId","data-v-b1af1720"]]);export{qe as default};
