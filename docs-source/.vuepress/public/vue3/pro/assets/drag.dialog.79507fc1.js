
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as l}from"./index.281722fb.js";import{_ as a}from"./index.46bcf552.js";import{r as i,an as e,n as o,J as d,q as t,l as s,L as n,K as r,R as u}from"./vendor.3dac1dfd.js";const f={data:()=>({dialogVisible:!1})},g=u("点击打开 Dialog"),m=r("div",null," 按住我进行拖动 ",-1),p=r("span",null,"这是一段信息",-1),b={class:"dialog-footer"},c=u("取 消"),V=u("确 定");f.render=function(u,f,_,v,x,j){const k=l,y=i("el-button"),C=i("el-dialog"),h=a,q=e("drag");return o(),d("div",null,[t(k,{title:"可拖动对话框"}),t(h,null,{default:s((()=>[t(y,{type:"text",onClick:f[0]||(f[0]=l=>x.dialogVisible=!0)},{default:s((()=>[g])),_:1}),n(r("div",null,[t(C,{modelValue:x.dialogVisible,"onUpdate:modelValue":f[3]||(f[3]=l=>x.dialogVisible=l),width:"30%"},{title:s((()=>[m])),footer:s((()=>[r("span",b,[t(y,{onClick:f[1]||(f[1]=l=>x.dialogVisible=!1)},{default:s((()=>[c])),_:1}),t(y,{type:"primary",onClick:f[2]||(f[2]=l=>x.dialogVisible=!1)},{default:s((()=>[V])),_:1})])])),default:s((()=>[p])),_:1},8,["modelValue"])],512),[[q]])])),_:1})])};export{f as default};
