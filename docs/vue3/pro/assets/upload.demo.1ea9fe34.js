
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as C}from"./index.0f7a313d.js";import{B as s,o as f,C as I,D as r,l as $,m as i,F as n,q as k,s as K,t as L,$ as R,H as V,r as G,a3 as H,a2 as P,G as S,V as z,X as O,a6 as N}from"./vendor.b17bec21.js";import{_ as X}from"./index.183dbc98.js";import{_ as J}from"./index.96603fff.js";import{_ as Q}from"./index.d6e5e7a6.js";import{_ as W}from"./index.d1dc7e72.js";const Y=e=>(K("data-v-5b9249bd"),e=e(),L(),e),Z={class:"slot"},ee=Y(()=>i("div",{class:"el-upload__text"},[R("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),i("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),te={key:0,class:"el-upload__tip"},ne={style:{display:"inline-block"}},ae={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=V();function a(m){const u=m.name.split("."),x=u[u.length-1],h=c.ext.indexOf(x)>=0,d=m.size/1024/1024<c.size;return h||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),d||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),h&&d}function y(){v.$message.warning("\u6587\u4EF6\u4E0A\u4F20\u8D85\u8FC7\u9650\u5236")}function w(m,u){o("on-success",m,u)}return(m,u)=>{const x=s("el-icon-upload-filled"),h=s("el-icon"),d=s("el-alert"),t=s("el-upload");return f(),I(t,{action:e.action,data:e.data,name:e.name,"before-upload":a,"on-exceed":y,"on-success":w,"file-list":e.files,limit:e.max,drag:""},{tip:r(()=>[e.notip?k("v-if",!0):(f(),$("div",te,[i("div",ne,[n(d,{title:`\u4E0A\u4F20\u6587\u4EF6\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u4E14\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u4E2A`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))]),default:r(()=>[i("div",Z,[n(h,{class:"el-icon--upload"},{default:r(()=>[n(x)]),_:1}),ee])]),_:1},8,["action","data","name","file-list","limit"])}}};var se=C(ae,[["__scopeId","data-v-5b9249bd"]]);const le={class:"upload-container"},ie={class:"mask"},oe={class:"actions"},ce=["onClick"],ue=["onClick"],re=["onClick"],de=["onClick"],me={key:0,class:"el-upload__tip"},pe={style:{display:"inline-block"}},fe={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=V(),a=G({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function y(t){a.value.dialogImageIndex=t,a.value.imageViewerVisible=!0}function w(){a.value.imageViewerVisible=!1}function m(t){let p=c.url;p.splice(t,1),o("update:url",p)}function u(t,p){let l=c.url;p=="left"&&t!=0&&(l[t]=l.splice(t-1,1,l[t])[0]),p=="right"&&t!=l.length-1&&(l[t]=l.splice(t+1,1,l[t])[0]),o("update:url",l)}function x(t){const p=t.name.split("."),l=p[p.length-1],b=c.ext.indexOf(l)>=0,g=t.size/1024/1024<c.size;return b||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),g||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),b&&g&&(a.value.progress.preview=URL.createObjectURL(t)),b&&g}function h(t){a.value.progress.percent=~~t.percent}function d(t){a.value.progress.preview="",a.value.progress.percent=0,o("on-success",t)}return(t,p)=>{const l=s("el-image"),b=s("el-icon-zoom-in"),g=s("el-icon"),B=s("el-icon-delete"),U=s("el-icon-back"),E=s("el-icon-right"),T=X,M=s("el-progress"),A=s("el-upload"),q=s("el-alert"),D=s("el-image-viewer");return f(),$("div",le,[(f(!0),$(H,null,P(e.url,(F,_)=>(f(),$("div",{key:_,class:"images"},[_<e.max?(f(),I(l,{key:0,src:F,style:S(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):k("v-if",!0),i("div",ie,[i("div",oe,[i("span",{title:"\u9884\u89C8",onClick:j=>y(_)},[n(g,null,{default:r(()=>[n(b)]),_:1})],8,ce),i("span",{title:"\u79FB\u9664",onClick:j=>m(_)},[n(g,null,{default:r(()=>[n(B)]),_:1})],8,ue),z(i("span",{title:"\u5DE6\u79FB",class:N({disabled:_==0}),onClick:j=>u(_,"left")},[n(g,null,{default:r(()=>[n(U)]),_:1})],10,re),[[O,e.url.length>1]]),z(i("span",{title:"\u53F3\u79FB",class:N({disabled:_==e.url.length-1}),onClick:j=>u(_,"right")},[n(g,null,{default:r(()=>[n(E)]),_:1})],10,de),[[O,e.url.length>1]])])])]))),128)),z(n(A,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":x,"on-progress":h,"on-success":d,drag:"",class:"images-upload"},{default:r(()=>[i("div",{class:"image-slot",style:S(`width:${e.width}px;height:${e.height}px;`)},[n(T,{name:"el-icon-plus"})],4),z(i("div",{class:"progress",style:S(`width:${e.width}px;height:${e.height}px;`)},[n(l,{src:a.value.progress.preview,style:S(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),n(M,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:a.value.progress.percent},null,8,["width","percentage"])],4),[[O,a.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),[[O,e.url.length<e.max]]),e.notip?k("v-if",!0):(f(),$("div",me,[i("div",pe,[n(q,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u5F20\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}\uFF0C\u4E14\u56FE\u7247\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u5F20`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),a.value.imageViewerVisible?(f(),I(D,{key:1,"url-list":e.url,"initial-index":a.value.dialogImageIndex,onClose:w},null,8,["url-list","initial-index"])):k("v-if",!0)])}}};var he=C(fe,[["__scopeId","data-v-7164d5f4"]]);const ge={data(){return{image:"",images:[],files:[{name:"\u6D4B\u8BD5\u6587\u4EF6.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}},mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){e.error==""?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){e.error==""?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,o){this.files.push({name:o.name,url:e.error==""?e.data.path:""}),this.$nextTick(()=>{e.error!=""&&(this.$message.warning(e.error),this.files.pop())})}}};function _e(e,o,c,v,a,y){const w=W,m=Q,u=J,x=he,h=se;return f(),$("div",null,[n(w,{title:"\u4E0A\u4F20",content:"ImageUpload / ImagesUpload / FileUpload"}),n(u,{title:"\u5355\u56FE\u4E0A\u4F20"},{default:r(()=>[n(m,{url:a.image,"onUpdate:url":o[0]||(o[0]=d=>a.image=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess1},null,8,["url","onOnSuccess"])]),_:1}),n(u,{title:"\u591A\u56FE\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u5F20\uFF09"},{default:r(()=>[n(x,{url:a.images,"onUpdate:url":o[1]||(o[1]=d=>a.images=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess2},null,8,["url","onOnSuccess"])]),_:1}),n(u,{title:"\u6587\u4EF6\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u4E2A\uFF09"},{default:r(()=>[n(h,{files:a.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess3},null,8,["files","onOnSuccess"])]),_:1})])}var ke=C(ge,[["render",_e]]);export{ke as default};
