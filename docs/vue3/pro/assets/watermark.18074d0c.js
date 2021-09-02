
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{_ as e}from"./index.c1f75aed.js";import{_ as t}from"./index.29752973.js";import{r as a,o as r,z as n,i as o,w as l,I as s}from"./vendor.b5a7373b.js";const i={computed:{enableWatermark:{get:function(){return this.$store.state.settings.enableWatermark},set:function(e){this.$store.commit("settings/updateThemeSetting",{enableWatermark:e})}}}},d=s("开启"),m=s("关闭");i.render=function(s,i,u,f,c,b){const p=e,k=a("el-radio-button"),W=a("el-radio-group"),_=t;return r(),n("div",null,[o(p,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),o(_,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:l((()=>[o(W,{modelValue:b.enableWatermark,"onUpdate:modelValue":i[0]||(i[0]=e=>b.enableWatermark=e)},{default:l((()=>[o(k,{label:!0},{default:l((()=>[d])),_:1}),o(k,{label:!1},{default:l((()=>[m])),_:1})])),_:1},8,["modelValue"])])),_:1})])};export{i as default};
