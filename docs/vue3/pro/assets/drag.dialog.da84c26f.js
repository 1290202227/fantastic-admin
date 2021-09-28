
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as l}from"./index.d7acb132.js";import{_ as a}from"./index.6d456c03.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";import{r as i,am as o,l as t,H as d,s,n,J as r,I as u,S as p}from"./vendor.1e0be253.js";const f={data:()=>({dialogVisible:!1})},m=p("点击打开 Dialog"),g=u("div",null," 按住我进行拖动 ",-1),b=u("span",null,"这是一段信息",-1),c={class:"dialog-footer"},V=p("取 消"),_=p("确 定");var v=e(f,[["render",function(e,p,f,v,x,j){const k=l,y=i("el-button"),C=i("el-dialog"),h=a,w=o("drag");return t(),d("div",null,[s(k,{title:"可拖动对话框"}),s(h,null,{default:n((()=>[s(y,{type:"text",onClick:p[0]||(p[0]=l=>x.dialogVisible=!0)},{default:n((()=>[m])),_:1}),r(u("div",null,[s(C,{modelValue:x.dialogVisible,"onUpdate:modelValue":p[3]||(p[3]=l=>x.dialogVisible=l),width:"30%"},{title:n((()=>[g])),footer:n((()=>[u("span",c,[s(y,{onClick:p[1]||(p[1]=l=>x.dialogVisible=!1)},{default:n((()=>[V])),_:1}),s(y,{type:"primary",onClick:p[2]||(p[2]=l=>x.dialogVisible=!1)},{default:n((()=>[_])),_:1})])])),default:n((()=>[b])),_:1},8,["modelValue"])],512),[[w]])])),_:1})])}]]);export{v as default};
