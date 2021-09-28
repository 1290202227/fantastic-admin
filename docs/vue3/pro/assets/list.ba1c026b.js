
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as a}from"./index.e91f0465.js";import{_ as t}from"./index.d6dbcd0e.js";import{_ as l}from"./index.6d456c03.js";import{ai as o,i,a0 as s,$ as n,o as r,a1 as d,r as u,am as p,l as m,H as c,s as f,n as v,Q as g,m as b,L as _,J as h,q as k,S as x,h as y}from"./vendor.1e0be253.js";import{g as C,p as M,o as z,a as $,b as j}from"./pagination.8d054c1a.js";import L from"./index.344003b4.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";import"./index.e1be7a64.js";const P=x("返回"),S=x("新增职位"),V=x("筛 选"),U=x("单个批量操作按钮"),D=x("批量操作按钮组1"),E=x("批量操作按钮组2"),J=x("编辑"),R=x("删除"),A=o({name:"PagesExampleDepartmentJobList"});var B=w(Object.assign(A,{setup:function(o){const{proxy:x}=y(),w=i(),A=s(),B=n({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[],department:""});function G(){B.value.loading=!0;let e=C();e.department_id=w.params.department_id,B.value.search.title&&(e.title=B.value.search.title),x.$api.get("pages_example/job/list",{baseURL:"/mock/",params:e}).then((e=>{B.value.loading=!1,B.value.dataList=e.data.list,M.value.total=e.data.total}))}function K(e){z(e).then((()=>G()))}function q(e){$(e).then((()=>G()))}function H(e,a){j(e,a).then((()=>G()))}function I(){"router"===B.value.formMode?A.push({name:"pagesExampleGeneralJobCreate",params:{department_id:w.params.department_id}}):(B.value.formModeProps.id="",B.value.formModeProps.visible=!0)}return r((()=>{x.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:w.params.department_id}}).then((e=>{B.value.department=e.data.title})),G(),"router"===B.value.formMode&&x.$eventBus.on("get-data-list",(()=>{G()}))})),d((()=>{"router"===B.value.formMode&&x.$eventBus.off("get-data-list")})),(o,i)=>{const s=u("el-button"),n=e,r=u("el-input"),d=u("el-form-item"),y=u("el-col"),C=u("el-row"),z=u("el-form"),$=a,j=u("el-button-group"),N=t,O=u("el-table-column"),Q=u("el-table"),F=u("el-pagination"),T=l,W=p("loading");return m(),c("div",null,[f(n,{title:`「${B.value.department}」职位管理`,content:"页面数据为 Mock 示例数据，非真实数据。"},{default:v((()=>[f(s,{icon:"el-icon-arrow-left",size:"mini",round:"",onClick:i[0]||(i[0]=e=>o.$router.go(-1))},{default:v((()=>[P])),_:1})])),_:1},8,["title"]),f(T,null,{default:v((()=>[f(s,{type:"primary",icon:"el-icon-plus",onClick:I},{default:v((()=>[S])),_:1}),f($,null,{default:v((()=>[f(z,{model:B.value.search,size:"small","label-width":"100px","label-suffix":"："},{default:v((()=>[f(C,null,{default:v((()=>[f(y,{span:12},{default:v((()=>[f(d,{label:"职位"},{default:v((()=>[f(r,{modelValue:B.value.search.title,"onUpdate:modelValue":i[1]||(i[1]=e=>B.value.search.title=e),placeholder:"请输入职位名称，支持模糊查询",clearable:"",onKeydown:g(G,["enter"]),onClear:G},null,8,["modelValue","onKeydown"])])),_:1})])),_:1})])),_:1}),f(d,null,{default:v((()=>[f(s,{type:"primary",icon:"el-icon-search",onClick:G},{default:v((()=>[V])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),B.value.batch.enable?(m(),b(N,{key:0,data:B.value.dataList,"selection-data":B.value.batch.selectionDataList,onCheckAll:i[2]||(i[2]=e=>o.$refs.table.toggleAllSelection()),onCheckNull:i[3]||(i[3]=e=>o.$refs.table.clearSelection())},{default:v((()=>[f(s,{size:"small"},{default:v((()=>[U])),_:1}),f(j,null,{default:v((()=>[f(s,{size:"small"},{default:v((()=>[D])),_:1}),f(s,{size:"small"},{default:v((()=>[E])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):_("v-if",!0),h(f(Q,{ref:(e,a)=>{a.table=e},class:"list-table",data:B.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:H,onSelectionChange:i[4]||(i[4]=e=>B.value.batch.selectionDataList=e)},{default:v((()=>[B.value.batch.enable?(m(),b(O,{key:0,type:"selection",width:"40"})):_("v-if",!0),f(O,{prop:"title",label:"职位"}),f(O,{label:"操作",width:"250",align:"center"},{default:v((e=>[f(s,{type:"primary",size:"mini",plain:"",onClick:a=>{return t=e.row,void("router"===B.value.formMode?A.push({name:"pagesExampleGeneralJobEdit",params:{id:t.id,department_id:w.params.department_id}}):(B.value.formModeProps.id=t.id,B.value.formModeProps.visible=!0));var t}},{default:v((()=>[J])),_:2},1032,["onClick"]),f(s,{type:"danger",size:"mini",plain:"",onClick:a=>{return t=e.row,void x.$confirm(`确认删除「${t.title}」吗？`,"确认信息").then((()=>{x.$api.post("pages_example/job/delete",{id:t.id},{baseURL:"/mock/"}).then((()=>{G(),x.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var t}},{default:v((()=>[R])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),[[W,B.value.loading]]),f(F,{"current-page":k(M).page,total:k(M).total,"page-size":k(M).size,"page-sizes":k(M).sizes,layout:k(M).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:K,onCurrentChange:q},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(B.value.formMode)?(m(),b(L,{key:0,id:B.value.formModeProps.id,modelValue:B.value.formModeProps.visible,"onUpdate:modelValue":i[5]||(i[5]=e=>B.value.formModeProps.visible=e),"department-id":o.$route.params.department_id,mode:B.value.formMode,onSuccess:G},null,8,["id","modelValue","department-id","mode"])):_("v-if",!0)])}}}),[["__scopeId","data-v-5993454b"]]);export{B as default};
