
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ffbd20e5.js";import{_ as t}from"./index.f03e52fd.js";import{r as o,l,J as n,s as i,n as a,R as u}from"./vendor.7707186e.js";const d={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},s=u("vue3-clipboard 官网"),p=u("复制");d.render=function(u,d,r,c,m,f){const _=o("el-button"),h=e,b=o("el-input"),V=t;return l(),n("div",null,[i(h,{title:"剪贴板"},{default:a((()=>[i(_,{icon:"el-icon-link",onClick:d[0]||(d[0]=e=>f.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:a((()=>[s])),_:1})])),_:1}),i(V,{title:"输入内容，并点击复制按钮"},{default:a((()=>[i(b,{modelValue:m.input,"onUpdate:modelValue":d[1]||(d[1]=e=>m.input=e)},{append:a((()=>[i(_,{onClick:f.copy},{default:a((()=>[p])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),i(V,{title:"复制成功后可在这粘贴测试"},{default:a((()=>[i(b,{modelValue:m.input2,"onUpdate:modelValue":d[2]||(d[2]=e=>m.input2=e)},null,8,["modelValue"])])),_:1})])};export{d as default};
