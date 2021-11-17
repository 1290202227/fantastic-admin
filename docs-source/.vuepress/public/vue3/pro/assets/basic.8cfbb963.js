
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as U}from"./index.83ef838b.js";import{_ as j}from"./index.27d09c8d.js";import{_ as h}from"./index.f5876f78.js";import{A as m,j as C,D as e,C as l,o as B,$ as a}from"./vendor.399b4c48.js";const N={data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}}},A=a("-"),D=a("\u7ACB\u5373\u521B\u5EFA"),E=a("\u53D6\u6D88");function T(q,t,z,F,o,G){const c=j,u=m("el-input"),_=m("el-form-item"),p=m("el-option"),i=m("el-select"),b=m("el-date-picker"),d=m("el-col"),V=m("el-time-picker"),y=m("el-switch"),r=m("el-checkbox"),x=m("el-checkbox-group"),s=m("el-radio"),g=m("el-radio-group"),f=m("el-button"),k=m("el-form"),v=m("el-row"),w=U;return B(),C("div",null,[e(c,{title:"\u57FA\u7840\u8868\u5355",content:"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002\u8868\u5355\u57DF\u6807\u7B7E\u4E5F\u53EF\u652F\u6301\u54CD\u5E94\u5F0F\u3002"}),e(w,null,{default:l(()=>[e(v,{type:"flex",justify:"center"},{default:l(()=>[e(d,{md:12,sm:18},{default:l(()=>[e(k,{model:o.form,"label-width":"80px"},{default:l(()=>[e(_,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:l(()=>[e(u,{modelValue:o.form.name,"onUpdate:modelValue":t[0]||(t[0]=n=>o.form.name=n)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(i,{modelValue:o.form.region,"onUpdate:modelValue":t[1]||(t[1]=n=>o.form.region=n),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:l(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:l(()=>[e(d,{span:11},{default:l(()=>[e(b,{modelValue:o.form.date1,"onUpdate:modelValue":t[2]||(t[2]=n=>o.form.date1=n),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(d,{class:"line",span:2},{default:l(()=>[A]),_:1}),e(d,{span:11},{default:l(()=>[e(V,{modelValue:o.form.date2,"onUpdate:modelValue":t[3]||(t[3]=n=>o.form.date2=n),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{label:"\u5373\u65F6\u914D\u9001"},{default:l(()=>[e(y,{modelValue:o.form.delivery,"onUpdate:modelValue":t[4]||(t[4]=n=>o.form.delivery=n)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:l(()=>[e(x,{modelValue:o.form.type,"onUpdate:modelValue":t[5]||(t[5]=n=>o.form.type=n)},{default:l(()=>[e(r,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(r,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(r,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(r,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:l(()=>[e(g,{modelValue:o.form.resource,"onUpdate:modelValue":t[6]||(t[6]=n=>o.form.resource=n)},{default:l(()=>[e(s,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(s,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:l(()=>[e(u,{modelValue:o.form.desc,"onUpdate:modelValue":t[7]||(t[7]=n=>o.form.desc=n),type:"textarea"},null,8,["modelValue"])]),_:1}),e(_,null,{default:l(()=>[e(f,{type:"primary"},{default:l(()=>[D]),_:1}),e(f,null,{default:l(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}var L=h(N,[["render",T]]);export{L as default};
