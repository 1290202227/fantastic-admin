
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.173e2cfe.js";import{_ as a}from"./index.f03e52fd.js";import{H as l,I as i,r as s,l as n,J as o,s as d,n as r,P as c,R as u}from"./vendor.7707186e.js";const p={data:()=>({search:{title:""},dataList:[{id:1,title:"标题1"},{id:2,title:"标题2"},{id:3,title:"标题3"},{id:4,title:"标题4"},{id:5,title:"标题5"},{id:6,title:"标题6"},{id:7,title:"标题7"},{id:8,title:"标题8"},{id:9,title:"标题9"},{id:10,title:"标题10"}],page:3}),methods:{getDataList(){this.$message.success({message:"你点击了筛选",center:!0})},onCreate(){this.$message.success({message:"你点击了新增",center:!0})},onEdit(){this.$message.success({message:"你点击了编辑",center:!0})},onDel(e){this.$confirm(`确认删除「${e.title}」吗？`,"确认信息").then((()=>{this.$message.success({message:"你点击了删除",center:!0})})).catch((()=>{}))}}};l("data-v-166c4d06");const m=u("新增"),f=u("筛 选"),g=u("编辑"),h=u("删除");i(),p.render=function(l,i,u,p,_,b){const y=e,C=s("el-button"),w=s("el-input"),k=s("el-form-item"),x=s("el-col"),z=s("el-row"),D=s("el-form"),L=t,$=s("el-table-column"),j=s("el-table"),v=s("el-pagination"),V=a;return n(),o("div",null,[d(y,{title:"基础列表",content:"最常见的列表展示形式，包含增删改查等基础操作。"}),d(V,null,{default:r((()=>[d(C,{type:"primary",icon:"el-icon-plus"},{default:r((()=>[m])),_:1}),d(L,null,{default:r((()=>[d(D,{model:_.search,size:"small","label-width":"100px","label-suffix":"："},{default:r((()=>[d(z,null,{default:r((()=>[d(x,{span:12},{default:r((()=>[d(k,{label:"名称"},{default:r((()=>[d(w,{modelValue:_.search.title,"onUpdate:modelValue":i[0]||(i[0]=e=>_.search.title=e),placeholder:"请输入名称，支持模糊查询",clearable:"",onKeydown:c(b.getDataList,["enter"]),onClear:b.getDataList},null,8,["modelValue","onKeydown","onClear"])])),_:1})])),_:1})])),_:1}),d(k,null,{default:r((()=>[d(C,{type:"primary",icon:"el-icon-search",onClick:b.getDataList},{default:r((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1}),d(j,{ref:"table",class:"list-table",data:_.dataList,border:"",stripe:"","highlight-current-row":""},{default:r((()=>[d($,{prop:"title",label:"名称"}),d($,{label:"操作",width:"200",align:"center"},{default:r((e=>[d(C,{type:"primary",size:"mini",plain:"",onClick:t=>b.onEdit(e.row)},{default:r((()=>[g])),_:2},1032,["onClick"]),d(C,{type:"danger",size:"mini",plain:"",onClick:t=>b.onDel(e.row)},{default:r((()=>[h])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),d(v,{"current-page":_.page,total:100,"page-size":10,"page-sizes":[10,50,100],layout:"total, sizes, ->, prev, pager, next, jumper","hide-on-single-page":!1,class:"pagination",background:""},null,8,["current-page"])])),_:1})])},p.__scopeId="data-v-166c4d06";export{p as default};
