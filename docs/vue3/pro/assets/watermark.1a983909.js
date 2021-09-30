
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.9fbc5cc3.js";import{_ as t}from"./index.c535d87f.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";import{r,l as n,H as o,s as l,n as s,S as i}from"./vendor.e59ac5d6.js";const m={computed:{enableWatermark:{get:function(){return this.$store.state.settings.enableWatermark},set:function(e){this.$store.commit("settings/updateThemeSetting",{enableWatermark:e})}}}},u=i("开启"),d=i("关闭");var c=a(m,[["render",function(a,i,m,c,f,p){const b=e,_=r("el-radio-button"),g=r("el-radio-group"),k=t;return n(),o("div",null,[l(b,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),l(k,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:s((()=>[l(g,{modelValue:p.enableWatermark,"onUpdate:modelValue":i[0]||(i[0]=e=>p.enableWatermark=e)},{default:s((()=>[l(_,{label:!0},{default:s((()=>[u])),_:1}),l(_,{label:!1},{default:s((()=>[d])),_:1})])),_:1},8,["modelValue"])])),_:1})])}]]);export{c as default};
