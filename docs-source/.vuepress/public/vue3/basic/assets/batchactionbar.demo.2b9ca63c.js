
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as S}from"./index.54bd0297.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{a as v,r as i,b as h,F as b,g as e,f as t,u as k,a0 as C,M as L,J as A,a3 as V,Q as c,K as w,L as z,G as y}from"./vendor.2f16a3e8.js";import{_ as B}from"./index.c69ca106.js";const I={class:"batch-action-bar"},N=c("\u5F53\u9875\u5168\u9009"),j={key:0,class:"tips"},E={props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(a,{emit:n}){const d=a,r=v({get:function(){let o=!1;return d.data.length!=0&&d.data.length==d.selectionData.length&&(o=!0),o},set:function(o){n(o?"check-all":"check-null")}}),l=v(()=>{let o=!1;return d.selectionData.length>0&&d.selectionData.length<d.data.length&&(o=!0),o});return(o,u)=>{const s=i("el-checkbox"),p=i("el-form");return h(),b("div",I,[e(s,{modelValue:k(r),"onUpdate:modelValue":u[0]||(u[0]=f=>C(r)?r.value=f:null),indeterminate:k(l),disabled:!a.data.length},{default:t(()=>[N]),_:1},8,["modelValue","indeterminate","disabled"]),a.selectionData.length?(h(),b("div",j,"\u5DF2\u9009 "+L(a.selectionData.length)+" \u9879",1)):A("v-if",!0),e(p,{disabled:!a.selectionData.length},{default:t(()=>[V(o.$slots,"default",{},void 0,!0)]),_:3},8,["disabled"])])}}};var T=g(E,[["__scopeId","data-v-300b105e"]]);const F={name:"ComponentExampleBatchactionbar",props:{},data(){return{dataList:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}],selectionDataList:[]}},created(){},mounted(){},methods:{}},D=a=>(w("data-v-573c99fc"),a=a(),z(),a),G=D(()=>y("p",null,"BatchActionBar",-1)),J=D(()=>y("p",{style:{"margin-bottom":"0"}},"\u8BE5\u7EC4\u4EF6\u9700\u8981\u548C ElTable \u642D\u914D\u4F7F\u7528",-1)),K=c("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),M=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),Q=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),R=c("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),U=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),q=c("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42");function H(a,n,d,r,l,o){const u=B,s=i("el-button"),p=i("el-button-group"),f=T,m=i("el-table-column"),$=i("el-table"),x=S;return h(),b("div",null,[e(u,{title:"\u6279\u91CF\u64CD\u4F5C\u680F"},{content:t(()=>[G,J]),_:1}),e(x,null,{default:t(()=>[e(f,{data:l.dataList,"selection-data":l.selectionDataList,onCheckAll:n[0]||(n[0]=_=>a.$refs.table.toggleAllSelection()),onCheckNull:n[1]||(n[1]=_=>a.$refs.table.clearSelection())},{default:t(()=>[e(s,{size:"default"},{default:t(()=>[K]),_:1}),e(p,null,{default:t(()=>[e(s,{size:"default"},{default:t(()=>[M]),_:1}),e(s,{size:"default"},{default:t(()=>[Q]),_:1})]),_:1})]),_:1},8,["data","selection-data"]),e($,{ref:"table",data:l.dataList,border:"",stripe:"","highlight-current-row":"",onSelectionChange:n[2]||(n[2]=_=>l.selectionDataList=_)},{default:t(()=>[e(m,{type:"selection",width:"40"}),e(m,{prop:"date",label:"\u65E5\u671F",width:"180"}),e(m,{prop:"name",label:"\u59D3\u540D",width:"180"}),e(m,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"]),e(f,{data:l.dataList,"selection-data":l.selectionDataList,onCheckAll:n[3]||(n[3]=_=>a.$refs.table.toggleAllSelection()),onCheckNull:n[4]||(n[4]=_=>a.$refs.table.clearSelection())},{default:t(()=>[e(s,{size:"default"},{default:t(()=>[R]),_:1}),e(p,null,{default:t(()=>[e(s,{size:"default"},{default:t(()=>[U]),_:1}),e(s,{size:"default"},{default:t(()=>[q]),_:1})]),_:1})]),_:1},8,["data","selection-data"])]),_:1})])}var Y=g(F,[["render",H],["__scopeId","data-v-573c99fc"]]);export{Y as default};
