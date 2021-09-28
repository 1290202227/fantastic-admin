
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d7acb132.js";import{_ as t}from"./index.6d456c03.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";import{r as l,l as i,H as n,s as a,n as u,S as p}from"./vendor.1e0be253.js";const s={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},d=p("vue3-clipboard 官网"),r=p("复制");var c=o(s,[["render",function(o,p,s,c,m,f){const _=l("el-button"),b=e,h=l("el-input"),v=t;return i(),n("div",null,[a(b,{title:"剪贴板"},{default:u((()=>[a(_,{icon:"el-icon-link",onClick:p[0]||(p[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:u((()=>[d])),_:1})])),_:1}),a(v,{title:"输入内容，并点击复制按钮"},{default:u((()=>[a(h,{modelValue:m.input,"onUpdate:modelValue":p[1]||(p[1]=e=>m.input=e)},{append:u((()=>[a(_,{onClick:f.copy},{default:u((()=>[r])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),a(v,{title:"复制成功后可在这粘贴测试"},{default:u((()=>[a(h,{modelValue:m.input2,"onUpdate:modelValue":p[2]||(p[2]=e=>m.input2=e)},null,8,["modelValue"])])),_:1})])}]]);export{c as default};
