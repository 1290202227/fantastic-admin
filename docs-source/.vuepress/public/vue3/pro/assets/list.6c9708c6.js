
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as K}from"./index.3e3f69e0.js";import{_ as O}from"./index.0b1dc9bb.js";import{_ as q}from"./index.ed462f12.js";import{_ as F}from"./index.fce7b427.js";import{M as Q,O as T,P as Y,o as Z,a8 as H,r as s,ay as W,m as f,Q as X,t,q as n,V as ee,n as b,Z as h,S as te,s as m,Y as r,i as oe}from"./vendor.3faf3917.js";import{u as ae}from"./pagination.db40cb0d.js";import ne from"./index.0a50a2e4.js";import{_ as le}from"./plugin-vue_export-helper.5a098b48.js";import"./index.1b424a10.js";const se=r("\u65B0\u589E\u90E8\u95E8"),ie=r("\u7B5B \u9009"),re=r("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),ue=r("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),de=r("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),pe=r("\u67E5\u770B\u804C\u4F4D"),me=r("\u7F16\u8F91"),_e=r("\u5220\u9664"),ce=Q({name:"PagesExampleDepartmentList"});function fe(ve){const{pagination:d,getParams:y,onSizeChange:k,onCurrentChange:x,onSortChange:M}=ae(),{proxy:p}=oe(),g=T(),e=Y({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});Z(()=>{u(),e.value.formMode==="router"&&p.$eventBus.on("get-data-list",()=>{u()})}),H(()=>{e.value.formMode==="router"&&p.$eventBus.off("get-data-list")});function u(){e.value.loading=!0;let a=y();e.value.search.title&&(a.title=e.value.search.title),p.$api.get("pages_example/department/list",{baseURL:"/mock/",params:a}).then(o=>{e.value.loading=!1,e.value.dataList=o.data.list,d.value.total=o.data.total})}function $(a){k(a).then(()=>u())}function _(a=1){x(a).then(()=>u())}function z(a,o){M(a,o).then(()=>u())}function w(){e.value.formMode==="router"?g.push({name:"pagesExampleGeneralDepartmentCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function L(a){e.value.formMode==="router"?g.push({name:"pagesExampleGeneralDepartmentEdit",params:{id:a.id}}):(e.value.formModeProps.id=a.id,e.value.formModeProps.visible=!0)}function P(a){p.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${a.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{p.$api.post("pages_example/department/delete",{id:a.id},{baseURL:"/mock/"}).then(()=>{u(),p.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}function j(a){g.push({name:"pagesExampleGeneralJobList",params:{department_id:a.id}})}return(a,o)=>{const D=F,i=s("el-button"),V=s("el-input"),C=s("el-form-item"),S=s("el-col"),E=s("el-row"),B=s("el-form"),U=q,N=s("el-button-group"),G=O,v=s("el-table-column"),I=s("el-table"),R=s("el-pagination"),A=K,J=W("loading");return f(),X("div",null,[t(D,{title:"\u90E8\u95E8\u7BA1\u7406",content:"\u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002"}),t(A,null,{default:n(()=>[t(i,{type:"primary",icon:"el-icon-plus",onClick:w},{default:n(()=>[se]),_:1}),t(U,null,{default:n(()=>[t(B,{model:e.value.search,size:"small","label-width":"100px","label-suffix":"\uFF1A"},{default:n(()=>[t(E,null,{default:n(()=>[t(S,{span:12},{default:n(()=>[t(C,{label:"\u90E8\u95E8"},{default:n(()=>[t(V,{modelValue:e.value.search.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value.search.title=l),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:o[1]||(o[1]=ee(l=>_(),["enter"])),onClear:o[2]||(o[2]=l=>_())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(C,null,{default:n(()=>[t(i,{type:"primary",icon:"el-icon-search",onClick:o[3]||(o[3]=l=>_())},{default:n(()=>[ie]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(f(),b(G,{key:0,data:e.value.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:o[4]||(o[4]=l=>a.$refs.table.toggleAllSelection()),onCheckNull:o[5]||(o[5]=l=>a.$refs.table.clearSelection())},{default:n(()=>[t(i,{size:"small"},{default:n(()=>[re]),_:1}),t(N,null,{default:n(()=>[t(i,{size:"small"},{default:n(()=>[ue]),_:1}),t(i,{size:"small"},{default:n(()=>[de]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):h("v-if",!0),te(t(I,{ref:(l,c)=>{c.table=l},class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:z,onSelectionChange:o[6]||(o[6]=l=>e.value.batch.selectionDataList=l)},{default:n(()=>[e.value.batch.enable?(f(),b(v,{key:0,type:"selection",width:"40"})):h("v-if",!0),t(v,{prop:"title",label:"\u90E8\u95E8"}),t(v,{label:"\u64CD\u4F5C",width:"250",align:"center"},{default:n(l=>[t(i,{type:"info",size:"mini",plain:"",onClick:c=>j(l.row)},{default:n(()=>[pe]),_:2},1032,["onClick"]),t(i,{type:"primary",size:"mini",plain:"",onClick:c=>L(l.row)},{default:n(()=>[me]),_:2},1032,["onClick"]),t(i,{type:"danger",size:"mini",plain:"",onClick:c=>P(l.row)},{default:n(()=>[_e]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),[[J,e.value.loading]]),t(R,{"current-page":m(d).page,total:m(d).total,"page-size":m(d).size,"page-sizes":m(d).sizes,layout:m(d).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:$,onCurrentChange:_},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(f(),b(ne,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":o[7]||(o[7]=l=>e.value.formModeProps.visible=l),mode:e.value.formMode,onSuccess:u},null,8,["id","modelValue","mode"])):h("v-if",!0)])}}const ge=Object.assign(ce,{setup:fe});var we=le(ge,[["__scopeId","data-v-ebbd0274"]]);export{we as default};