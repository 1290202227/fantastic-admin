
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as I}from"./plugin-vue_export-helper.5a098b48.js";import{r as v,l as d,m as N,n as y,J as x,K as a,s as c,O as S,P as V,Q as B,U as K,h as U,a1 as L,Y as q,X as F,a0 as z,L as O,M as j,$ as E}from"./vendor.9f126d3c.js";import{_ as P}from"./index.b2fe0119.js";import{_ as R}from"./index.6687cc4e.js";import{_ as D}from"./index.4fbd32c6.js";const J=e=>(V("data-v-6c490d82"),e=e(),B(),e),Q=J(()=>a("div",{class:"slot"},[a("i",{class:"el-icon-upload"}),a("div",{class:"el-upload__text"},[K("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),a("em",null,"\u70B9\u51FB\u4E0A\u4F20")])],-1)),X={key:0,class:"el-upload__tip"},Y={style:{display:"inline-block"}},G={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:l}){const n=e,{proxy:g}=U();function t(r){const o=r.name.split("."),_=o[o.length-1],p=n.ext.indexOf(_)>=0,m=r.size/1024/1024<n.size;return p||g.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u53EA\u652F\u6301 ${n.ext.join(" / ")} \u683C\u5F0F\uFF01`),m||g.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${n.size}MB\uFF01`),p&&m}function f(){g.$message.warning("\u6587\u4EF6\u4E0A\u4F20\u8D85\u8FC7\u9650\u5236")}function $(r,o){l("on-success",r,o)}return(r,o)=>{const _=v("el-alert"),p=v("el-upload");return d(),N(p,{action:e.action,data:e.data,name:e.name,"before-upload":t,"on-exceed":f,"on-success":$,"file-list":e.files,limit:e.max,drag:""},{tip:y(()=>[e.notip?S("v-if",!0):(d(),x("div",X,[a("div",Y,[c(_,{title:`\u4E0A\u4F20\u6587\u4EF6\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u4E14\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u4E2A`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))]),default:y(()=>[Q]),_:1},8,["action","data","name","file-list","limit"])}}};var H=I(G,[["__scopeId","data-v-6c490d82"]]);const k=e=>(V("data-v-6895238b"),e=e(),B(),e),W={class:"upload-container"},Z={class:"mask"},ee={class:"actions"},te=["onClick"],se=k(()=>a("i",{class:"el-icon-zoom-in"},null,-1)),ae=[se],ie=["onClick"],le=k(()=>a("i",{class:"el-icon-delete"},null,-1)),ne=[le],oe=["onClick"],ce=k(()=>a("i",{class:"el-icon-back"},null,-1)),re=[ce],ue=["onClick"],de=k(()=>a("i",{class:"el-icon-right"},null,-1)),pe=[de],me=k(()=>a("i",{class:"el-icon-plus"},null,-1)),he=[me],ge={key:0,class:"el-upload__tip"},fe={style:{display:"inline-block"}},_e={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:l}){const n=e,{proxy:g}=U(),t=L({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function f(s){t.value.dialogImageIndex=s,t.value.imageViewerVisible=!0}function $(){t.value.imageViewerVisible=!1}function r(s){let u=n.url;u.splice(s,1),l("update:url",u)}function o(s,u){let i=n.url;u=="left"&&s!=0&&(i[s]=i.splice(s-1,1,i[s])[0]),u=="right"&&s!=i.length-1&&(i[s]=i.splice(s+1,1,i[s])[0]),l("update:url",i)}function _(s){const u=s.name.split("."),i=u[u.length-1],w=n.ext.indexOf(i)>=0,b=s.size/1024/1024<n.size;return w||g.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${n.ext.join(" / ")} \u683C\u5F0F\uFF01`),b||g.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${n.size}MB\uFF01`),w&&b&&(t.value.progress.preview=URL.createObjectURL(s)),w&&b}function p(s){t.value.progress.percent=~~s.percent,t.value.progress.percent==100&&(t.value.progress.preview="",t.value.progress.percent=0)}function m(s){l("on-success",s)}return(s,u)=>{const i=v("el-image"),w=v("el-progress"),b=v("el-upload"),T=v("el-alert"),M=v("el-image-viewer");return d(),x("div",W,[(d(!0),x(q,null,F(e.url,(A,h)=>(d(),x("div",{key:h,class:"images"},[h<e.max?(d(),N(i,{key:0,src:A,style:z(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):S("v-if",!0),a("div",Z,[a("div",ee,[a("span",{title:"\u9884\u89C8",onClick:C=>f(h)},ae,8,te),a("span",{title:"\u79FB\u9664",onClick:C=>r(h)},ne,8,ie),O(a("span",{title:"\u5DE6\u79FB",class:E({disabled:h==0}),onClick:C=>o(h,"left")},re,10,oe),[[j,e.url.length>1]]),O(a("span",{title:"\u53F3\u79FB",class:E({disabled:h==e.url.length-1}),onClick:C=>o(h,"right")},pe,10,ue),[[j,e.url.length>1]])])])]))),128)),O(c(b,{"show-file-list":!1,headers:e.headers,action:e.action,data:t.value,name:e.name,"before-upload":_,"on-progress":p,"on-success":m,drag:"",class:"images-upload"},{default:y(()=>[a("div",{class:"image-slot",style:z(`width:${e.width}px;height:${e.height}px;`)},he,4),O(a("div",{class:"progress",style:z(`width:${e.width}px;height:${e.height}px;`)},[c(i,{src:t.value.progress.preview,style:z(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),c(w,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:t.value.progress.percent},null,8,["width","percentage"])],4),[[j,t.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),[[j,e.url.length<e.max]]),e.notip?S("v-if",!0):(d(),x("div",ge,[a("div",fe,[c(T,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u5F20\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}\uFF0C\u4E14\u56FE\u7247\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u5F20`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),t.value.imageViewerVisible?(d(),N(M,{key:1,"url-list":e.url,"initial-index":t.value.dialogImageIndex,onClose:$},null,8,["url-list","initial-index"])):S("v-if",!0)])}}};var ve=I(_e,[["__scopeId","data-v-6895238b"]]);const ye={data(){return{image:"",images:[],files:[{name:"\u6D4B\u8BD5\u6587\u4EF6.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}},mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){e.error==""?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){e.error==""?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,l){this.files.push({name:l.name,url:e.error==""?e.data.path:""}),this.$nextTick(()=>{e.error!=""&&(this.$message.warning(e.error),this.files.pop())})}}};function xe(e,l,n,g,t,f){const $=D,r=R,o=P,_=ve,p=H;return d(),x("div",null,[c($,{title:"\u4E0A\u4F20",content:"ImageUpload / ImagesUpload / FileUpload"}),c(o,{title:"\u5355\u56FE\u4E0A\u4F20"},{default:y(()=>[c(r,{url:t.image,"onUpdate:url":l[0]||(l[0]=m=>t.image=m),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:f.handleSuccess1},null,8,["url","onOnSuccess"])]),_:1}),c(o,{title:"\u591A\u56FE\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u5F20\uFF09"},{default:y(()=>[c(_,{url:t.images,"onUpdate:url":l[1]||(l[1]=m=>t.images=m),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:f.handleSuccess2},null,8,["url","onOnSuccess"])]),_:1}),c(o,{title:"\u6587\u4EF6\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u4E2A\uFF09"},{default:y(()=>[c(p,{files:t.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:f.handleSuccess3},null,8,["files","onOnSuccess"])]),_:1})])}var ze=I(ye,[["render",xe]]);export{ze as default};
