
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.281722fb.js";import{_ as t}from"./index.46bcf552.js";import{r as a,n as r,J as n,q as o,l,R as s}from"./vendor.3dac1dfd.js";const d={computed:{enableWatermark:{get:function(){return this.$store.state.settings.enableWatermark},set:function(e){this.$store.commit("settings/updateThemeSetting",{enableWatermark:e})}}}},i=s("开启"),m=s("关闭");d.render=function(s,d,u,f,c,b){const p=e,k=a("el-radio-button"),W=a("el-radio-group"),_=t;return r(),n("div",null,[o(p,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),o(_,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:l((()=>[o(W,{modelValue:b.enableWatermark,"onUpdate:modelValue":d[0]||(d[0]=e=>b.enableWatermark=e)},{default:l((()=>[o(k,{label:!0},{default:l((()=>[i])),_:1}),o(k,{label:!1},{default:l((()=>[m])),_:1})])),_:1},8,["modelValue"])])),_:1})])};export{d as default};
