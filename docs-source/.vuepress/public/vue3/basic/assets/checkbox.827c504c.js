
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.0c00e5b3.js";import{_ as l}from"./index.3fc04fb2.js";import a from"./alert.3c47ba1f.js";import{_ as d}from"./plugin-vue_export-helper.5a098b48.js";import{r as c,a as o,n as t,t as u,x as s,Q as m,R as i,G as r,c as k,C as b}from"./vendor.e08917c3.js";const h=["上海","北京","广州","深圳"],n={components:{Alert:a},data:()=>({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:h,checkboxGroup1:["上海"],checked3:!0,checked4:!1})},f=r("备选项"),V=r("备选项1"),p=r("备选项");var _=d(n,[["render",function(a,d,h,n,_,x){const U=c("Alert"),j=e,C=c("el-checkbox"),v=l,A=c("el-checkbox-group"),G=c("el-checkbox-button");return o(),t("div",null,[u(U),u(j,{title:"多选框"}),u(v,{title:"基础用法",class:"demo"},{default:s((()=>[u(C,{modelValue:_.checked,"onUpdate:modelValue":d[0]||(d[0]=e=>_.checked=e)},{default:s((()=>[f])),_:1},8,["modelValue"])])),_:1}),u(v,{title:"禁用状态",class:"demo"},{default:s((()=>[u(C,{modelValue:_.checked1,"onUpdate:modelValue":d[1]||(d[1]=e=>_.checked1=e),disabled:""},{default:s((()=>[V])),_:1},8,["modelValue"]),u(C,{modelValue:_.checked2,"onUpdate:modelValue":d[2]||(d[2]=e=>_.checked2=e),disabled:""},{default:s((()=>[p])),_:1},8,["modelValue"])])),_:1}),u(v,{title:"多选框组",class:"demo"},{default:s((()=>[u(A,{modelValue:_.checkList,"onUpdate:modelValue":d[3]||(d[3]=e=>_.checkList=e)},{default:s((()=>[u(C,{label:"复选框 A"}),u(C,{label:"复选框 B"}),u(C,{label:"复选框 C"}),u(C,{label:"禁用",disabled:""}),u(C,{label:"选中且禁用",disabled:""})])),_:1},8,["modelValue"])])),_:1}),u(v,{title:"可选项目数量的限制",class:"demo"},{default:s((()=>[u(A,{modelValue:_.checkedCities,"onUpdate:modelValue":d[4]||(d[4]=e=>_.checkedCities=e),min:1,max:2},{default:s((()=>[(o(!0),t(m,null,i(_.cities,(e=>(o(),k(C,{key:e,label:e},{default:s((()=>[r(b(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(v,{title:"按钮样式",class:"demo"},{default:s((()=>[u(A,{modelValue:_.checkboxGroup1,"onUpdate:modelValue":d[5]||(d[5]=e=>_.checkboxGroup1=e)},{default:s((()=>[(o(!0),t(m,null,i(_.cities,(e=>(o(),k(G,{key:e,label:e},{default:s((()=>[r(b(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(v,{title:"带有边框",class:"demo"},{default:s((()=>[u(C,{modelValue:_.checked3,"onUpdate:modelValue":d[6]||(d[6]=e=>_.checked3=e),label:"备选项1",border:""},null,8,["modelValue"]),u(C,{modelValue:_.checked4,"onUpdate:modelValue":d[7]||(d[7]=e=>_.checked4=e),label:"备选项2",border:""},null,8,["modelValue"])])),_:1})])}]]);export{_ as default};
