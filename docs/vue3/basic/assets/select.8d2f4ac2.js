
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as l}from"./index.afd122f8.js";import{_ as e}from"./index.2f66b5c7.js";import a from"./alert.cf2b47b5.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{r as o,a as d,n as t,t as v,x as s,P as n,Q as b,c as m}from"./vendor.8d92a282.js";var p=u({components:{Alert:a},data:()=>({options1:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:"",options2:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value2:"",value3:[]})},[["render",function(a,u,p,r,i,f){const c=o("Alert"),V=l,_=o("el-option"),h=o("el-select"),k=e;return d(),t("div",null,[v(c),v(V,{title:"选择器"}),v(k,{title:"基础用法",class:"demo"},{default:s((()=>[v(h,{modelValue:i.value1,"onUpdate:modelValue":u[0]||(u[0]=l=>i.value1=l),placeholder:"请选择"},{default:s((()=>[(d(!0),t(n,null,b(i.options1,(l=>(d(),m(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(k,{title:"有禁用选项",class:"demo"},{default:s((()=>[v(h,{modelValue:i.value2,"onUpdate:modelValue":u[1]||(u[1]=l=>i.value2=l),placeholder:"请选择"},{default:s((()=>[(d(!0),t(n,null,b(i.options2,(l=>(d(),m(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(k,{title:"禁用状态",class:"demo"},{default:s((()=>[v(h,{modelValue:i.value1,"onUpdate:modelValue":u[2]||(u[2]=l=>i.value1=l),disabled:"",placeholder:"请选择"},{default:s((()=>[(d(!0),t(n,null,b(i.options1,(l=>(d(),m(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(k,{title:"可清空单选",class:"demo"},{default:s((()=>[v(h,{modelValue:i.value1,"onUpdate:modelValue":u[3]||(u[3]=l=>i.value1=l),clearable:"",placeholder:"请选择"},{default:s((()=>[(d(!0),t(n,null,b(i.options1,(l=>(d(),m(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(k,{title:"基础多选",class:"demo"},{default:s((()=>[v(h,{modelValue:i.value3,"onUpdate:modelValue":u[4]||(u[4]=l=>i.value3=l),multiple:"",placeholder:"请选择"},{default:s((()=>[(d(!0),t(n,null,b(i.options1,(l=>(d(),m(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(k,{title:"可搜索",class:"demo"},{default:s((()=>[v(h,{modelValue:i.value1,"onUpdate:modelValue":u[5]||(u[5]=l=>i.value1=l),filterable:"",placeholder:"请选择"},{default:s((()=>[(d(!0),t(n,null,b(i.options1,(l=>(d(),m(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])}]]);export{p as default};
