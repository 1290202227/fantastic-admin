
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as O}from"./index.83ef838b.js";import{_ as T}from"./index.f25df0b3.js";import{_ as Z}from"./index.14354bce.js";import{_ as H}from"./index.27d09c8d.js";import{i as J,U as Q,r as W,z as X,a8 as Y,A as s,ay as ee,o as f,j as te,D as t,C as a,Z as oe,B as h,l as C,V as ae,u as c,m as le,q as ne,$ as i,F as se,k as ie}from"./vendor.399b4c48.js";import{u as re}from"./pagination.df425288.js";import de from"./index.a07023cc.js";import{_ as ue}from"./index.f5876f78.js";import"./index.f587cf8c.js";const _e=m=>(le("data-v-7a17636a"),m=m(),ne(),m),ce=_e(()=>ie("p",null,"\u6807\u51C6\u6A21\u5757\u7684\u4F18\u52BF\u4E4B\u4E00\u5C31\u662F\uFF0C\u53EF\u6839\u636E\u8868\u5355\u5185\u5BB9\u91CF\u4E0E\u5173\u8054\u6027\uFF0C\u5FEB\u901F\u5207\u6362\u8868\u5355\u5C55\u793A\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E09\u79CD\u5E38\u89C1\u6A21\u5F0F",-1)),me=i("\u8DEF\u7531\u8DF3\u8F6C"),pe=i("\u5BF9\u8BDD\u6846"),fe=i("\u62BD\u5C49"),ge=i("\u65B0\u589E"),ve=i("\u7B5B \u9009"),be=i("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),he=i("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),Ce=i("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),Me=i("\u7F16\u8F91"),xe=i("\u5220\u9664"),ye=J({name:"PagesExampleFormModeList"});function ke(m){const{pagination:u,getParams:y,onSizeChange:k,onCurrentChange:$,onSortChange:z}=re(),{proxy:_}=se(),M=Q(),e=W({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});X(()=>{r(),e.value.formMode==="router"&&_.$eventBus.on("get-data-list",()=>{r()})}),Y(()=>{e.value.formMode==="router"&&_.$eventBus.off("get-data-list")});function r(){e.value.loading=!0;let l=y();e.value.search.title&&(l.title=e.value.search.title),_.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:l}).then(o=>{e.value.loading=!1,e.value.dataList=o.data.list,u.value.total=o.data.total})}function V(l){k(l).then(()=>r())}function p(l=1){$(l).then(()=>r())}function w(l,o){z(l,o).then(()=>r())}function j(){e.value.formMode==="router"?M.push({name:"pagesExampleGeneralFormModeCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function L(l){e.value.formMode==="router"?M.push({name:"pagesExampleGeneralFormModeEdit",params:{id:l.id}}):(e.value.formModeProps.id=l.id,e.value.formModeProps.visible=!0)}function P(l){_.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${l.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{_.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then(()=>{r(),_.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}return(l,o)=>{const g=s("el-radio-button"),S=s("el-radio-group"),B=H,d=s("el-button"),D=s("el-input"),x=s("el-form-item"),U=s("el-col"),E=s("el-row"),F=s("el-form"),I=Z,N=s("el-button-group"),A=T,v=s("el-table-column"),R=s("el-table"),G=s("el-pagination"),K=O,q=ee("loading");return f(),te("div",null,[t(B,{title:"\u8868\u5355\u5C55\u793A\u6A21\u5F0F"},{content:a(()=>[ce,t(S,{modelValue:e.value.formMode,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value.formMode=n),size:"small"},{default:a(()=>[t(g,{label:"router"},{default:a(()=>[me]),_:1}),t(g,{label:"dialog"},{default:a(()=>[pe]),_:1}),t(g,{label:"drawer"},{default:a(()=>[fe]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(K,null,{default:a(()=>[t(d,{type:"primary",icon:"el-icon-plus",onClick:j},{default:a(()=>[ge]),_:1}),t(I,null,{default:a(()=>[t(F,{model:e.value.search,size:"small","label-width":"100px","label-suffix":"\uFF1A"},{default:a(()=>[t(E,null,{default:a(()=>[t(U,{span:12},{default:a(()=>[t(x,{label:"\u6807\u9898"},{default:a(()=>[t(D,{modelValue:e.value.search.title,"onUpdate:modelValue":o[1]||(o[1]=n=>e.value.search.title=n),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:o[2]||(o[2]=oe(n=>p(),["enter"])),onClear:o[3]||(o[3]=n=>p())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(x,null,{default:a(()=>[t(d,{type:"primary",icon:"el-icon-search",onClick:o[4]||(o[4]=n=>p())},{default:a(()=>[ve]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(f(),h(A,{key:0,data:e.value.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:o[5]||(o[5]=n=>l.$refs.table.toggleAllSelection()),onCheckNull:o[6]||(o[6]=n=>l.$refs.table.clearSelection())},{default:a(()=>[t(d,{size:"small"},{default:a(()=>[be]),_:1}),t(N,null,{default:a(()=>[t(d,{size:"small"},{default:a(()=>[he]),_:1}),t(d,{size:"small"},{default:a(()=>[Ce]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):C("v-if",!0),ae(t(R,{ref:(n,b)=>{b.table=n},class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:w,onSelectionChange:o[7]||(o[7]=n=>e.value.batch.selectionDataList=n)},{default:a(()=>[e.value.batch.enable?(f(),h(v,{key:0,type:"selection",align:"center",fixed:""})):C("v-if",!0),t(v,{prop:"title",label:"\u6807\u9898"}),t(v,{label:"\u64CD\u4F5C",width:"250",align:"center",fixed:"right"},{default:a(n=>[t(d,{type:"primary",size:"mini",plain:"",onClick:b=>L(n.row)},{default:a(()=>[Me]),_:2},1032,["onClick"]),t(d,{type:"danger",size:"mini",plain:"",onClick:b=>P(n.row)},{default:a(()=>[xe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),[[q,e.value.loading]]),t(G,{"current-page":c(u).page,total:c(u).total,"page-size":c(u).size,"page-sizes":c(u).sizes,layout:c(u).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:V,onCurrentChange:p},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(f(),h(de,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":o[8]||(o[8]=n=>e.value.formModeProps.visible=n),mode:e.value.formMode,onSuccess:r},null,8,["id","modelValue","mode"])):C("v-if",!0)])}}const $e=Object.assign(ye,{setup:ke});var Ue=ue($e,[["__scopeId","data-v-7a17636a"]]);export{Ue as default};
