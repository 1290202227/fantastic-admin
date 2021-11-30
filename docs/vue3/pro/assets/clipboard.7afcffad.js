
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./index.97b46f5a.js";import{_ as m}from"./index.7d1b6e0c.js";import{_ as f}from"./index.3ef64c86.js";import{A as d,j as b,D as e,C as t,o as x,$ as a}from"./vendor.d6030716.js";const V={data(){return{input:"",input2:""}},methods:{copy(){this.$clipboard(this.input),this.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${this.input}`)},open(p){window.open(p,"top")}}},v=a("vue3-clipboard \u5B98\u7F51"),g=a("\u590D\u5236");function h(p,o,k,C,n,l){const s=d("el-button"),r=m,u=d("el-input"),_=c;return x(),b("div",null,[e(r,{title:"\u526A\u8D34\u677F"},{default:t(()=>[e(s,{icon:"el-icon-link",onClick:o[0]||(o[0]=i=>l.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:t(()=>[v]),_:1})]),_:1}),e(_,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:t(()=>[e(u,{modelValue:n.input,"onUpdate:modelValue":o[1]||(o[1]=i=>n.input=i)},{append:t(()=>[e(s,{onClick:l.copy},{default:t(()=>[g]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),e(_,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:t(()=>[e(u,{modelValue:n.input2,"onUpdate:modelValue":o[2]||(o[2]=i=>n.input2=i)},null,8,["modelValue"])]),_:1})])}var B=f(V,[["render",h]]);export{B as default};
