
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as q}from"./index.761e72da.js";import{_ as F}from"./index.7058f1ce.js";import{_ as Q}from"./index.08c2785e.js";import{_ as X}from"./index.d075170b.js";import{K as G,L as H,M as J,o as W,a6 as Y,r as s,aw as Z,m as f,O as ee,t as o,q as n,T as te,n as g,X as h,Q as oe,s as p,V as c,i as ae}from"./vendor.22bd9123.js";import{u as ne}from"./pagination.30d6418f.js";import le from"./index.dbf21b84.js";import{_ as se}from"./plugin-vue_export-helper.5a098b48.js";import"./index.15aca2b9.js";import"./index.bde6221d.js";import"./index.38d93228.js";import"./index.825d3c3e.js";const ie=c("\u65B0\u589E\u8FD0\u8D39\u6A21\u7248"),re=c("\u7B5B \u9009"),ue=c("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),de=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),ce=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),_e=c("\u7F16\u8F91"),pe=c("\u5220\u9664"),me=G({name:"PagesExampleDeliveryList"});function fe(he){const{pagination:_,getParams:C,onSizeChange:y,onCurrentChange:x,onSortChange:$}=ne(),{proxy:r}=ae(),v=H(),e=J({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});W(()=>{i(),e.value.formMode==="router"&&r.$eventBus.on("get-data-list",()=>{i()})}),Y(()=>{e.value.formMode==="router"&&r.$eventBus.off("get-data-list")});function i(){e.value.loading=!0;let t=C();e.value.search.title&&(t.title=e.value.search.title),r.$api.get("pages_example/delivery/list",{baseURL:"/mock/",params:t}).then(a=>{e.value.loading=!1,e.value.dataList=a.data.list,_.value.total=a.data.total})}function k(t){y(t).then(()=>i())}function M(t){x(t).then(()=>i())}function w(t,a){$(t,a).then(()=>i())}function z(){e.value.formMode==="router"?v.push({name:"pagesExampleShopDeliveryCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function V(t){e.value.formMode==="router"?v.push({name:"pagesExampleShopDeliveryEdit",params:{id:t.id}}):(e.value.formModeProps.id=t.id,e.value.formModeProps.visible=!0)}function j(t){r.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${t.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{r.$api.post("pages_example/delivery/delete",{id:t.id},{baseURL:"/mock/"}).then(()=>{i(),r.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}function L(t,a){r.$confirm(`\u786E\u8BA4${t?"\u542F\u7528":"\u505C\u7528"}\u300C${a.title}\u300D\u8FD0\u8D39\u6A21\u7248\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{r.$api.post("pages_example/delivery/change/status",{id:a.id,status:t},{baseURL:"/mock/"}).then(()=>{r.$message.success({message:`\u6A21\u62DF${t?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F`,center:!0})})}).catch(()=>{a.status=!t})}return(t,a)=>{const P=X,u=s("el-button"),S=s("el-input"),b=s("el-form-item"),D=s("el-col"),U=s("el-row"),B=s("el-form"),E=Q,K=s("el-button-group"),N=F,m=s("el-table-column"),R=s("el-switch"),A=s("el-table"),I=s("el-pagination"),O=q,T=Z("loading");return f(),ee("div",null,[o(P,{title:"\u8FD0\u8D39\u6A21\u7248\u7BA1\u7406"}),o(O,null,{default:n(()=>[o(u,{type:"primary",icon:"el-icon-plus",onClick:z},{default:n(()=>[ie]),_:1}),o(E,null,{default:n(()=>[o(B,{model:e.value.search,size:"small","label-width":"100px","label-suffix":"\uFF1A"},{default:n(()=>[o(U,null,{default:n(()=>[o(D,{span:12},{default:n(()=>[o(b,{label:"\u6A21\u7248\u540D\u79F0"},{default:n(()=>[o(S,{modelValue:e.value.search.title,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.search.title=l),placeholder:"\u8BF7\u8F93\u5165\u6A21\u7248\u540D\u79F0\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:te(i,["enter"]),onClear:i},null,8,["modelValue","onKeydown"])]),_:1})]),_:1})]),_:1}),o(b,null,{default:n(()=>[o(u,{type:"primary",icon:"el-icon-search",onClick:i},{default:n(()=>[re]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(f(),g(N,{key:0,data:t.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:a[1]||(a[1]=l=>t.$refs.table.toggleAllSelection()),onCheckNull:a[2]||(a[2]=l=>t.$refs.table.clearSelection())},{default:n(()=>[o(u,{size:"small"},{default:n(()=>[ue]),_:1}),o(K,null,{default:n(()=>[o(u,{size:"small"},{default:n(()=>[de]),_:1}),o(u,{size:"small"},{default:n(()=>[ce]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):h("v-if",!0),oe(o(A,{ref:(l,d)=>{d.table=l},class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:w,onSelectionChange:a[3]||(a[3]=l=>e.value.batch.selectionDataList=l)},{default:n(()=>[e.value.batch.enable?(f(),g(m,{key:0,type:"selection",width:"40"})):h("v-if",!0),o(m,{prop:"title",label:"\u6A21\u7248\u540D\u79F0"}),o(m,{label:"\u5F00\u542F\u72B6\u6001",width:"100",align:"center"},{default:n(l=>[o(R,{modelValue:l.row.status,"onUpdate:modelValue":d=>l.row.status=d,onChange:d=>L(d,l.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(m,{label:"\u64CD\u4F5C",width:"250",align:"center"},{default:n(l=>[o(u,{type:"primary",size:"mini",plain:"",onClick:d=>V(l.row)},{default:n(()=>[_e]),_:2},1032,["onClick"]),o(u,{type:"danger",size:"mini",plain:"",onClick:d=>j(l.row)},{default:n(()=>[pe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),[[T,e.value.loading]]),o(I,{"current-page":p(_).page,total:p(_).total,"page-size":p(_).size,"page-sizes":p(_).sizes,layout:p(_).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:k,onCurrentChange:M},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(f(),g(le,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.formModeProps.visible=l),mode:e.value.formMode,onSuccess:i},null,8,["id","modelValue","mode"])):h("v-if",!0)])}}const ge=Object.assign(me,{setup:fe});var Le=se(ge,[["__scopeId","data-v-352c753c"]]);export{Le as default};
